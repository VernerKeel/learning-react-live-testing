import React, { useEffect } from "react"
import { Link } from "gatsby"
import { shuffleArr } from "../../utils"
import { useAdviceData } from "../../hooks"
import { Img } from "../../components"
import { list } from "./use-effect.module.css"

const UseEffectPage = () => {
  const [advice] = useAdviceData()
  shuffleArr(advice)
  return (
    <div>
      <h1>useEffect()</h1>
      <Link to="/">Back to home</Link>
      <ul className={list}>
        {advice
          .filter(item => item.tag.serviceImage !== null)
          .map(item => {
            return (
              <li>
                <Img image={item.tag.serviceImage} className="img" />
              </li>
            )
          })}
      </ul>
      <button>Not doing anything</button>
    </div>
  )
}

export default UseEffectPage
