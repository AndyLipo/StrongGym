import React from 'react'

export const Señalador = ({ numero, text }) => {
    return (
        <>
            <div className="bg-(--color-primary) rounded-r-4xl w-1/6 h-8 text-2xl tracking-norma">
                <div>
                    {numero}{text}
                </div>
            </div>
        </>
    )
}
