//CREATED THIS FOR MY OWN VIEWING PURPOSE

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// const SignUp = props => {
//   const [signUpInfo, setSignUpInfo] = useState({
//     name: "",
//     email: "",
//     username: "",
//     password: ""
//   });

//   const handleChange = e => {
//     setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setSignUpInfo({ ...signUpInfo });
//     axiosWithAuth()
//       .post("/auth/register", signUpInfo)
//       .then(res => {
//         props.history.push("/");
//       })
//       .catch(err =>
//         console.log(err, "sorry, an error has occured while signing you up")
//       );
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
      
//       <form onSubmit={handleSubmit}>
//         <input
//           label="Name"
//           id="name"
//           name="name"
//           placeholder="name"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           label="Email"
//           id="email"
//           name="email"
//           placeholder="email"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           label="Username"
//           id="username"
//           name="username"
//           placeholder="username"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           label="Password"
//           type="password"
//           id="password"
//           name="password"
//           placeholder="password"
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <button>Sign Up</button>
//       </form>
//       <br />
//       Already have an account? <Link to="/">Log In</Link>
//     </div>
//   );
// };

// export default SignUp;