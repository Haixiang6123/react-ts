import React from 'react'

interface IProps {
    size?: string,
}

const Button: React.FunctionComponent<IProps> = function(props) {
    return (
        <div className={`button ${props.size}`}>
            {props.children}
        </div>
    )
}

export default Button