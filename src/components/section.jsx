import React from 'react'

const Section = ({ component, resource }) => {
  const items = resource.read()
  console.log(items)
  return (
    <ul>
      {
        items.map(component)
      }
    </ul>
  )
}

export default Section
