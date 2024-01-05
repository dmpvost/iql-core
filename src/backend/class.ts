import {NetworkIQL, NetworkOrigin, ResponseTypeIQL} from "../common/NetworkIQL";
import {MessageCodes} from "../common/MessageCodes";
import {ErrorType, HttpCode, Localized, LocalizeError} from "../common/models";
import {RequestIQL, ResponseIQL} from "../common/IQL";

export class NetworkIQLClass<EventIQL extends string
    , DataIQL, Request, Response> implements NetworkIQL<EventIQL
    , DataIQL, Request, Response> {

    datacontenttype: "application/json";
    dataschema: string;
    id: string;
    source: NetworkOrigin;
    specversion: "1.0";
    subject: EventIQL;
    type: ResponseTypeIQL;

    [key: string]: unknown;

    data?: ResponseIQLClass<EventIQL, Request, Response>;
    data_base64?: string;
    time?: string;


    constructor(iq: NetworkIQL<EventIQL, DataIQL, Request, Response>) {
        this.id = iq.id;
        this.source = iq.source;
        this.specversion = iq.specversion;
        this.subject = iq.subject;
        this.type = iq.type;
        this.dataschema = iq.dataschema;
        this.datacontenttype = iq.datacontenttype;
        this.data = new ResponseIQLClass(iq.data);
        this.time = iq?.time;
        this.data_base64 = iq?.data_base64;
    }

}


export class RequestIQLClass<EventIQL, Request> {
    /**
     * Unique Event name for Controller destination
     * exemple: route: AuthLogin
     */
    event: EventIQL;
    /**
     * client API version
     */
    version?: string; // version of the FRONT app
    /**
     * Request data
     */
    request: Request; // search

    constructor(iq: RequestIQL<EventIQL, Request>) {
        this.event = iq.event;
        this.version = iq.version;
        this.request = iq.request;
    }

    public getReponseIQL(): ResponseIQL<EventIQL, Request, Response> {
        return new ResponseIQLClass(this);
    }

}

/**
 * IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.
 */
export class ResponseIQLClass<EventIQL, Request, Response> extends RequestIQLClass<EventIQL, Request> {

    /**
     * Status of the IQ
     */
    success: boolean;
    /**
     * Http Status
     */
    status: HttpCode;
    /**
     * Response message for developper
     */
    message: string | null;
    /**
     * Translation message to display to the user
     */
    translations?: Localized | null;
    /**
     * Response data
     */
    response?: Response | null;
    /**
     * Extra information of error
     */
    error?: {
        /**
         * Error type
         */
        type: ErrorType,
        /**
         * Any error
         */
        data?: any,
    };


    constructor(iq: RequestIQL<EventIQL, Request>) {
        super(iq);
        this.success = false;
        this.status = 500;
        this.event = iq.event;
        this.version = iq.version;
        this.message = null;
        this.translations = null;
        this.response = null;
    }


    public setSuccess(response: Response, message?: string) {
        this.success = true;
        this.status = 200;
        this.response = response;
        this.message = message || MessageCodes.SUCCESS.translations.en;
        this.translations = {
            code: MessageCodes.SUCCESS.code,
            messages: MessageCodes.SUCCESS.translations,
        };
    }

    public setFailure(localize: LocalizeError, error?: {
        type: ErrorType,
        data?: any,
    }) {
        this.success = false;
        this.status = localize.status;
        this.message = localize.message;
        this.translations = {
            code: localize.code,
            messages: localize.translations,
        };
        this.error = {
            type: ErrorType.LocalizeError,
        };
        if (error) {
            this.error = error;
        }
    }


}
