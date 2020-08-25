import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #fff;
  margin: 20px;
  width: 400px;
`

const CoverImage = styled.img`
  border-radius: 6px 6px 0 0;
  object-fit: cover;
  object-position: 45% 55%;
  width: 100%;
  height: 100%;
`


export const StoryCardImg = ({coverImage, className }) => (
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
  </Container>
)