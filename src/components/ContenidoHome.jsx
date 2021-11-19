import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 120rem;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  p{
    line-height:2;
  }
`
const ContenidoHome = () => {
  const Info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            id
            titulo
            contenido
            imagen {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  console.log(Info.allDatoCmsPagina.edges[0].node)

  const { titulo, contenido, imagen } = Info.allDatoCmsPagina.edges[0].node

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>

      <TextoInicio>
        <p>{contenido}</p>
        <GatsbyImage image={getImage(imagen)} alt="Image Home" />
      </TextoInicio>
    </>
  )
}

export default ContenidoHome
