"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
const SearchContext = createContext(null);
export function SearchProvider({ children }) {
    const [query, setQuery] = useState("");
    const resetSearch = useCallback(() => setQuery(""), []);
    const value = useMemo(() => ({ query, setQuery, resetSearch }), [query, resetSearch]);
    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
export function useSearch() {
    const ctx = useContext(SearchContext);
    if (!ctx)
        throw new Error("useSearch must be used within <SearchProvider>");
    return ctx;
}
