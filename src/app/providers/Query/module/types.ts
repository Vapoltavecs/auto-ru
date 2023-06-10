import { Dispatch, SetStateAction } from "react"

export type TQuery = Record<string, any>

export type TQueryContext = {
    queries: TQuery
    setQueries?: Dispatch<SetStateAction<TQuery>>
}

export type Options<T> = {
    queryFn: () => Promise<T>,
    cache?: boolean,
    defaultData?: T
}

export type MutationOptions<T> = T | ((prev:T) => T)