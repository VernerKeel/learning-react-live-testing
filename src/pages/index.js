import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"
const Data = loadable(() => import("../components/Data"))

// Dig deeper on how hooks work perfomance wise:
//https://hackernoon.com/adventuring-into-react-hooks-performance-practices-rly36xq

// What if I create a separate component that uses useAdvice & useStudy data mega
// data structure -> can I defer or conditionally not load it by using loadable?

const HomePage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>Hello world!</p>
    </div>
  )
}

export default HomePage

export const query = graphql`
  query {
    allContentfulCriminalCaseStudies {
      nodes {
        title
        caseStudySummary {
          raw
        }
        richTextSummary: caseStudySummary {
          raw
        }
        ...StudyMeta
      }
    }
    allContentfulAdvice {
      nodes {
        metaData: seoMetadata {
          metaTitle
          metaDescription
        }
        name
        id
        title
        heroBody {
          raw
        }
        content {
          raw
        }
        slug
        createdAt(formatString: "D MMMM YYYY")
        updatedAt(formatString: "D MMMM YYYY")
        editor {
          name
          position
          gender
          ...Img1Circle
        }
        mainCat: mainCategory {
          id
          name
          color {
            value
          }
        }
        tag {
          id
          name
          category {
            id
            name
            color {
              value
            }
          }
        }
      }
    }
  }
`
