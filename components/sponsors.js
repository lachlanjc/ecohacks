import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@theme-ui/components'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const data = {
  sponsors: [
    {
      name: 'Hack Club Bank',
      link: 'https://hackclub.com/bank',
      image: 'https://ecohacks.io/hackbank-light.png'
    }
  ],
  additionalSupport: [
    // {
    //   name: 'Placeholder',
    //   link: 'https://sketchapp.com/',
    //   image: 'https://ecohacks.io/sketch-logo.png'
    // },
    // currently we DO NOT have any sponsors, let's get rid of the placeholder to not seem unprofessional
  ]
}

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 6 : 4)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`};
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map(sponsor => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
