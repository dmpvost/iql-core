/**
 * IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.
 */
import {HttpCode, Localized} from "./models";

export interface RequestIQL<Request, Response> {
    /**
     * client API version
     */
    version?: string;
    /**
     * Request data
     */
    request: Request;
    /**
     * Source origin of the request
     */
    source?: number;
}

/**
 * IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.
 */
export interface ResponseIQL<Request, Response> extends RequestIQL<Request,Response> {
    status: HttpCode;
    /**
     * Status of the IQ
     */
    success: boolean;
    /**
     * Response message for developper
     */
    message: string;
    /**
     * Translation message to display to the user
     */
    translations?: Localized;
    /**
     * Response data
     */
    response: Response;
    /**
     * Extra information of error
     */
    error?: {
        /**
         * Error type
         */
        type: string;
        /**
         * Any error
         */
        data?: any;
    };
}
