# IQL-Core

Interface Query Language

- Build over CloudEvents interface
- Build for TSOA
- Support REST and WebSocket
- GraphQL style with limited depth
- Clear separation between API objects and database
- IQ object inspired by IP packets
- Error management with LocalizeError


### Interface Query Language (IQL) Overview

The Interface Query Language (IQL) represents a strategic and technological innovation for developers working with REST, WebSocket protocols, and a GraphQL-inspired approach. Designed to simplify, standardize, and secure the management of requests and responses in backend applications, IQL aims to optimize development, flexibility, performance, and stability, while being adaptable for multilingual use.

1. **Integration with TSOA for Standardization and Documentation**
   IQL utilizes TSOA to automate two crucial aspects of software development: data validation and documentation creation. This means that every piece of information processed by IQL is systematically checked for compliance, reducing common errors and improving system reliability. Simultaneously, API documentation is generated and updated automatically, accelerating the development process with clear, up-to-date information and enabling the creation of ready-to-use client libraries. This ensures perfect consistency between our API and the tools developers use to access it.
   *Goals: Critical process automation*
   *Benefits: Error reduction, development time savings, constantly updated documentation*

2. **Handling of REST and WebSocket Protocols**
   IQL harmonizes the management of REST and WebSocket protocols, offering unprecedented flexibility for standard operations and real-time interactions. This ability to simultaneously handle REST requests, ideal for standard operations, and WebSocket, perfect for live responsiveness like push notifications or chats, optimizes the efficiency of our communication architecture. By integrating an interface compatible with these two protocols, IQL not only speeds up future development but also ensures that all code is interoperable. This significantly reduces workload, practically doubling the efficiency of our development efforts for real-time needs.

3. **Use of a GraphQL-style for Limited Depth Requests**
   IQL integrates a GraphQL-inspired approach for requests, offering limited depth that simplifies the retrieval of complex data. This method reduces network load, enhances efficiency, and optimizes developer experience, while lightening the server load to maintain high performance. This innovative design allows greater flexibility for unforeseen needs without sacrificing quality, giving developers more autonomy to solve problems. By reducing the dependency of teams on each other, IQL increases the overall development velocity in the long term.

4. **Clear Separation of API Objects and Database**
   IQL establishes a clear separation between API business logic and database interactions, enhancing modularity and facilitating maintenance and application evolution. This distinction ensures better data protection and reduces security breach risks. In the current context where the front-end, API, and database are closely linked, a change in the database structure can have costly repercussions across all environments, including iOS, Android, and Web, and it's often complex to anticipate all risks and impacts. The separation provided by IQL creates a stable interface contract that allows changes with more flexibility and fewer unforeseen repercussions, thus offering an additional layer of protection and greater freedom in development.

5. **Design of the IQ Object: Analogous Functioning to IP Packets**
   The IQ object, central to IQL, draws inspiration from IP packets to standardize request and response management. This approach ensures increased flexibility and reliability in data processing, thereby facilitating their tracking, auditing, and asynchronous operation management. In addition to its robustness and versatility for complex tasks, the IQ object stands out for its ability to be used in multiple ways. Firstly, the IQ object can be consumed via APIs using either REST or WebSocket protocols, thus offering extended interoperability and real-time communication. Additionally, it has the unique ability to be put on hold, similar to a task in Redis, and executed later. This feature allows efficient resource management and optimal task planning, offering the possibility to defer operations that do not require immediate execution.

6. **Error Management with LocalizeError and Native Translation**
   IQL adopts an innovative method for error management with LocalizeError, a system that presents error messages in the users' native language. This approach makes errors more understandable and accessible, thus improving the overall user experience. For developers, it simplifies debugging by providing clear and relevant error messages and supports maintaining a truly multilingual API. Ultimately, LocalizeError adds an extra dimension to the convenience and effectiveness of our API, making technical interactions smoother and more intuitive.

### Synthesis of Cost, Time, and Efficiency Gains with IQL
IQL brings notable improvements in terms of cost, time, and efficiency, particularly in the human context:
- **Reduction in Development Costs:** Automating validation and documentation through TSOA, along with standardizing requests via a GraphQL style, minimizes manual coding and maintenance needs. This translates into a significant decrease in development costs.
- **Time Savings for Teams:** By eliminating the need to manually write and update documentation, and by reducing repetitive tasks through the unified management of REST and WebSocket protocols, IQL frees up valuable time for teams. Developers can then focus on value-added tasks.
- **Operational Efficiency:** The clear separation between API business logic and database interactions eases maintenance and change management, thus reducing the risks of errors and delays due to structural changes.
- **Improved Productivity:** The design of

the IQ object, inspired by IP packets, offers flexible and robust data management, enabling developers to efficiently handle complex tasks. This speeds up development processes and boosts overall productivity.
- **Communication Optimization:** Error management with LocalizeError improves end-users' understanding, reducing the need for technical support and enhancing user experience, which translates into better satisfaction and a reduction in customer service-related costs.

### Conclusion
IQL represents a significant advancement in backend application development, innovatively combining REST and WebSocket protocols with a GraphQL-inspired approach. Through its six key aspects:
- Automated standardization and documentation integration with TSOA.
- Unified management of REST and WebSocket protocols for optimal flexibility and responsiveness.
- Use of a GraphQL-style for limited depth requests for enhanced efficiency.
- Clear separation between API objects and the database for better security and ease of maintenance.
- Design of the IQ object, drawing inspiration from IP packets for versatile data management.
- Error management with LocalizeError for improved accessibility and understanding at the international level.

IQL stands as a comprehensive solution, offering substantial benefits for both developers and end-users. Its capability to automate essential processes, unify various communication protocols, and enhance user experience with multilingual features makes it an indispensable tool in the modern landscape of software development. In summary, IQL is not just a step forward in API management technology but also a significant leap in creating smarter, faster, and more intuitive applications.

# IQ Usage and Functioning Guide

## Introduction to IQ

IQ, an innovative protocol for backend development in Express, is designed to simplify and standardize the handling of requests and responses in applications that use both REST and SOCKET networks. It acts as a "data router", processing and modifying requests before redirecting them. Each instance of IQ is treated as a unique packet, encapsulating request and response data.

### Analogy with IP Packets
- **Reception**: Backend receive IQ request as a router receives a packet.
- **Processing**: Data is modified and processed inside the IQ.
- **Sending**: IQ is send back response/error

## IQ Architecture

### Structure
IQ relies on the generic interfaces `RequestIQL<Request>` and `ResponseIQL<Request>`, encapsulating the request and response with details such as success, HTTP code, event, origin, and network.

## Organization of IQ Project Files

### 1. `.routes` Files
- **Function**: Manage REST requests and integration with TSOA for Swagger documentation.
- **Example**: `AuthRoute` managing authentication.

### 2. `.iq` Files
- **Abstraction**: Independently manage logic for REST and SOCKET, always using `Iq<Request, Response>`.
- **Example**: `iq_loginUser` for the login process.

### 3. `.db` Files
- **Role**: Focus on all interactions with the database.
- **Example**: `findUserByEmail` for user search queries.

## Features and Processes

### Request Handling
- **Reception**: Requests are received as `Iq<Request, Response>` objects.
- **Processing**: Validation, application of business logic, and error management.
- **Response**: Sending the appropriate response.

### Error Management
- **Method**: Use of `LocalizeError` for contextualized and localized errors.
- **Localization**: Support for messages in English and French via `LocalizedMessage` and `MessageTranslation`.

### Security
- **Authentication**: Managing sessions with JWT.
- **Validation**: Rigorous verification of user data.

## Key Objectives
- **Abstraction**: Allows the reuse of controllers, independent of the network.
- **Standardization**: Ensures consistent handling of requests and responses.
- **Security**: Ensures the security and reliability of data.

## Conclusion

IQ offers a structured and flexible approach to managing network requests, facilitating the creation of consistent, secure, and maintainable backend applications. This solution is ideal for applications requiring compatibility with various network protocols.

## Code Examples in the IQ Project

### Using `.routes` for REST Management
typescript
// auth.routes.ts
@Route("auth")
export class AuthRoute extends Controller {
@Post("login")
public async api_loginUser(@Body() req: IqLoginI): Promise<IqLoginO> {
// ... Login logic
}

@Post("refresh-token")
public async api_refreshToken(@Body() req: IqRefreshTokenI): Promise<IqRefreshTokenO> {
// ... Token refresh logic
}
}

### Controller Abstraction with `.iq`
typescript
// auth.iq.ts
export async function iq_loginUser(iq: Iq<LoginI, LoginO>): Promise<Iq<LoginI, LoginO>> {
// ... Validation and business logic for login
}

export async function iq_refreshToken(iq: Iq<RefreshTokenI, LoginO>): Promise<Iq<RefreshTokenI, LoginO>> {
// ... Handling token refresh
}

### Interactions with the Database in `.db`
typescript
// user.db.ts
export async function findUserByEmail(email: string): Promise<User | null> {
// ... Query to find a user by email
}

### Handling Requests
typescript
const iq = new Iq<LoginI, LoginO>({ /* ... request data ... */ });
iq_loginUser(iq).then(response => {
// Handle the response
});

### Managing Errors with `LocalizeError`
typescript
try {
// ... Logic that might generate an error
} catch (err) {
throw new LocalizeError(IqHttpCode.BadRequest, MessageCodes.BAD_PARAMETERS, "Specific error");
}