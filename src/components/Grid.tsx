import type React from "react";
// import clsx from "clsx";
import type { ReactNode } from "react";
// import styles from "./Card.module.css";
// import { Card } from "./Card";

export type GridProps = {
    count?: number;
    direction?: "vertical" | "horizontal";
    className?: string;
    children?: ReactNode
}

export const Grid: React.FC<GridProps> = (props) => {
    // const { children, className } = props;

    return (
        <></>
    );
}