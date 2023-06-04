import { useContext, useEffect, useState } from 'react';
import { QueryContext } from './context';
import { MutationOptions, Options } from "./types"

export const useQuery = <T, Error = any>(name: string, options: Options<T>) => {
    const { queries, setQueries } = useContext(QueryContext)

    const cache = queries[name]

    const [data, setData] = useState<T | null>(cache || options.defaultData || null)
    const [error, setError] = useState<Error | null>()
    const [loading, setLoading] = useState<boolean>(false)

    const requestData = async () => {
        try {
            console.log(1)
            setLoading(true)
            const res = await options.queryFn()
            setData(res)
            setError(null)
            if (options.cache && setQueries) {
                setQueries(queries => ({ ...queries, [name]: res }))
            }
        } catch (error) {
            setError(error as Error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        requestData()
    }, [name])
    return { data, error, loading }
}

export const useQueryCache = <T>(name: string):T => {
    const { queries } = useContext(QueryContext)
    return queries[name] 
}

export const useMutation = <T>(name: string) => {
    const { queries, setQueries } = useContext(QueryContext)

    const mutate = (data:MutationOptions<T>) => {
        if (queries[name]){
            if(setQueries){
                if(data instanceof Function){
                    setQueries(prev => ({...prev, [name]: data(prev[name])}))
                }else{
                    setQueries(prev => ({...prev, [name]: data}))
                }
            }
        }else{
            throw new Error(`${name} not exist in store`)
        }
    }
    return {mutate}
}