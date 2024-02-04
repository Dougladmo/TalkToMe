import { ForwardRefRenderFunction, forwardRef } from "react";

interface IInput {
    placeholder: string;
    type: string;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = ({ placeholder, type, ...rest },
    ref,
) => {
    return (
        <div className="w-full">
            <input className="w-full px-3 py-3 rounded-md bg-gray-950" type={type} placeholder={placeholder} ref={ref} {...rest} />
        </div>
    )
}

export const Input = forwardRef(InputBase);