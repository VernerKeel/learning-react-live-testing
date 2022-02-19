import React from "react"

//import loadable from "@loadable/component"

//const Data = loadable(() => import("../components/Data"))
const Data = React.lazy(() => import("../components/Data"))
// Dig deeper on how hooks work perfomance wise:
//https://hackernoon.com/adventuring-into-react-hooks-performance-practices-rly36xq

// What if I create a separate component that uses useAdvice & useStudy data mega
// data structure -> can I defer or conditionally not load it by using loadable?

const HomePage = () => {

  return (
    <div>
      <p>Hello world!</p>
    </div>
  )
}

export default HomePage

