import React from 'react'
import { Styledtrendingitems, Trendingimage, Vstack } from './styled/Newshp.styled'

export const TrendingItems = ({image,no,title,subtitle}) => {
  return (
    <Styledtrendingitems>
        <Trendingimage src={image} alt='image' />
        <Vstack>
            <h2>
                {no}
            </h2>
            <h5>
                {title}
            </h5>
            <p>
                {subtitle}
            </p>
        </Vstack>
    </Styledtrendingitems>
  )
}
