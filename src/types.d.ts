
/* The `declare global` block is used to extend the global scope in TypeScript. In this case, it is
extending the `Array` interface to include a new method called `toSorted`. */
declare global {
    interface Array<T> {
        toSorted(compareFN?: (a: T, b: T) => number): T[];
    }
}

export interface DigestAuthSuccess {
    results: User[];
    info: DigestAuthSuccessInfo;
}

export interface DigestAuthSuccessInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface User {
    gender: Gender;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Dob;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
}

export interface Dob {
    date: Date;
    age: number;
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export interface ID {
    name: string;
    value: null | string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Name {
    title: Title;
    first: string;
    last: string;
}

export enum Title {
    MS = "Ms",
    Madame = "Madame",
    Mademoiselle = "Mademoiselle",
    Miss = "Miss",
    Monsieur = "Monsieur",
    Mr = "Mr",
    Mrs = "Mrs",
}

export enum SortBy {
    NONE = 'none',
    NAME = 'name',
    LAST = 'last',
    COUNTRY = 'country',
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface BasicAuth {
    authenticated: boolean;
}

/**
 * OAuth1.0 Verify Signature
 *
 * GET https://postman-echo.com/oauth1
 *
 * OAuth1.0a is a specification that defines a protocol that can be used by one
 * service to access "protected" resources (endpoints) on another service. A
 * major part of OAuth1.0 is HTTP Request Signing. This endpoint allows you to
 * check whether the request calculation works properly in the client.
 *
 * The endpoint supports the HTTP ``Authorization`` header. In case the signature
 * verification fails, the endpoint provides the four debug values,
 *
 * * ``base_uri``
 * * ``normalized_param_string``
 * * ``base_string``
 * * ``signing_key``
 *
 * For more details about these parameters, check the [OAuth1.0a
 * Specification](http://oauth.net/core/1.0a/)
 *
 * In order to use this endpoint, you can set the following values:
 *
 * > Consumer Key: ``RKCGzna7bv9YD57c``
 * >
 * > Consumer Secret: ``D+EdQ-gs$-%@2Nu7``
 *
 * If you are using Postman, also check the "Add params to header" and
 * "Auto add parameters" boxes.
 */
export interface OAuth10VerifySignature {
    status: string;
    message: string;
    base_uri?: string;
    normalized_param_string?: string;
    base_string?: string;
    signing_key?: string;
}

/**
 * Hawk Auth
 *
 * GET https://postman-echo.com/auth/hawk
 *
 * This endpoint is a Hawk Authentication protected endpoint. [Hawk
 * authentication](https://github.com/hueniverse/hawk) is a widely used protocol for
 * protecting API endpoints. One of Hawk's main goals is to enable HTTP authentication for
 * services that do not use TLS (although it can be used in conjunction with TLS as well).
 *
 * In order to use this endpoint, select the "Hawk Auth" helper inside Postman, and set the
 * following values:
 *
 * Hawk Auth ID: `dh37fgj492je`
 *
 * Hawk Auth Key: `werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn`
 *
 * Algorithm: `sha256`
 *
 * The rest of the values are optional, and can be left blank. Hitting send should give you
 * a response with a status code of 200 OK.
 */
export interface HawkAuth {
    status: string;
    message: string;
}

/**
 * Set Cookies
 *
 * GET https://postman-echo.com/cookies/set?foo1=bar1&foo2=bar2
 *
 * The cookie setter endpoint accepts a list of cookies and their values as part of URL
 * parameters of a `GET` request. These cookies are saved and can be subsequently retrieved
 * or deleted. The response of this request returns a JSON with all cookies listed.
 *
 * To set your own set of cookies, simply replace the URL parameters "foo1=bar1&foo2=bar2"
 * with your own set of key-value pairs.
 */
export interface SetCookies {
    cookies: SetCookiesCookies;
}

export interface SetCookiesCookies {
    foo1: string;
    foo2: string;
}

/**
 * Get Cookies
 *
 * GET https://postman-echo.com/cookies
 *
 * Use this endpoint to get a list of all cookies that are stored with respect to this
 * domain. Whatever key-value pairs that has been previously set by calling the "Set
 * Cookies" endpoint, will be returned as response JSON.
 */
export interface GetCookies {
    cookies: GetCookiesCookies;
}

export interface GetCookiesCookies {
    foo2: string;
}

/**
 * Delete Cookies
 *
 * GET https://postman-echo.com/cookies/delete?foo1&foo2
 *
 * One or more cookies that has been set for this domain can be deleted by providing the
 * cookie names as part of the URL parameter. The response of this request is a JSON
 * containing the list of currently set cookies.
 */
export interface DeleteCookies {
    cookies: GetCookiesCookies;
}

/**
 * Request Headers
 *
 * GET https://postman-echo.com/headers
 *
 * A `GET` request to this endpoint returns the list of all request headers as part of the
 * response JSON.
 * In Postman, sending your own set of headers through the [Headers
 *
 * tab](https://www.getpostman.com/docs/requests#headers?source=echo-collection-app-onboarding)
 * will reveal the headers as part of the response.
 */
export interface RequestHeaders {
    headers: Headers;
}

export interface Headers {
    host: string;
    accept: string;
    "accept-encoding": string;
    "accept-language": string;
    "cache-control": string;
    "my-sample-header": string;
    "postman-token": string;
    "user-agent": string;
    "x-forwarded-port": string;
    "x-forwarded-proto": string;
}

/**
 * Response Headers
 *
 * GET
 * https://postman-echo.com/response-headers?Content-Type=text/html&test=response_headers
 *
 * This endpoint causes the server to send custom set of response headers. Providing header
 * values as part of the URL parameters of a `GET` request to this endpoint returns the same
 * as part of response header.
 *
 * To send your own set of headers, simply add or replace the the URL parameters with your
 * own set.
 */
export interface ResponseHeaders {
    "Content-Type": string;
    test: string;
}

/**
 * Response Status Code
 *
 * GET https://postman-echo.com/status/200
 *
 * This endpoint allows one to instruct the server which status code to respond with.
 *
 * Every response is accompanied by a status code. The status code provides a summary of the
 * nature of response sent by the server. For example, a status code of `200` means
 * everything is okay with the response and a code of `404` implies that the requested URL
 * does not exist on server.
 * A list of all valid HTTP status code can be found at the [List of Status
 * Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) wikipedia article. When
 * using Postman, the response status code is described for easy reference.
 *
 * Note that if an invalid status code is requested to be sent, the server returns a status
 * code of `400 Bad Request`.
 */
export interface ResponseStatusCode {
    status: number;
}

/**
 * Delay Response
 *
 * GET https://postman-echo.com/delay/3
 *
 * Using this endpoint one can configure how long it takes for the server to come back with
 * a response. Appending a number to the URL defines the time (in seconds) the server will
 * wait before responding.
 *
 * Note that a maximum delay of 10 seconds is accepted by the server.
 */
export interface DelayResponse {
    delay: string;
}

/**
 * Timestamp validity
 *
 * GET https://postman-echo.com/time/valid?timestamp=2016-10-10
 *
 * A simple `GET` request to `/time/valid` to determine the validity of the timestamp,
 * (current by default).
 * This endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to
 * construct the date time instance to check against.
 *
 * Responses are provided in JSON format, with a valid key to indicate the result. The
 * response code is `200`.
 *
 * ```
 * {
 * valid: true/false
 * }
 * ```
 */
export interface TimestampValidity {
    valid: boolean;
}

/**
 * Transform collection from format v1 to v2
 *
 * POST https://postman-echo.com/transform/collection?from=1&to=2
 */
export interface TransformCollectionFromFormatV1ToV2 {
    variables: any[];
    info: TransformCollectionFromFormatV1ToV2Info;
    item: Item[];
}

export interface TransformCollectionFromFormatV1ToV2Info {
    name: string;
    _postman_id: string;
    description: string;
    schema: string;
}

export interface Item {
    name: string;
    event?: Event[];
    request: ItemRequest;
    response: any[];
}

export interface Event {
    listen: string;
    script: Script;
}

export interface Script {
    type: string;
    exec: string[];
}

export interface ItemRequest {
    url: string;
    method: string;
    header: Header[];
    body: Body;
}

export interface Body {
    mode: string;
    raw: string;
}

export interface Header {
    key: string;
    value: string;
    description: string;
}

/**
 * Transform collection from format v2 to v1
 *
 * POST https://postman-echo.com/transform/collection?from=2&to=1
 */
export interface TransformCollectionFromFormatV2ToV1 {
    id: string;
    name: string;
    description: string;
    order: string[];
    folders: any[];
    requests: RequestElement[];
}

export interface RequestElement {
    id: string;
    name: string;
    collectionId: string;
    method: string;
    headers: string;
    data: any[];
    rawModeData: string;
    tests?: string;
    preRequestScript?: string;
    url: string;
    dataMode?: string;
}
