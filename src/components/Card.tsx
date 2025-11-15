import type React from "react";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Card.module.css";

export type CardProps = {
    title?: string;
    className?: string;
    children?: ReactNode
}

export const Card: React.FC<CardProps> = (props) => {
    const { title, children, className } = props;

    return (
        <div className={clsx(styles.card, className)}>
            <header><h4>{title}</h4></header>
            <div>{children}</div>
        </div>
    );
}