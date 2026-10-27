"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useSearch } from "@/context/SearchContext";
import { filters, products } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";
export default function ProductShowcase() {
    const { query, resetSearch } = useSearch();
    const [activeFilter, setActiveFilter] = useState("all");
    const gridRef = useRef(null);
    const trimmedQuery = query.trim();
    const filtered = useMemo(() => {
        const q = trimmedQuery.toLowerCase();
        return products.filter((p) => {
            const matchesCategory = activeFilter === "all" || p.category === activeFilter;
            const matchesSearch = !q ||
                p.title.toLowerCase().includes(q) ||
                p.specs.some((s) => s.toLowerCase().includes(q)) ||
                p.condition.toLowerCase().includes(q);
            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, trimmedQuery]);
    // Stagger the cards in whenever the visible set changes
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid || grid.children.length === 0)
            return;
        const tween = gsap.fromTo(grid.children, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: "power2.out", clearProps: "transform" });
        return () => {
            tween.kill();
        };
    }, [filtered]);
    return (<section id="inventory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Inventory Showcase" title="Available Laptops & Equipment" description="Explore verified, ready-to-dispatch machines. Use the search bar above to filter by model or GPU." spacing="mb-10"/>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 fade-up" data-anim>
          {filters.map((f) => (<button key={f.id} type="button" onClick={() => setActiveFilter(f.id)} className={`filter-btn ${activeFilter === f.id ? "active" : ""} px-5 py-2.5 rounded-full text-sm font-semibold border border-slate-300 bg-white text-slate-700`}>
              {f.label}
            </button>))}
        </div>

        {/* Active Search Status */}
        {trimmedQuery.length > 0 && (<div className="mb-6 text-center text-sm font-medium text-slate-600">
            Showing results for: <span className="font-bold text-bblue">&quot;{query}&quot;</span>
            <button type="button" onClick={resetSearch} className="ml-2 text-xs text-red-600 underline">
              Clear
            </button>
          </div>)}

        {/* Products Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((product) => (<ProductCard key={product.title} product={product}/>))}
        </div>

        {filtered.length === 0 && (<div className="text-center py-16">
            <p className="text-slate-400 text-lg">No machines found matching your query.</p>
            <button type="button" onClick={resetSearch} className="mt-4 bg-bblue text-white px-5 py-2 rounded-full text-sm font-semibold">
              View All Items
            </button>
          </div>)}
      </div>
    </section>);
}
