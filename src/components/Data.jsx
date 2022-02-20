import React from "react"
//import useAdviceData from "../hooks/useAdviceData"
//import useStudyData from "../hooks/useStudyData"

//import loadable from "@loadable/component"
//Test
const useAdviceData = React.lazy(() => import("../hooks/useAdviceData"))
const useStudyData = React.lazy(() => import("../hooks/useStudyData"))


const Data = () => {
  return (
    <div>
      <p>Hello world!</p>
    </div>
  )
}

export default Data
//
