import React from 'react'

import { Item } from './components/Item'

const items = Array.from({ length: 6 }, (_, index) => index)

const getBorders = (index: number): string[] => {
    const rest = index % 3
    switch (rest) {
        case 0:
            return ['top', 'bottom bottom--left']
        case 1: 
            return ['right', 'bottom bottom--left']
        case 2: 
            return ['left', 'bottom bottom--right x2']
        default:
            return ['top', 'bottom bottom--left']
    }
}

export const Dictionary = () => (
    <div className="items">
        {items.map((_, index) => (
            <Item key={index} borders={getBorders(index)} />
        ))}
    </div>
);

