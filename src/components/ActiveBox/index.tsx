import './index.scss'

interface ActiveBoxProps {
    children: React.ReactNode
}

export const ActiveBox = ({ children }: ActiveBoxProps) => {
    return (
        <div className='ActiceBox'>
            {children}
        </div>
    )
}