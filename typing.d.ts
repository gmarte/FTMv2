interface Board {
    columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
    id: TypedColumn;
    todos: Todo[];
}

interface Todo {
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    image?: Image;
}

interface Image{
    bucketId: string;
    fileId: string;
}

interface User {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    name: string;
    registration: string;
    status: boolean;
    passwordUpdate: string;
    email: string;
    phone: string;
    emailVerification: boolean;
    phoneVerification: boolean;
    prefs: Record<string, any>;  // Replace 'any' with the actual type if known
    session?: Session<Session, any>;
  }
  interface Session {
    /**
     * Session ID.
     */
    $id: string;
    /**
     * Session creation date in ISO 8601 format.
     */
    $createdAt: string;
    /**
     * User ID.
     */
    userId: string;
    /**
     * Session expiration date in ISO 8601 format.
     */
    expire: string;
    /**
     * Session Provider.
     */
    provider: string;
    /**
     * Session Provider User ID.
     */
    providerUid: string;
    /**
     * Session Provider Access Token.
     */
    providerAccessToken: string;
    /**
     * The date of when the access token expires in ISO 8601 format.
     */
    providerAccessTokenExpiry: string;
    /**
     * Session Provider Refresh Token.
     */
    providerRefreshToken: string;
    /**
     * IP in use when the session was created.
     */
    ip: string;
    /**
     * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
     */
    osCode: string;
    /**
     * Operating system name.
     */
    osName: string;
    /**
     * Operating system version.
     */
    osVersion: string;
    /**
     * Client type.
     */
    clientType: string;
    /**
     * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
     */
    clientCode: string;
    /**
     * Client name.
     */
    clientName: string;
    /**
     * Client version.
     */
    clientVersion: string;
    /**
     * Client engine name.
     */
    clientEngine: string;
    /**
     * Client engine name.
     */
    clientEngineVersion: string;
    /**
     * Device name.
     */
    deviceName: string;
    /**
     * Device brand name.
     */
    deviceBrand: string;
    /**
     * Device model name.
     */
    deviceModel: string;
    /**
     * Country two-character ISO 3166-1 alpha code.
     */
    countryCode: string;
    /**
     * Country name.
     */
    countryName: string;
    /**
     * Returns true if this the current user session.
     */
    current: boolean;
};