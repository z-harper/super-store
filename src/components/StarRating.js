import React from 'react'


const starRating = (rating) => {
  const maxStarRating = 5
  let itemStarRating = []
  let starKey = 0

  let fullStars = Math.floor(rating)
  let halfStars = Math.ceil(rating - fullStars)
  let emptyStars = Math.floor(maxStarRating - rating)

  while (fullStars > 0) {
    itemStarRating.push(<i className="fas fa-star" key={starKey++}></i>)
    fullStars--
  }

  while (halfStars > 0) {
    itemStarRating.push(<i className="fas fa-star-half-alt" key={starKey++}></i>)
    halfStars--
  }

  while (emptyStars > 0) {
    itemStarRating.push(<i className="far fa-star" key={starKey++}></i>)
    emptyStars--
  }

  return itemStarRating
}


const StarRating = ({ rating }) => {
  return (
    <p>
      {starRating(rating)}
    </p>
  )
}

export default StarRating
