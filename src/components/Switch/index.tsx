import { MouseEventHandler } from 'react'
import { InnerBall, Wrapper } from './styles'


export const Switch = ({ handleSwitch }: { handleSwitch: MouseEventHandler }) => {

    return (
        <Wrapper onClick={handleSwitch}>
            <InnerBall/>
        </Wrapper>
    )

}