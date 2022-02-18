import { useStaticQuery, graphql } from "gatsby"

const useStudyData = () => {
  const { advice } = useStaticQuery(graphql`
    query atudyQuery {
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
    }
  `)
  return [advice]
}

export default useStudyData
