import { createContext } from "react";
import { TQueryContext } from "./types";

export const QueryContext = createContext<TQueryContext>({
    queries: {},
})