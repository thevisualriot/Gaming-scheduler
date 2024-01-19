import React from 'react'

function RecommendationItem({image,name}) {
  return (
    <div className='recommendationItem'>
        
        <div style={{leanneCard : `url(${image})`}} className='gameCover' />
        <h1> {name}</h1>

        
        
         </div>
  )
}

export default RecommendationItem;