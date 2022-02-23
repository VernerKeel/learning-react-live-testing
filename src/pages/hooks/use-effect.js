import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useAdviceData } from "../../hooks"
import { Img } from "../../components"
import "./use-effect.css"

const UseEffectPage = () => {
  const [advice] = useAdviceData()
  console.log(advice)
  return (
    <>
      <h1>useEffect()</h1>
      <Link to="/">Back to home</Link>
      <ul>
        {advice.map(item => {
          return (
            <li>
              <Img image={item.tag.serviceImage} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectPage
