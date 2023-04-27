import React from 'react';
import Back from "../common/back/Back"
import FacultyEdit from "./FacultyEdit";

const FacultyEditCover = () =>{
    return(
        <>
        <Back title = 'Faculty Domain'/>
        <section className='padding'>
            <div className='container grid'>
            <FacultyEdit />
            </div>
        </section>
        </>
    )
}

export default FacultyEditCover;