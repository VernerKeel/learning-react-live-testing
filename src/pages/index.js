import React, { useEffect } from "react"
import { Link } from "gatsby"

// https://bundlephobia.com/ --> a creat tool to find out how much kb a package adds to your bundle

// Dig deeper on how hooks work perfomance wise:
//https://hackernoon.com/adventuring-into-react-hooks-performance-practices-rly36xq

const HomePage = () => {
  // const yo = useEffect(() => React.lazy(() => import("../components/Data")))
  const pages = [
    {
      title: `useRef`,
      link: `/use-ref`,
    },
    {
      title: `useContext`,
      link: `/use-context`,
    },
    {
      title: `useEffect`,
      link: `/use-effect`,
    },

    {
      title: `useLayoutEffect`,
      link: `/use-layout-effect`,
    },
    {
      title: `useReducer`,
      link: `/use-reducer`,
    },
  ]
  return (
    <div>
      <h1>Pages</h1>
      <ul>
        {pages.map(page => {
          const { title, link } = page
          return (
            <li key={title}>
              <Link to={link}>
                <h2>{title}</h2>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HomePage
