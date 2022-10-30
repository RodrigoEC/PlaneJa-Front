import React, { MouseEventHandler } from 'react'
import { Wrapper } from './styles'


export const Switch = ({ handleSwitch }: { handleSwitch: MouseEventHandler }) => {

    return (
        <Wrapper onClick={handleSwitch}>
            <div></div>
        </Wrapper>
    )

}