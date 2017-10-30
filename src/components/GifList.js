import React from 'react'
import GifListItem from './GifListItem'

const GifList = (props) => {

  const gifs = props.data.map(gif => {
    return <GifListItem key={gif.id} gif={gif} />
  })


  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>GIF</th>
        </tr>
      </thead>
      <tbody>
        {gifs}
      </tbody>
    </table>
  )

}

export default GifList
