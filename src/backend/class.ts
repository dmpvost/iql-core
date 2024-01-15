import {EventIQL, NetworkOrigin, ResponseTypeIQL} from "../common/EventIQL";
import {RequestIQL, ResponseIQL} from "../common/IQL";
import {ErrorType, LocalizeError} from "../common/models";
import {MessageCodes} from "../common/MessageCodes";

// @ts-ignore: IGNORE: [key: string]: unknown;
export class EventIQLClass<Event extends string, DataIQL> implements EventIQL<Event, DataIQL> {
    id: string;
    source: NetworkOrigin;
    type: ResponseTypeIQL;
    data: DataIQL;
    datacontenttype: "application/json";
    dataschema?: string;
    specversion: "1.0";
    subject: Event;
    time?: string | undefined;
    data_base64?: unknown;

    constructor(iq: EventIQL<Event, DataIQL>) {
        this.datacontenttype = iq.datacontenttype;
        this.dataschema = iq?.dataschema;
        this.id = iq.id;
        this.source = iq.source;
        this.specversion = iq.specversion;
        this.subject = iq.subject;
        this.type = iq.type;
        this.data = iq.data as DataIQL;
        this.time = iq.time;
        this.data_base64 = iq.data_base64;
    }
}


export class RequestIQLClass<Event extends string, Request, Response>
    extends EventIQLClass<Event, ResponseIQL<Request, Response>> {

    constructor(iq: EventIQL<Event, RequestIQL<Request, Response>>) {
        super(iq as unknown as EventIQL<Event, ResponseIQL<Request, Response>>);
    }

    public getResponseIQL(): ResponseIQLClass<Event, Request, Response> {
        // @ts-ignore: IGNORE: [key: string]: unknown;
        return new ResponseIQLClass(this);
    }

    public getIql(): EventIQL<Event, RequestIQL<Request, Response>> {
        let iq = {
            id: this.id,
            source: this.source,
            type: this.type,
            data: this.data,
            datacontenttype: this.datacontenttype,
            dataschema: this.dataschema,
            specversion: this.specversion,
            subject: this.subject,
            time: this.time,
            data_base64: this.data_base64
        };
        return iq;
    }
}

/**
 * IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.
 */
export class ResponseIQLClass<Event extends string, Request, Response>
    extends RequestIQLClass<Event, Request, Response> {

    constructor(iq: EventIQL<Event, ResponseIQL<Request, Response>> | EventIQL<Event, RequestIQL<Request, Response>>) {
        super(iq);
        this.data.success = false;
        this.data.status = 500;
        this.data.message = "";
        this.data.translations = {
            code: MessageCodes.ERROR.code,
            messages: MessageCodes.ERROR.translations,
        };
    }


    public setSuccess(response: Response, message?: string) {
        this.data.success = true;
        this.data.status = 200;
        this.data.response = response;
        this.data.message = message || MessageCodes.SUCCESS.translations.en;
        this.data.translations = {
            code: MessageCodes.SUCCESS.code,
            messages: MessageCodes.SUCCESS.translations,
        };
    }

    public setFailure(localize: LocalizeError, error?: {
        type: string | ErrorType,
        data?: any,
    }) {
        this.data.success = false;
        this.data.status = localize.status;
        this.data.message = localize.message;
        this.data.translations = {
            code: localize.code,
            messages: localize.translations,
        };
        this.data.error = {
            type: ErrorType.LocalizeError,
        };
        if (error) {
            this.data.error = error;
        }
    }

    public getIql(): EventIQL<Event, ResponseIQL<Request, Response>> {
        let iq = {
            id: this.id,
            source: this.source,
            type: this.type,
            data: this.data,
            datacontenttype: this.datacontenttype,
            dataschema: this.dataschema,
            specversion: this.specversion,
            subject: this.subject,
            time: this.time,
            data_base64: this.data_base64
        };
        return iq;
    }
}
