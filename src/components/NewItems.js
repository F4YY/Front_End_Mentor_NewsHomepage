import React from 'react'
import { Stylednewitems } from './styled/Newshp.styled'

export const NewItems = ({title, subtitle}) => {
  return (
    <Stylednewitems>
        <h4>
            {title}
        </h4>
        <p>
            {subtitle}
        </p>
    </Stylednewitems>
  )
}
