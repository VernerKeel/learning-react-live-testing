import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Img = ({ image }) => {
  return (
    <div>
      <GatsbyImage
        image={getImage(image)}
        alt={image?.alt}
        style={{}}
        className=""
      />
    </div>
  )
}
export default Img
