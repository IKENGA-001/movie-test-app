'use client'

import {useFormStatus} from 'react-dom'

export default function FormButton({children, className, ...props}) {
    const {pending} = useFormStatus();


    return (
        <button 
        {...props}
        className={className ?? "inline-flex justify-center p-3 rounded bg-black text-white"}
        >
            {pending? "loading..." : children}
        </button>
    );
}