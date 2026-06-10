import ChildrenType from "./ChildrenType";

type Props = ChildrenType & {
    href: string
    variant?: "primary" | "secondary"
};

const base = "inline-flex items-center justify-center rounded-lg py-2.5 px-5 text-sm font-medium transition-colors focus:outline-none focus:ring-4";

const variants = {
    primary:
        "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 dark:focus:ring-blue-800",
    secondary:
        "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
};

const Button = (props: Props) => {
    const external = props.href.startsWith('http');
    return (
        <a href={props.href}
           target={external ? '_blank' : undefined}
           rel={external ? 'noopener noreferrer' : undefined}
           className={`${base} ${variants[props.variant ?? "secondary"]}`}>
            {props.children}
        </a>
    )
}
export default Button;
