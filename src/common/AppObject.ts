


export interface BaseObject<DataSchema extends string> {
    /**
     * Id
     */
    id: number;
    /**
     * Object type
     */
    object: DataSchema;
    /**
     * is the team active
     */
    active: boolean;
    /**
     * team created_at
     * @format: date(time)
     */
    created_at: Date;
    /**
     * team last updated_at
     * @format: date(time)
     */
    updated_at: Date | null;
}



/**
 * Configure the Sort of the response
 */
export enum Sort {
    /**
     * Sort A -> Z
     */
    asc = "asc",
    /**
     * Sort Z -> A
     */
    desc = "desc",
}


/**
 * Configure the behavior of the response pagination
 */
export interface PaginationRequest {
    /**
     * Move to page N°
     */
    page: number;
    /**
     * Size of the page
     */
    pageSize: number;
}


/**
 * Reponse of pagination
 */
export interface PaginationResponse {
    /**
     * Current page
     */
    page: number;
    /**
     * Number of element on the page
     */
    pageSize: number;
    /**
     * Number total of page
     */
    pageTotal: number;
    /**
     * Total element accros all pages
     */
    count: number;
}
