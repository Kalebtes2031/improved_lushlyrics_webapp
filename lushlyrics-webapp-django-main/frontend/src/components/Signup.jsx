// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [re_password, setRePassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== re_password) {
//       setError('Passwords do not match');
//       return;
//     }
  
//     try {
//       await axios.post('http://localhost:8000/auth/users/', {
//         username,
//         email,
//         password,
//       });
//       console.log('Signup successful! Please login');
//       // Optionally, redirect to login page or handle success message
//     } catch (error) {
//       console.error('Signup error', error);
//       if (error.response && error.response.data) {
//         setError(error.response.data); // Assuming backend returns a detailed error message
//       } else {
//         setError('Signup failed'); // Fallback message
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="username" className="block text-left text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="re_password" className="block text-left text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               id="re_password"
//               value={re_password}
//               onChange={(e) => setRePassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           {error && (
//             <div className="text-red-500 text-sm">
//               {typeof error === 'string' ? error : 'Signup failed'}
//             </div>
//           )}
//           <div>
//             <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// Signup.jsx
//KGIRMA1
// import React, { useState } from 'react';

// function Signup() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     re_password: '',
//     first_name: '',
//     last_name: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:8000/auth/users/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log(data);  // Check response for any errors

//       // Redirect logic after successful registration
//       if (response.ok) {
//         // Optionally, you can automatically login the user after signup
//         // Example: redirect to login page after successful registration
//         window.location.href = '/login';
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
            
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   autoComplete="username"
//                   required
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Username"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
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
//                   placeholder="Email"
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
//                   autoComplete="new-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="re_password" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="re_password"
//                   name="re_password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   value={formData.re_password}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Confirm Password"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
//                 First Name
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="first_name"
//                   name="first_name"
//                   type="text"
//                   autoComplete="given-name"
//                   required
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="First Name"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
//                 Last Name
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="last_name"
//                   name="last_name"
//                   type="text"
//                   autoComplete="family-name"
//                   required
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Last Name"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);  // Check response for any errors

      // Redirect logic after successful registration
      if (response.ok) {
        // Optionally, you can automatically login the user after signup
        // Example: redirect to login page after successful registration
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-4xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl">
        <div className="bg-white py-8 px-8 shadow sm:rounded-lg sm:px-10">
          <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>

            {/* Left Side */}
            <div className="col-span-1">
              <div className='mb-5'>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="First Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
              </div>
             

              <div className='mt-5'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email"
                  />
                </div>
              </div>

              
            </div>

            {/* Right Side */}
            <div className="col-span-1">
              <div className='mb-5'>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
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
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className='mb-5'>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className='mb-5'>
                <label htmlFor="re_password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="re_password"
                    name="re_password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.re_password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>


            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            
            </div>
            <div className='col-span-2'>
              <p >
               <span className="text-sm font-medium text-gray-700"> Already have an account? </span><a className='text-md font-medium text-blue-600 hover:text-gray-700' href='/login'>Log in</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
