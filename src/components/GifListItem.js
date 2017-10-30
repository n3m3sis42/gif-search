import React from 'react'

const GifListItem = (props) => {
  if (!props.gif) {
    return <tr></tr>
  }

  return (
    <tr key={props.gif.id}>
      <td key='title'>{props.gif.title}</td>
      <td key='image'><img src={props.gif.images.downsized_large.url} alt={props.gif.title} /></td>
    </tr>
  )
}

export default GifListItem
