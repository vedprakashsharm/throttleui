import React from 'react'

const HeadingTitle = ({ text }) => {
  return (
    <>
      <div class="Profile_titleWrapper">
        <h2 class="Profile_title">{text}</h2>
      </div>
      <hr class="Divider-fullWidth"></hr>
    </>
  )
}

export default HeadingTitle
