// // import React, { useState } from 'react';

// // const Login = ({onLogin}) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit =  (e) => {
// //     e.preventDefault();
// //     onLogin(email,password);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div>
// //             <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
// //               Login
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //     const [identifier, setIdentifier] = useState(''); // can be either username or email
// //     const [password, setPassword] = useState('');
// //     const navigate = useNavigate();

// //     const handleLogin = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', {
// //                 username: identifier, // the backend will handle whether this is email or username
// //                 password,
// //             });
// //             localStorage.setItem('token', response.data.auth_token);
// //             navigate('/dashboard');
// //         } catch (error) {
// //             console.error(error);
// //             alert('Login failed');
// //         }
// //     };

// //     return (
// //         <div>
// //             <form onSubmit={handleLogin}>
// //                 <input
// //                     type="text"
// //                     value={identifier}
// //                     onChange={(e) => setIdentifier(e.target.value)}
// //                     placeholder="Username or Email"
// //                     required
// //                 />
// //                 <input
// //                     type="password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     placeholder="Password"
// //                     required
// //                 />
// //                 <button type="submit">Login</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Login;

// // Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  // const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/token/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);  // Check response for any errors

      // Redirect logic after successful login
      if (response.ok) {
        localStorage.setItem('auth_token', data.auth_token); // Store the token
        window.location.href = 'http://127.0.0.1:8000/api/';  // Redirect to your Django website
      } else {
        // Handle login error (e.g., incorrect credentials)
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // Call onLogin function passed from App.jsx
    // const navigation = await onLogin(email, password);
    // navigate(navigation); // Navigate based on the returned value from onLogin
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                 Username or Email
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div>
              <p className="block text-sm font-medium text-blue-600">
                <a href='/forgot-password'>Forgot your password?</a>
              </p>
            </div>
            <div>
              <p className="block text-sm text-center font-medium text-gray-700 mb-2">
                Don't have an account?
              </p>
              <a 
                className="w-full flex justify-center py-2 px-4 border-2 border-slate-400 rounded-md shadow-sm text-md font-medium text-black bg-slate-100 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href='/signup'
              >
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const navigation = await onLogin(formData.email, formData.password);
//       navigate(navigation); // Navigate based on the returned value from onLogin
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                  Email
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Login
//               </button>
//             </div>
//             <div>
//               <p className="block text-sm font-medium text-blue-600">
//                 <a href='/forgot-password'>Forgot your password?</a>
//               </p>
//             </div>
//             <div>
//               <p className="block text-sm text-center font-medium text-gray-700 mb-2">
//                 Don't have an account?
//               </p>
//               <a 
//                 className="w-full flex justify-center py-2 px-4 border-2 border-slate-400 rounded-md shadow-sm text-md font-medium text-black bg-slate-100 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 href='/signup'
//               >
//                 Sign up
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
