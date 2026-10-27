"use client";
import { useInquiry } from "@/context/InquiryContext";
/** Tiny client island so server components can open the inquiry modal. */
export default function InquiryButton({ product, className, children }) {
    const { openInquiry } = useInquiry();
    return (<button type="button" onClick={() => openInquiry(product)} className={className}>
      {children}
    </button>);
}
