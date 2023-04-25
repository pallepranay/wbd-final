// import React, { useState } from "react";
// import axios from "axios";
// import { BACKEND_URI } from "../../config/constants";

// const UploadForm = ({ getAllMedias }) => {
//   const [name, setName] = useState("");
//   const [videos, setVideos] = useState([]);

//   const hadleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("videos", videos)
//     formData.append("name", name)
//     console.log(formData)
//     const config = {
//       headers:{
//             "content-type" :"multipart/form-data"
//           }
//       }

//     axios
//       .post(`${BACKEND_URI}/api/v1/media/create`, {videos: videos, name: name}, config)
//       .then((success) => {
//         getAllMedias();
//         alert("Submitted successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Error happened!");
//       });
//   };

//   return (
//     <>
//       <form onSubmit={hadleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="form-control"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="videos">Upload Videos</label>
//           <input
//             type="file"
//             name="videos"
//             id="videos"
//             multiple
//             className="form-control"
//             accept=".mp4, .mkv"
//             onChange={(e) => {
//               setVideos(e.target.files);
//             }}
//             />
//         </div>

//         <button type="submit" className="btn btn-primary mt-2">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default UploadForm;