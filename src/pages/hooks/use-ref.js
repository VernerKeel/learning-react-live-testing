import React, { useRef } from "react"
import { Link } from "gatsby"

const UseRefPage = () => {
  const holdValueInRef = useRef(null)
  // Store value in current obj

  console.log(holdValueInRef) // logs full p obj with all possible data slots and methods
  holdValueInRef.current = "yo"
  console.log(holdValueInRef.current) // logs yo

  return (
    <>
      <h1>useRef</h1>
      <p>Useful for:</p>
      <ul>
        <li>
          Storing a value through component's lifecycle. Ref's value persists
          through renders
        </li>
        <li>Accessing DOM directrly</li>
      </ul>
      <p ref={holdValueInRef}>Hold ref value in current obj</p>

      <Link to="/">Back to home</Link>
    </>
  )
}

export default UseRefPage
