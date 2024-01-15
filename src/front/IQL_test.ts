import {EventIQL} from "../common/EventIQL";
import {RequestIQL, ResponseIQL} from "../common/IQL";


type LoginRequest = {
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
type LoginResponse = {
    /**
     * accessToken for authentification
     */
    accessToken: string;
    /**
     * refreshToken used to refresh the asscess token of the user
     */
    refreshToken: string;
};

type LoginRequestIQL = EventIQL<"AUTH_LOGIN_REQUEST", RequestIQL<LoginRequest, LoginResponse>>;

type LoginResponseIQL = EventIQL<"AUTH_LOGIN_RESPONSE", ResponseIQL<LoginRequest, LoginResponse>>;


