import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// components
// import PieList from "./PieList";
// import NavBar from "./NavBar";

const MainPage = () => {
//   const [pieList, setPieList] = useState([]);

//   useEffect(() => {
//     axiosWithAuth()
//       .get("/recipes")
//       .then(res => {
//         setPieList(res.data);
//         console.log(pieList);
//       })
//       .catch(err =>
//         console.log(
//           err,
//           "sorry, an error has occured while retreiving the pie page"
//         )
//       );
//   }, []);

  return (
    <div>
        <h1>Welcome to main page</h1>
      
    </div>
  );
};

export default MainPage;