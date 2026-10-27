"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
const InquiryContext = createContext(null);
export function InquiryProvider({ children }) {
    const [productName, setProductName] = useState(null);
    const openInquiry = useCallback((name) => setProductName(name), []);
    const closeInquiry = useCallback(() => setProductName(null), []);
    const value = useMemo(() => ({ productName, openInquiry, closeInquiry }), [productName, openInquiry, closeInquiry]);
    return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>;
}
export function useInquiry() {
    const ctx = useContext(InquiryContext);
    if (!ctx)
        throw new Error("useInquiry must be used within <InquiryProvider>");
    return ctx;
}
