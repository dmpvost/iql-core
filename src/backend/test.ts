//
// export interface login {
//     email: string;
//     password: string;
// }
//
//
// export interface loginSuccess {
//     accessToken: string;
//     refreshToken: string;
// }
//
//
// export interface AuthLoginRequest extends NetworkIQL<"ACTION_LOGIN", "login", RequestIQL<"ACTION_LOGIN", login>> {
// }
//
// export interface AuthLoginResponse extends NetworkIQL<"ACTION_LOGIN", "login", ResponseIQL<"ACTION_LOGIN", login, loginSuccess>> {
// }
//
//
// let req: AuthLoginRequest = {
//     id: createUlid(),
//     source: "WEB:REST",
//     type: ResponseTypeIQL.REPLY_TO_SOURCE,
//     subject: "ACTION_LOGIN",
//     dataschema: "login",
//     datacontenttype: "application/json",
//     data: {
//         version: "1",
//         event: "ACTION_LOGIN",
//         request: {
//             email: "",
//             password: ""
//         },
//     },
//     specversion: "1.0",
// }
//
// let res2 = new NetworkIQL(req);
//
//
// let res: AuthLoginResponse = {
//     id: createUlid(),
//     source: "WEB:REST",
//     type: ResponseTypeIQL.REPLY_TO_SOURCE,
//     subject: "ACTION_LOGIN",
//     dataschema: "login",
//     datacontenttype: "application/json",
//     data: {
//         version: "1",
//         event: "ACTION_LOGIN",
//         request: {
//             email: "",
//             password: ""
//         },
//         success: true,
//         status: HttpCode.Created,
//         message: "",
//         translations: {
//             code: "",
//             messages: {
//                 en: "",
//                 fr: ""
//             }
//         },
//         response: {
//             accessToken: "",
//             refreshToken: ""
//         }
//     },
//     specversion: "1.0",
// }
