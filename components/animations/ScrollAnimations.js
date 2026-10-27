"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/**
 * Reveals every `[data-anim]` element on scroll. Lives once in the root layout
 * so server components only need to add `data-anim` + the `fade-up` class.
 * Re-runs on route change so new pages get animated too.
 */
export default function ScrollAnimations() {
    const pathname = usePathname();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.utils.toArray("[data-anim]").forEach((el) => {
                gsap.fromTo(el, { opacity: 0, y: 30 }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    clearProps: "transform",
                    scrollTrigger: { trigger: el, start: "top 88%" },
                });
            });
        });
        return () => ctx.revert();
    }, [pathname]);
    return null;
}
