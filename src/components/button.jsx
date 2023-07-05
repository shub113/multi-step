import { twMerge } from "tailwind-merge";

export function Button({ children, buttonStyle = "", ...rest }) {
    const buttonClass = twMerge(
        "flex justify-center transform cursor-pointer items-center rounded-xl bg-blue-800 px-5 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none active:scale-90",
        buttonStyle,
        rest?.disabled &&
            `cursor-not-allowed bg-slate-500 hover:bg-slate-500 transition-none active:scale-100`
    );

    return (
        <button className={buttonClass} type='button' {...rest}>
            {children}
        </button>
    );
}
