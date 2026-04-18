import React from 'react'
import { Circles } from 'react-loader-spinner'

export default function Loading() {
    return (
    <>
        <div className='bg-gray-200 h-screen flex items-center justify-center'>

    <Circles 
    height="80"
    width="80"
    color = "#4fa94d"
    ariaLabel='circles-loading'
    wrapperClass = ""
    wrapperStyle = {{}}
    visible= {true}
    />
        </div>
    </>
    )}

