import Header from '@/components/Header'
import Container from '@/components/Container'
import React from 'react'

const Room = ({params}: {params: {id: string}}) => {
  return (
    <>
      <Header/>
      <Container>
        <div>
          <p>room</p>
        </div>
      </Container>
    </>
  )
}

export default Room