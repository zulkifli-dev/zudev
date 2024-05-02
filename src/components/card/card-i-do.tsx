import React from 'react'

interface ICardIDo {
    title: string
    description: string
}
function CardIDo({ title, description }: ICardIDo) {
    return (
        <div className='bg-gradient-to-bl from-blue-1/50 to-blue-2/50 rounded-lg p-5'>
            <h4 className='text-xl'>{title}</h4>
            <p className='text-white/80  font-light mt-2'>{description}</p>
        </div>
    )
}

export default CardIDo