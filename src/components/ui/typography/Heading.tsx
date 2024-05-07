import styles from "./Typography.module.css";

export enum TypographyColor {
    primary, /* blue */
    secondary, /* white */
    muted, /* light gray */
    warning, /* red */
    dark, /* black */
    purple, /* purple */
    gray /* dark gray */
}

export enum TypographyType {
    h1, /* 1.875rem (30px) */
    h2, /* 1.5rem (24px)  */
    h3, /* 1.125rem (18rem) */
    h4, /* 1rem (16px)*/
    h5, /* 0.875rem (14px) */
    h6, /* 0.75rem (12px) */
    h7, /* 0.625rem (10px) */
}
export enum TypographyWeight {
    medium, /* 500 */
    semiBold, /* 600 */
    bold, /* 700 */
    extraBold, /* 800 */
    heavy /* 900 */
}

interface HeadingOne {
    title: string | number | undefined;
    type: TypographyType;
    color: TypographyColor;
    weight: TypographyWeight;
    classname?: string;
    onClick?: () => void;
    id?: string;
}

const getType = (type: TypographyType) => {
    let className = "";
    switch (type) {
        case TypographyType.h1:
            className = `${styles.h1}`;
            break;
        case TypographyType.h2:
            className = `${styles.h2}`;
            break;
        case TypographyType.h3:
            className = `${styles.h3}`;
            break;
        case TypographyType.h4:
            className = `${styles.h4}`;
            break;
        case TypographyType.h5:
            className = `${styles.h5}`;
            break;
        case TypographyType.h6:
            className = `${styles.h6}`;
            break;
        case TypographyType.h7:
            className = `${styles.h7}`;
            break;
    }
    return className;
}

const getColor = (color: TypographyColor) => {
    let className = "";
    switch (color) {
        case TypographyColor.primary:
            className = `${styles.primary}`;
            break;
        case TypographyColor.secondary:
            className = `${styles.white}`;
            break;
        case TypographyColor.muted:
            className = `${styles.muted}`;
            break;
        case TypographyColor.warning:
            className = `${styles.warning}`;
            break;
        case TypographyColor.dark:
            className = `${styles.dark}`;
            break;
        case TypographyColor.purple:
            className = `${styles.purple}`;
            break;
        case TypographyColor.gray:
            className = `${styles.secondary}`;
            break;
    }
    return className;
}

const getWeight = (weight: TypographyWeight) => {
    let className = "";
    switch (weight) {
        case TypographyWeight.medium:
            className = `${styles.medium}`;
            break;
        case TypographyWeight.semiBold:
            className = `${styles.semiBold}`;
            break;
        case TypographyWeight.bold:
            className = `${styles.bold}`;
            break;
        case TypographyWeight.extraBold:
            className = `${styles.extraBold}`;
            break;
        case TypographyWeight.heavy:
            className = `${styles.heavy}`;
            break;
    }
    return className;
}


export const Heading = ({ type, color, weight , title, classname, onClick, id }: HeadingOne) => {
    return (
        <h1 className={`${getType(type)} ${getColor(color)} ${getWeight(weight)} ${classname} mb-0`} id={id} onClick={onClick} style={{ cursor: `${onClick ? 'pointer' : ''}` }}>{title}</h1>
    )
}