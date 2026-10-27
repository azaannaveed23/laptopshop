"use client";
import { usePathname, useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext";
import { StrokeIcon } from "@/components/ui/Icons";
const variants = {
    desktop: {
        wrapper: "hidden md:flex flex-1 max-w-md mx-4",
        input: "w-full bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-full pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:border-byellow transition duration-200",
        placeholder: "Search laptops, specs, RTX, M2...",
        clearable: true,
    },
    mobile: {
        wrapper: "md:hidden pb-3",
        input: "w-full bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:bg-white focus:text-slate-900",
        placeholder: "Search laptops, specs, RTX...",
        clearable: false,
    },
};
export default function Searchbar({ variant }) {
    const { query, setQuery, resetSearch } = useSearch();
    const pathname = usePathname();
    const router = useRouter();
    const config = variants[variant];
    const handleChange = (e) => {
        setQuery(e.target.value);
        // Results live on the home page — jump there if searching from another route
        if (pathname !== "/" && e.target.value.trim())
            router.push("/#inventory");
    };
    return (<div className={config.wrapper}>
      <div className="relative w-full">
        <input type="text" value={query} onChange={handleChange} placeholder={config.placeholder} aria-label="Search laptops" className={config.input}/>
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/70">
          <StrokeIcon name="search" className="w-4 h-4" strokeWidth={2.2}/>
        </div>
        {config.clearable && query.trim().length > 0 && (<button type="button" onClick={resetSearch} aria-label="Clear search" className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600">
            <StrokeIcon name="close" className="w-4 h-4" strokeWidth={2}/>
          </button>)}
      </div>
    </div>);
}
