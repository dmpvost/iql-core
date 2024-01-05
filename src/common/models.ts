/**
 * List of ErrorType catch by the API
 */
export enum ErrorType {
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
export type CodeM = string;

/**
 * Different langage supported
 */
export type LanguageCode = "en" | "fr";


export type LangMessages = {
    [lang in LanguageCode]: string;
};

export interface Localized {
    code: CodeM;
    messages: LangMessages;
}


/**
 * Http Code response
 */
export enum HttpCode {
    OK = 200,
    Created = 201,
    NoContent = 204,
    MovedPermanently = 301,
    TemporaryRedirect = 307,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    UnprocessableEntity = 422,
    Locked = 423,
    InternalServerError = 500
}


export enum Severity {
    FATAL = "FATAL",
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",
    DEBUG = "DEBUG"
}


export class MessageTranslation {
    constructor(public code: CodeM, public translations: LangMessages) {
    }

    private toString() {
        return this.code.toString();
    }
}


export class LocalizeError extends Error {

    public status: HttpCode;
    public code: CodeM;
    public type: ErrorType = ErrorType.LocalizeError;
    public message: string;
    public translations: LangMessages;
    public severity: Severity;

    constructor(
        status: HttpCode,
        codeError: MessageTranslation,
        message: string = "",
        severity: Severity = Severity.ERROR,
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


