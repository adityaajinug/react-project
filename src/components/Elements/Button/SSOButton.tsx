
import { ButtonType } from '@/types/button'
import React from 'react'

export const SSOButton: React.FC<ButtonType> = (props) => {
    const {type, name, id, img} = props
    return (
        <>
            <button type={type} id={id} className="flex items-center gap-4 justify-center bg-[#E4E7EB] py-3 rounded-md">
                <img src={img} alt={name} loading="lazy" />
                    {name}
            </button>
        </>
    )
}
