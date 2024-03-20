import {ApiCodeM, ApiLangMessages} from "./models";

export class MessageTranslation {
    constructor(public code: ApiCodeM, public translations: ApiLangMessages) {
    }

    private toString() {
        return this.code.toString();
    }
}


export class MessageCodes {

    /*
     * SUCCESS
     */
    static readonly SUCCESS = new MessageTranslation("SUCCESS", {fr: "OK", en: "OK"});

    /*
     * GLOBAL
     */
    static readonly GLOBAL_INTERNAL_ERROR = new MessageTranslation("GLOBAL_INTERNAL_ERROR", {
        fr: "Erreur interne",
        en: "An internal server error occurred."
    });
    static readonly BAD_EVENT = new MessageTranslation("BAD_EVENT", {
        fr: "Mauvais event",
        en: "Bad event"
    });
    static readonly BAD_FORMAT = new MessageTranslation("BAD_FORMAT", {
        fr: "Mauvais format de donnée",
        en: "Bad format of data"
    });
    static readonly ERROR = new MessageTranslation("ERROR", {
        fr: "Erreur",
        en: "Erreur"
    });
    static readonly SQL_ERROR = new MessageTranslation("DATABASE_ERROR", {
        fr: "SQL Erreur ",
        en: "SQL Error"
    });
    static readonly BAD_PARAMETERS = new MessageTranslation("BAD_PARAMETERS", {
        fr: "Mauvais paramétrage",
        en: "Bad parameters"
    });
    /*
     * JWT
     */
    static readonly JWT_ERROR = new MessageTranslation("JWT_ERROR", {
        fr: "Erreur d'authentification",
        en: "Authentication Error"
    });
    static readonly JWT_ACCESS_TOKEN_EXPIRE = new MessageTranslation("JWT_ACCESS_TOKEN_EXPIRE", {
        fr: "Votre session a expiré, veuillez vous reconnecter",
        en: "Your session has expired, please log in again"
    });
    static readonly JWT_REFRESH_TOKEN_EXPIRE = new MessageTranslation("JWT_REFRESH_TOKEN_EXPIRE", {
        fr: "Votre session a expiré, veuillez vous reconnecter",
        en: "Your session has expired, please log in again"
    });
    static readonly JWT_FORMAT = new MessageTranslation("JWT_FORMAT", {
        fr: "Mauvais format du token",
        en: "Bad token format"
    });
    static readonly JWT_UNAUTHORIZE = new MessageTranslation("JWT_UNAUTHORIZE", {
        fr: "Votre session a expiré, veuillez vous reconnecter",
        en: "Your session has expired, please log in again"
    });
    /*
     * AUTH
     */
    static readonly AUTH_LOGIN_EMAIL_PASSWORD_REQUIRE = new MessageTranslation("AUTH_LOGIN_EMAIL_PASSWORD_REQUIRE", {
        fr: "Vous devez fournir un email et un mot de passe",
        en: "You must provide an email and a password."
    });
    static readonly AUTH_LOGIN_INVALID = new MessageTranslation("AUTH_LOGIN_INVALID", {
        fr: "Login/mot de passe invalide",
        en: "Invalid login credentials."
    });
    static readonly USER_NOT_FOUND = new MessageTranslation("USER_NOT_FOUND", {
        fr: "Utilisateur introuvable",
        en: "User not found"
    });
    static readonly USER_PERMISSIONS_DENY = new MessageTranslation("USER_NOT_FOUND", {
        fr: "Permissions deny",
        en: "Accès interdit"
    });

    constructor() {
    }

}
