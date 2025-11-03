/**
 * List of ApiErrorType catch by the API
 */
export enum ApiErrorType {
    Unknown = "Unknown",
    /**
     * SQL Error
     */
    Database = "Database",
    /**
     * Validation error regarding the OpenApi documentation
     */
    ValidateError = "ValidateError",
    /**
     * Error catch and translated
     */
    LocalizeError = "LocalizeError",
    /**
     * Authentification
     */
    Authentification = "Authentification"
}


/**
 * Type for unique message ID
 */
export type ApiCodeM = string;

/**
 * Different langage supported
 */
export type ApiLanguageCode = "en" | "fr";


export type ApiLangMessages = {
    [lang in ApiLanguageCode]: string;
};

export interface ApiLocalized {
    code: ApiCodeM;
    messages: ApiLangMessages;
}


/**
 * Http Code response
 */
export enum ApiHttpCode {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    PartialContent = 206,
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    TemporaryRedirect = 307,
    PermanentRedirect = 308,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    UnsupportedMediaType = 415,
    UnprocessableEntity = 422,
    Locked = 423,
    TooManyRequests = 429,
    Aborted = 499,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504
}


export enum ApiSeverity {
    FATAL = "FATAL",
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",
    DEBUG = "DEBUG"
}


export class MessageTranslation {
    constructor(public code: ApiCodeM, public translations: ApiLangMessages) {
    }

    private toString() {
        return this.code.toString();
    }
}


export class LocalizeError extends Error {

    public status: ApiHttpCode;
    public code: ApiCodeM;
    public type: ApiErrorType = ApiErrorType.LocalizeError;
    public message: string;
    public translations: ApiLangMessages;
    public severity: ApiSeverity;

    constructor(
        status: ApiHttpCode,
        codeError: MessageTranslation,
        message: string = "",
        severity: ApiSeverity = ApiSeverity.ERROR,
    ) {
        //logger.debug("LocalizeError begin");
        super(codeError?.code?.toString());
        this.status = status;
        this.code = codeError.code;
        this.translations = codeError.translations;
        if (!message) {
            message = this.translations.en;
        }
        this.message = codeError + ": " + message;
        this.severity = severity;
        Object.setPrototypeOf(this, LocalizeError.prototype);
        //logger.debug("LocalizeError end");
    }

}
