import React from 'react'

type Props = {
    size: string
    xxx: string
    yyy: string
    onClick: () => void
}

interface IProps {
    size?: string
    onClick?: React.MouseEventHandler
}
interface IState {
    n: number
}

class ClassButton extends React.Component<IProps, IState> {
    // Name
    static displayName = 'ClassButton'
    // Default props
    static defaultProps = {
        size: 'normal'
    }
    constructor(props: IProps) {
        super(props)
        this.state = {
            n: 1
        }
        // Can make sure size is not empty
        if (this.props.size !== undefined) {
            console.log(this.props.size + 1)
        }
    }
    onClick = () => {
        console.log('Called')
        this.setState({
            n: this.state.n + 1
        })
    }
    render() {
        return (
            <div onClick={this.props.onClick} className={`button ${this.props.size}`}>
                {this.props.children}
                <span onClick={this.onClick}>
                    span
                    {this.state.n}
                </span>
            </div>
        )
    }
}

export default ClassButton