import React from 'react'

const GoogleMap = (props) => {

  const { src, width } = props;

  return (
    <iframe src={src} width={width ? width : '400'} height="300" allowfullscreen="" loading="lazy" style={{ 'borderRadius': '20px' }} referrerpolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default GoogleMap