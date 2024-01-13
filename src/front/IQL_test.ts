import {EventIQL} from "../common/NetworkIQL";
import {RequestIQL, ResponseIQL} from "../common/IQL";


export type LoginRequest = {
    /**
     * @format email
     * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     * @example vincent.ostermann@armtek.fr
     */
    email: string;

    /**
     * @minLength 6
     * @example ARMTEK
     */
    password: string;
};
export type LoginResponse = {
    /**
     * accessToken for authentification
     */
    accessToken: string;
    /**
     * refreshToken used to refresh the asscess token of the user
     */
    refreshToken: string;
};

export type LoginRequestIQL = EventIQL<"AUTH_LOGIN_REQUEST", RequestIQL<LoginRequest>>;

export type LoginResponseIQL = EventIQL<"AUTH_LOGIN_RESPONSE", ResponseIQL<LoginRequest, LoginResponse>>;


