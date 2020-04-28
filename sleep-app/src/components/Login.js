//CREATED THIS FOR MY OWN VIEWING PURPOSE

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

// const initailState = {
//     email: "",
//     password: "",
//     isFetching: false

// };

// const Login = props => {
//     const [login, setLogin] = useState(initailState);

//     const handleChange = e => {
//         setLogin({ ...login, [e.target.name]: e.target.value });
//       };

//     const handleSubmit = e => {
//         e.preventDefault();
//         setLogin({...login, isFetching: true});
//         axiosWithAuth()
//         .post("/auth/login", login)
//         .then(res => {
//             localStorage.setItem("token", res.data.message);

//         })
//         .catch(err => {
//             console.log(err, 'sorry, an error has occured while logging you in');
//         });
//     };

//     return (
//         <div>
//             <div className='login-head'>
//             <h1>Welcome Back!</h1>
//           <p>You're one step closer to finding your ideal sleep schedule</p>
//             </div>
         
          
//           <h3>Login</h3>
//           <div>
//             <form onSubmit={handleSubmit}>
//               <input
//                 label="Username"
//                 type="text"
//                 name="username"
//                 placeholder="username"
//                 value={login.username}
//                 onChange={handleChange}
//               />
//               <br />
//               <input
//                 label="Password"
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 value={login.password}
//                 onChange={handleChange}
//               />
//               <br />
//               <br />
//               <button>Log In</button>
//               {login.isFetching && "Please wait...logging you in"}
//             </form>
//             Don't have an account? <Link to="/signup">Sign Up</Link>
//           </div>
//         </div>
//       );

// }

// export default Login;