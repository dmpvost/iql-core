/**
 * IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.
 */
import {HttpCode, Localized} from "./models";

export interface RequestIQL<Request, Response> {
    /**
     * Source origin of the request
     */
    source?: number;
    /**
     * If you want to get the request on the response,
     * activate this property to get it back.
     * It can be useful for debugging, on multi-source/destination sockets.
     */
    request_back?: boolean;
    /**
     * client API version
     */
    version?: string;
    /**
     * Request data
     */
    request: Request;
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
