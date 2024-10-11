import useSWR, {SWRResponse} from "swr";

interface GithubUserSearchResponse {
    total_count: number,
    incomplete_results: boolean,
    items: GithubUserSearchResultItem[];
}
interface GithubUserSearchResultItem {
    login: string;
    avatar_url: string;
}
const fetcher = (info: RequestInfo | URL, init?: RequestInit): Promise<GithubUserSearchResponse> =>
    fetch(info, init).then((res) => res.json());

interface UserSearchHookParams {
    query: string;
    perPage?: number;
    page?: number;
}
export function useUserSearch({query, perPage = 3, page = 1}: UserSearchHookParams): SWRResponse<GithubUserSearchResponse> {
    return useSWR<GithubUserSearchResponse>(
        `https://api.github.com/search/users?q=${query}&per_page=${perPage}&page=${page}`,
        fetcher,
    );
}
