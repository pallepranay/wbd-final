import React from 'react';
import Back from "../common/back/Back"
import Quizes from "./Quizes"
import Header from '../common/header/Header';


const QuizeHome = () => {
  return (
    <>
    <Header/>
    <Back title='Practise Quizes' />
    <Quizes />
    </>
  )
}

export default QuizeHome