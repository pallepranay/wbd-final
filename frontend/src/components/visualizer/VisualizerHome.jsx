import React from 'react';
import Back from "../common/back/Back"
import Visualizer from './Visualizer'
import './VisualizerHome.css';
import Header from '../common/header/Header';

const VisualizerHome = () => {
    return (
        <>
        <Header/>
        <Back title='Algorithm Visualizer' />
        <Visualizer />
        </>
      )
}

export default VisualizerHome;