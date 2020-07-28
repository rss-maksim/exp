import React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../constants/routes'

export const Navigation = () => (
    <div>
        <ul>
            {Object.values(routes).map(({ path, label }) => (
                <li key={path}>
                    <Link to={path}>{label}</Link>
                </li>
            ))}
        </ul>
    </div>
);

