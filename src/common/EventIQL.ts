import {CloudEventV1} from "cloudevents";

/**
 * Network used to transport the IQ
 */
export enum Network {
    /**
     * Network API REST
     */
    REST = "REST",
    /**
     * Network API Socket.io
     */
    SOCKET = "SOCKET"
}

/**
 * Iq's origin creation
 */
export enum Origin {
    /**
     * Iq created by the Web
     */
    WEB = "WEB",
    /**
     * IQ created by the mobile
     */
    MOBILE = "MOBILE",
    /**
     * IQ created by the backend
     */
    BACKEND = "BACKEND"
}


export type NetworkOrigin = `${Origin}:${Network}`;


export enum ResponseTypeIQL {
    NO_REPLY = "NO_REPLY", // Backend will not reply
    REPLY_TO_SOURCE = "REPLY_TO_SOURCE", // Backend reply only on this socket
    REPLY_ALL_SESSION = "REPLY_ALL_SESSION", // Backend reply on all room from user
    REPLY_BROADCAST = "REPLY_BROADCAST"
}


export interface EventIQL<EventIQL extends string, DataIQL> extends CloudEventV1<DataIQL>{
    /**
     * [REQUIRED] Identifies the event. Producers MUST ensure that `source` + `id`
     * is unique for each distinct event. If a duplicate event is re-sent (e.g. due
     * to a network error) it MAY have the same `id`. Consumers MAY assume that
     * Events with identical `source` and `id` are duplicates.
     * @required Non-empty string. Unique within producer.
     * @example An event counter maintained by the producer
     * @example A UUID
     */
    id: string;
    /**
     * [REQUIRED] This attribute contains a value describing the type of event
     * related to the originating occurrence. Often this attribute is used for
     * routing, observability, policy enforcement, etc. The format of this is
     * producer defined and might include information such as the version of the
     * `type` - see
     * [Versioning of Attributes in the Primer](primer.md#versioning-of-attributes)
     * for more information.
     * @required MUST be a non-empty string
     * @should SHOULD be prefixed with a reverse-DNS name. The prefixed domain dictates the
     *   organization which defines the semantics of this event type.
     * @example com.github.pull.create
     * @example com.example.object.delete.v2
     */
    type: ResponseTypeIQL;
    /**
     * [REQUIRED] Identifies the context in which an event happened. Often this
     * will include information such as the type of the event source, the
     * organization publishing the event or the process that produced the event. The
     * exact syntax and semantics behind the data encoded in the URI is defined by
     * the event producer.
     * Producers MUST ensure that `source` + `id` is unique for each distinct event.
     * An application MAY assign a unique `source` to each distinct producer, which
     * makes it easy to produce unique IDs since no other producer will have the same
     * source. The application MAY use UUIDs, URNs, DNS authorities or an
     * application-specific scheme to create unique `source` identifiers.
     * A source MAY include more than one producer. In that case the producers MUST
     * collaborate to ensure that `source` + `id` is unique for each distinct event.
     * @required Non-empty URI-reference
     */
    source: NetworkOrigin;
    /**
     * [OPTIONAL] This describes the subject of the event in the context of the
     * event producer (identified by `source`). In publish-subscribe scenarios, a
     * subscriber will typically subscribe to events emitted by a `source`, but the
     * `source` identifier alone might not be sufficient as a qualifier for any
     * specific event if the `source` context has internal sub-structure.
     *
     * Identifying the subject of the event in context metadata (opposed to only in
     * the `data` payload) is particularly helpful in generic subscription filtering
     * scenarios where middleware is unable to interpret the `data` content. In the
     * above example, the subscriber might only be interested in blobs with names
     * ending with '.jpg' or '.jpeg' and the `subject` attribute allows for
     * constructing a simple and efficient string-suffix filter for that subset of
     * events.
     *
     * If present, MUST be a non-empty string.
     * @example "https://example.com/storage/tenant/container"
     * @example "mynewfile.jpg"
     */
    subject: EventIQL;
    /**
     * Data content type
     */
    datacontenttype: "application/json",
    /**
     * Created Timestamp UTC
     * @format: date(time)
     */
    time?: string;
    /**
     * OBJECT STRUCTURE
     */
    dataschema?: string;
    /**
     * SpecVersion
     */
    specversion: "1.0",
    /**
     * DATA
     */
    data: DataIQL;

    data_base64?: string;
}
