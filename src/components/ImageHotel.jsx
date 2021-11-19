import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`
const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0;
    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.6 rem;
    }
  }
`
const ImageHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

console.log()

  // const imagen = image.childImageSharp.gatsbyImageData.images.sources[0].srcSet

  return (
    <ImageBackground tag="section" fluid={image.childImageSharp.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>Welcome to Sunny Hotel</h1>
        <p>The Best Hotel For Your Vacations</p>
      </TextoImagen>
    </ImageBackground>
  )
}

export default ImageHotel
