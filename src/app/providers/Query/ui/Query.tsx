import React, { FC, useState } from 'react'
import { QueryContext } from '../module/context'
import { TQuery } from '../module/types'

type QueryProps = {
    children: React.ReactNode
}

const Query:FC<QueryProps> = ({children}) => {
    const [queries, setQueries] = useState<TQuery>({})
    return <QueryContext.Provider value={{queries, setQueries}}>{children}</QueryContext.Provider>
}

export default Query