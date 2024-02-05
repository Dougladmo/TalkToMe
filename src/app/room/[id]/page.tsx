import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
      <Footer/>
    </>
  )
}

export default Room