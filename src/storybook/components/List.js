import React from 'react'
import { array } from 'prop-types'

const List = ({ elements }) => (
  <ul>
    {elements.map((element, index) => (
      <li key={index}>{element}</li>
    ))}
  </ul>
)

List.propTypes = {
  elements: array.isRequired,
}

export default List
