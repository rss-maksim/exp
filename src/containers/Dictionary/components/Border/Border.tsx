import React, { FC } from 'react'

import './styles.scss'

interface IProps {
    className: string
}

export const Border: FC<IProps> = ({ className }) => (
    <div className={`border ${className}`}>
        <div className="circle-left" />
        <div className="outer-space">
            <div className="inner-space" />
        </div>
       <div className="circle-right" />
    </div>
)