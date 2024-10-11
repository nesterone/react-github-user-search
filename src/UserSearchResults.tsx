export const API_BASE_URL = "https://api.github.com/search/users";

interface UserSearchResults {
  query: string;
  itemsPerPage: number;
}

export function UserSearchResults({ query, itemsPerPage }: UserSearchResults) {
  return `Query ${query} and with ${itemsPerPage}`;
}
