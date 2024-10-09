// import { useState, useEffect } from 'react' // fixed `useEffect` import
// import './App.css'
// import axios from "axios"

// function App() {
//   const [users, setUsers] = useState([])

//   // Corrected `useEffect`
//   useEffect(() => {
//     axios.get('http://localhost:3001/getUsers')
//       .then((users) => {
//         console.log(users)
//         setUsers(users.data)
//       })
//       .catch(err => console.log(err))
//   }, [])

//   return (
//     <div className='center'>
//       <h2>Media Discussion Forum</h2>
//       {
//         users.map((user, index) => {
//           return (
//             <div key={index}>
//               <h3>{user.name}</h3>
//               <h3>{user.age}</h3>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }
l// export default App // fixed export
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import SignUp from './SignUp';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;