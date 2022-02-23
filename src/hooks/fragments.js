import { graphql } from "gatsby"

export const imgFragment = graphql`
  fragment Img on ContentfulEmployee {
    image {
      id
      alt: title
      gatsbyImageData(placeholder: BLURRED, formats: AUTO)
    }
  }
`
export const img1Fragment = graphql`
  fragment Img1 on ContentfulEmployee {
    image {
      id
      alt: title
      gatsbyImageData(placeholder: BLURRED, formats: AUTO, quality: 1)
    }
  }
`

export const img25Fragment = graphql`
  fragment Img25 on ContentfulEmployee {
    image {
      id
      alt: title
      gatsbyImageData(placeholder: BLURRED, formats: AUTO, quality: 25)
    }
  }
`
export const img25PropsFragment = graphql`
  fragment Img25Props on ContentfulAsset {
    id
    alt: title
    gatsbyImageData(placeholder: BLURRED, formats: AUTO, quality: 25)
  }
`

export const img10Fragment = graphql`
  fragment Img10 on ContentfulEmployee {
    image {
      id
      alt: title
      gatsbyImageData(placeholder: BLURRED, formats: AUTO, quality: 10)
    }
  }
`

export const img1CircleFragment = graphql`
  fragment Img1Circle on ContentfulEmployee {
    image {
      id
      alt: title
      gatsbyImageData(
        placeholder: BLURRED
        formats: AUTO
        quality: 1
        layout: CONSTRAINED
        cornerRadius: 1000
      )
    }
  }
`

export const img10CircleFragment = graphql`
  fragment Img10Circle on ContentfulEmployee {
    image {
      id
      alt: title
      gatsbyImageData(
        placeholder: BLURRED
        formats: AUTO
        quality: 10
        layout: CONSTRAINED
        cornerRadius: 1000
      )
    }
  }
`

export const img25CircleFragment = graphql`
  fragment Img25Circle on ContentfulEmployee {
    image {
      id
      alt: title
      gatsbyImageData(
        placeholder: BLURRED
        formats: AUTO
        quality: 25
        layout: CONSTRAINED
        cornerRadius: 1000
      )
    }
  }
`
export const img1EmployeeFragment = graphql`
  fragment Img1Employee on ContentfulEmployee {
    id
    name
    position
    gender
    ...Img1Circle
  }
`
export const catNameColorFragment = graphql`
  fragment CatNameColor on ContentfulCategory {
    id
    name
    color {
      id
      value
    }
  }
`
export const tagNameColorFragment = graphql`
  fragment TagNameColor on ContentfulSubcategory {
    id
    name
    category {
      id
      name
      color {
        id
        value
      }
    }
  }
`

export const studyMetaFragment = graphql`
  fragment StudyMeta on ContentfulCriminalCaseStudies {
    id
    department
    significance
    outcome
    date(formatString: "D MMMM, YYYY", locale: "en_GB.UTF-8")

    author {
      ...Img1Employee
    }
    editor: prominentLawyer {
      ...Img1Employee
    }
    prominentLawyer {
      ...Img1Employee
    }
    legalTeam {
      ...Img1Employee
    }

    mainCategory {
      ...CatNameColor
    }
    tag {
      ...TagNameColor
    }
  }
`
