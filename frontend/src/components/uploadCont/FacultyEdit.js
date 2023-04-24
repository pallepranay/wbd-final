import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadForm from "./UploadForm";
import UploadsList from "./UploadsList";
import { BACKEND_URI } from "../../config/constants";

const FacultyEdit = () => {

  const getAllMedias = () => {
    axios.get(`${BACKEND_URI}/api/v1/media/all`)
    .then((result) => {
      setMedias(result.data);
    })
    .catch((error) => {
      setMedias([]);
      console.log(error);
      alert("Error happened!");
    });
  }
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    
      axios.get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setMedias(result.data);
        console.log(result)
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });

  }, []);


  return (
    <>
      <div>
        <div >
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadForm getAllMedias={getAllMedias} />
            </div>
          </div>
        </div>
        <div >
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsList medias={medias} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyEdit;
