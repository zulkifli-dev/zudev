import React, { PropsWithChildren } from 'react'

function SubHeadingSection({ children }: PropsWithChildren) {
    return (
        <h3 className='text-3xl mt-4'>{children}</h3>
    )
}

export default SubHeadingSection