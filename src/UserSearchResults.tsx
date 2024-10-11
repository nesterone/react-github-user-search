import {useUserSearch} from "./useUserSearch.tsx";

interface UserSearchResults {
  query: string;
  perPage?: number;
  page?: number;
}

export function UserSearchResults({ query, perPage, page }: UserSearchResults) {
  const { data, error } = useUserSearch({ query, perPage, page });

   if (error) {
      return <span>{error.message}</span>
   }

  return JSON.stringify(data, null, 2);
}
