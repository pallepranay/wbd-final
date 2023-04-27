import React from 'react'
import Back from '../common/back/Back'
import Tutorial from './Tutorial'
import Header from '../common/header/Header'

const TuorialHome = () => {
  return (
    <>
      <Header/>
      <Back title='Learn DSA Concepts' />
      <Tutorial />
    </>
  )
}

export default TuorialHome