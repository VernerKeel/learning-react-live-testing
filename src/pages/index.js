import React, {useEffect} from "react"

// https://bundlephobia.com/ --> a creat tool to find out how much kb a package adds to your bundle


//import loadable from "@loadable/component"

//const Data = loadable(() => import("../components/Data"))
//const Data = setTimeout(() => React.lazy(() => import("../components/Data"))[5000])
const yo = useEffect(() => React.lazy(() => import("../components/Data"))[5000]) 
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

