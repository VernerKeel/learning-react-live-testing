import { useStaticQuery, graphql } from "gatsby"

const useAdviceData = () => {
  const { advice } = useStaticQuery(graphql`
    query adviceQuery {
      advice: allContentfulAdvice {
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
            serviceImage {
              ...Img25Props
            }
            category {
              id
              name
              color {
                value
              }
            }
            relatedSubcats: navGroups {
              id
              name
              category {
                color {
                  value
                }
              }
            }
            advice {
              id
              name

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
                relatedSubcats: navGroups {
                  id
                  name
                  category {
                    color {
                      value
                    }
                  }
                }
              }
              editor {
                id
                name
                position
                gender
                ...Img1Circle
              }
              createdAt(formatString: "D MMMM YYYY")
              updatedAt(formatString: "D MMMM YYYY")
              title
              shortSummary
              content {
                raw
              }
            }
            contentSuggestionTags {
              advice {
                id
                name
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
                  relatedSubcats: navGroups {
                    id
                    name
                    category {
                      color {
                        value
                      }
                    }
                  }
                }
                editor {
                  id
                  name
                  position
                  gender
                  ...Img1Circle
                }
                createdAt(formatString: "D MMMM YYYY")
                updatedAt(formatString: "D MMMM YYYY")
                title
                shortSummary
                content {
                  raw
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(advice.nodes)
  return [advice.nodes]
}

export default useAdviceData
