import React, { PropsWithChildren } from 'react'

import { Border } from '../Border'

import './styles.scss'

interface IProps {
    borders: string[]
}

export const Item = ({ children, borders }: PropsWithChildren<IProps>) => {
  return (
    <div className="cource-item">
        <div>Инструментарий фронтенд разработки</div>
        <div>Уровень подготовки: Начинающий</div>
        <button>Перейти</button>
        {borders.map((border: string) => <Border className={border} />)}
    </div>
  )
}

