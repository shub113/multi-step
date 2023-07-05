import { twMerge } from "tailwind-merge";

export function TextInput({
    value,
    onChange,
    name = "",
    type = "text",
    parentStyle = "",
    inputParentStyle = "",
    inputStyle = "",
    labelText = "",
    labelStyle = "",
    errorText = "",
    errorStyle = "",
    disbaleStyle = "",
    ...rest
}) {
    const parentClass = twMerge(parentStyle);
    const labelClass = twMerge("block text-base ml-1 mb-1 ", labelStyle);
    const errorClass = twMerge("block text-sm ml-1 italic text-red-700 ", errorStyle);
    const inputParentClass = twMerge(
        "relative inline drop-shadow-md hover:drop-shadow-xl transition duration-300 ease-in-out",
        inputParentStyle
    );
    const inputclass = twMerge(
        "border rounded-lg p-2 border-black/10 focus:outline-none focus:border-slate-500",
        !!errorText && "border-red-200 focus:border-red-500",
        inputStyle,
        rest?.disabled && `bg-slate-200 ${disbaleStyle}`
    );

    return (
        <div className={parentClass}>
            {!!labelText && <label className={labelClass}>{labelText}</label>}
            <div className={inputParentClass}>
                <input
                    name={name}
                    type={type}
                    className={inputclass}
                    value={value}
                    onChange={(event) => {
                        onChange(event);
                    }}
                    {...rest}
                />
            </div>
            {!!errorText && <label className={errorClass}>{errorText}</label>}
        </div>
    );
}
