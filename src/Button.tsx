import React from 'react'

interface IProps {
    size?: string
}

export default function Button(props: IProps) {
    return <div className={`button ${props.size}`}>Button</div>
}