import React, { PropsWithChildren } from 'react'

function HeadingSection({ children }: PropsWithChildren) {
    return (
        <h2 className='text-4xl font-semibold'>{children}</h2>
    )
}

export default HeadingSection