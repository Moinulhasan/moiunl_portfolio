"use client";

import { Link as ViewTransitionLink } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect, type ComponentProps, type MouseEvent } from "react";

// next-view-transitions drives navigation through a single shared
// "finish transition" callback (see its ViewTransitions provider). Clicking
// a second transition Link before the first one resolves overwrites that
// callback, so the first transition's promise never settles and the page
// gets stuck mid-animation. Guard with a module-level lock so a second
// click is ignored until the route has actually changed.
let isTransitioning = false;

export function Link(props: ComponentProps<typeof ViewTransitionLink>) {
    const pathname = usePathname();

    useEffect(() => {
        isTransitioning = false;
    }, [pathname]);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (isTransitioning) {
            e.preventDefault();
            return;
        }
        isTransitioning = true;
        // Safety net: release the lock even if the route never changes
        // (e.g. clicking a link back to the current page).
        setTimeout(() => {
            isTransitioning = false;
        }, 1200);
        props.onClick?.(e);
    };

    return <ViewTransitionLink {...props} onClick={handleClick} />;
}
