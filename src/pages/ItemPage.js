import React from 'react'

const ItemPage = (props) => {
  return (
    <div className='container overflow-hidden'>
      <h1>Item Page</h1>
      Item id: {props.match.params.id}
    </div>
  )
}

export default ItemPage
