import React from 'react'
import style from './Title.module.css'

const Title = ({subTitle, title}) => {
  return (
    <div className={style.title}>
        <p>{subTitle}</p>
        <h2>{title}</h2>
      
    </div>
  )
}

export default Title
