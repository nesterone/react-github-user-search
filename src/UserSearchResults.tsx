import {useUserSearch} from "./useUserSearch.tsx";

interface UserSearchResultsProps {
    query: string;
    perPage?: number;
    page?: number;
}

export function UserSearchResults({query, perPage, page}: UserSearchResultsProps) {
    const {data, error} = useUserSearch({query, perPage, page});

    if (error) {
        return <span>{error.message}</span>
    }

    return (<>{data?.items.map(item => <UserCard avatar={item.avatar_url} login={item.login}/>)}</>)
}


interface UserCardProps {
    login: string;
    avatar: string;
}

function UserCard({login, avatar}: UserCardProps) {
    return (<div className="flex flex-1 flex-col p-8">
        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={avatar} alt="User Avatar"/>
        <h3 className="mt-6 text-sm font-medium text-gray-900">{login}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Type</dt>
            <dd className="text-sm text-gray-500">type</dd>
        </dl>
    </div>)

}
