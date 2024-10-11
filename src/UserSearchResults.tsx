interface UserSearchResults {
    query: string;
    itemsPerPage: number;
}

export function UserSearchResults({query, itemsPerPage}: UserSearchResults) {

    return `Query ${query} and with ${itemsPerPage}`;


}
