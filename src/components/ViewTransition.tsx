"use client";

import React from "react";

/**
 * A helper component to apply a view-transition-name to its children.
 * This is used with the Browser's View Transitions API.
 */
export function ViewTransitionItem({
    name,
    children,
    className,
    as: Component = "span"
}: {
    name: string;
    children: React.ReactNode;
    className?: string;
    as?: any;
}) {
    return (
        <Component style={{ viewTransitionName: name }} className={className}>
            {children}
        </Component>
    );
}
