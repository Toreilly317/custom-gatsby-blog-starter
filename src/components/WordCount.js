import React from "react"

const TimeToRead = ({ wordCount }) => {
  const time = Math.ceil(wordCount / 200)
  return <span>{time} minute read</span>
}

export default TimeToRead
