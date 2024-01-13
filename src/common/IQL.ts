/**
 * IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.
 */
import {ErrorType, Localized} from "./models";

export interface RequestIQL<EventIQL, Request> {
    /**
     * client API version
     */
    version?: string; // version of the FRONT app
    /**
     * Request data
     */
    request: Request; // search
    /**
     * Source origin of the request
     */
    source?: string // ID of the user
}


/**
 * IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.
 */
export interface ResponseIQL<EventIQL, Request, Response> extends RequestIQL<EventIQL, Request> {
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
}

