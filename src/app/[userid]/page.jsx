'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'


function page() {
    console.log(useSearchParams().)

    return (
        <div>{ useSearchParams().get('[userid]')}</div>
    )
}

export default page