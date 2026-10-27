"use client";
import { InquiryProvider } from "@/context/InquiryContext";
import { SearchProvider } from "@/context/SearchContext";
import InquiryModal from "@/components/InquiryModal";
/** Client boundary for shared state; server components pass through as children. */
export default function Providers({ children }) {
    return (<SearchProvider>
      <InquiryProvider>
        {children}
        <InquiryModal />
      </InquiryProvider>
    </SearchProvider>);
}
