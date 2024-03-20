import {CloudEventV1} from "cloudevents";

/**
 * ApiNetwork used to transport the IQ
 */
export enum ApiNetwork {
    /**
     * ApiNetwork API REST
     */
    REST = "REST",
    /**
     * ApiNetwork API Socket.io
     */
    SOCKET = "SOCKET"
}

/**
 * Iq's origin creation
 */
export enum ApiOrigin {
    /**
     * Iq created by the Web
     */
    WEB = "WEB",
    /**
     * IQ created by the mobile
     */
    MOBILE = "MOBILE",
    /**
     * IQ created by the backend
     */
    BACKEND = "BACKEND"
}


export type ApiNetworkOrigin = `${ApiOrigin}:${ApiNetwork}`;



export enum ResponseTypeIQL {
    NO_REPLY = "NO_REPLY", // Backend will not reply
    REPLY_TO_SOURCE = "REPLY_TO_SOURCE", // Backend reply only on this socket
    REPLY_ALL_SESSION = "REPLY_ALL_SESSION", // Backend reply on all room from user
    REPLY_BROADCAST = "REPLY_BROADCAST"
}

export interface EventIQL<EventIQL extends string, DataIQL> {
    /**
     * [REQUIRED] Identifies the event.
     */
    id: string;
    /**
     * [REQUIRED] Response type
     */
    type: ResponseTypeIQL;
    /**
     * [REQUIRED] ApiNetwork used to transport the IQ
     */
    source: ApiNetworkOrigin;
    /**
     * [REQUIRED] Event type
     */
    subject: EventIQL;
    /**
     * Data content type
     */
    datacontenttype: "application/json",
    /**
     * Created Timestamp UTC
     * @format: date(time)
     */
    time?: string;
    /**
     * OBJECT STRUCTURE
     */
    dataschema?: string;
    /**
     * SpecVersion
     */
    specversion: "1.0",
    /**
     * Packet id of the transaction for the backend
     */
    packet?: string;
    /**
     * DATA
     */
    data: DataIQL;

    data_base64?: string;
}
