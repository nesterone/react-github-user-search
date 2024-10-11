import useSWR from "swr";
const fetcher = (info: RequestInfo | URL, init?: RequestInit) =>
    fetch(info, init).then((res) => res.json());
interface UserSearchHookParams {
    query: string;
    perPage?: number;
    page?: number;
}

export function useUserSearch({query, perPage = 3, page = 1}: UserSearchHookParams) {
    return useSWR(
        `https://api.github.com/search/users?q=${query}&per_page=${perPage}&page=${page}`,
        fetcher,
    );
}
