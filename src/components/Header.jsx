// // // import React from 'react'

// // // export const Header = () => {
// // //     return (
// // //         <div>
// // //             {/* <nav className="navbar bg-primary" data-bs-theme="dark">
// // //                 <div className="container-fluid">
// // //                     <span className="navbar-brand mb-0 h1">Navbar</span>
// // //                 </div>
// // //             </nav> */}
// // //             <nav className="navbar navbar-dark bg-dark">
// // //                 <div className="container-fluid">
// // //                     <a className="navbar-brand" href="#">
// // //                         <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
// // //                         Road Ready Car-rental
// // //                     </a>
// // //                 </div>
// // //             </nav>
// // //         </div>
// // //     )
// // // }

// // 'use client'

// // import React from 'react'
// // import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
// // import { useNavigate } from 'react-router-dom'

// // const menuItems = [
// //   {
// //     name: 'Home',
// //     href: '/',
// //   },
// //   {
// //     name: 'FilterCar',
// //     href: '/Filter',
// //   },
  
// // ]

// // export function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen)  
// //   }
// //   const navigate = useNavigate();

// //     const handleclick= ()=>{
// //         navigate ('/register')

// //     }

// //     const handlelogin=()=>{
// //         navigate ('/login')
// //     }

// //   return (
// //     <div className="relative w-full bg-white">
// //       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
// //         <div className="inline-flex items-center space-x-2">
// //           <span>
// //             <svg
// //               width="30"
// //               height="30"
// //               viewBox="0 0 50 56"
// //               fill="none"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
// //                 fill="black"
// //               />
// //             </svg>
// //           </span>
// //           <span className="font-bold">Road-Ready</span>
// //         </div>
// //         <div className="hidden grow items-start lg:flex">
// //           <ul className="ml-12 inline-flex space-x-8">
// //             {menuItems.map((item) => (
// //               <li key={item.name}>
// //                 <a
// //                   href={item.href}
// //                   className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
// //                 >
// //                   {item.name}
// //                   <span>
// //                     <ChevronDown className="ml-2 h-4 w-4" />
// //                   </span>
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //         <div className="hidden space-x-2 lg:block">
// //           <button
// //             type="button"
// //             className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// //          onClick={handleclick}
// //           >
// //             Sign In
// //           </button>
// //           <button
// //             type="button"
// //             className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// //             onClick={handlelogin }
// //           >
// //             Log In
// //           </button>
// //         </div>
// //         <div className="lg:hidden">
// //           <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
// //         </div>
// //         {isMenuOpen && (
// //           <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
// //             <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
// //               <div className="px-5 pb-6 pt-5">
// //                 <div className="flex items-center justify-between">
// //                   <div className="inline-flex items-center space-x-2">
// //                     <span>
// //                       <svg
// //                         width="30"
// //                         height="30"
// //                         viewBox="0 0 50 56"
// //                         fill="none"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                       >
// //                         <path
// //                           d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
// //                           fill="black"
// //                         />
// //                       </svg>
// //                     </span>
// //                     <span className="font-bold">Road-Ready</span>
// //                   </div>
// //                   <div className="-mr-2">
// //                     <button
// //                       type="button"
// //                       onClick={toggleMenu}
// //                       className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// //                     >
// //                       <span className="sr-only">Close menu</span>
// //                       <X className="h-6 w-6" aria-hidden="true" />
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="mt-6">
// //                   <nav className="grid gap-y-4">
// //                     {menuItems.map((item) => (
// //                       <a
// //                         key={item.name}
// //                         href={item.href}
// //                         className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
// //                       >
// //                         <span className="ml-3 text-base font-medium text-gray-900">
// //                           {item.name}
// //                         </span>
// //                         <span>
// //                           <ChevronRight className="ml-3 h-4 w-4" />
// //                         </span>
// //                       </a>
// //                     ))}
// //                   </nav>
// //                 </div>
// //                 <div className="mt-2 space-y-2">
// //                   <button
// //                     type="button"
// //                     className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// //                   >
// //                     Sign In
// //                   </button>

// //                   <button
// //                     type="button"
// //                     className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// //                   >
// //                     Log In
// //                   </button>
                  
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }
// // export default Header;


// import React, { useState } from 'react';
// import { Menu, X, ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSignIn = () => {
//     navigate('/register');
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleProfile = () => {
//     // Navigate to the user's profile page
//     // Replace '/profile' with your actual profile page route
//     navigate('/profile');
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <div className="relative w-full bg-white">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
//         <div className="inline-flex items-center space-x-2">
//           <span>
//             {/* Your logo */}
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 50 56"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {/* Your logo path */}
//             </svg>
//           </span>
//           <span className="font-bold">Road-Ready</span>
//         </div>
//         <div className="hidden lg:flex items-start">
//           <ul className="ml-12 inline-flex space-x-8">
//             {/* Your menu items */}
//           </ul>
//         </div>
//         <div className="hidden space-x-2 lg:block">
//           {/* Conditionally render sign-in and login buttons */}
//           {!isLoggedIn && (
//             <>
//               <button
//                 type="button"
//                 className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                 onClick={handleSignIn}
//               >
//                 Sign In
//               </button>
//               <button
//                 type="button"
//                 className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                 onClick={handleLogin}
//               >
//                 Log In
//               </button>
//             </>
//           )}
//           {/* Conditionally render profile icon after successful login */}
//           {isLoggedIn && (
//             <button
//               type="button"
//               className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center"
//               onClick={handleProfile}
//             >
//               {/* Replace this with your profile icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {/* Your profile icon */}
//               </svg>
//             </button>
//           )}
//         </div>
//         {/* Toggle menu button for mobile */}
//         <div className="lg:hidden">
//           <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
//         </div>
//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
//             <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//               <div className="px-5 pb-6 pt-5">
//                 <div className="flex items-center justify-between">
//                   {/* Your logo and close button */}
//                 </div>
//                 <div className="mt-6">
//                   <nav className="grid gap-y-4">
//                     {/* Your mobile menu items */}
//                   </nav>
//                 </div>
//                 <div className="mt-2 space-y-2">
//                   {/* Conditionally render sign-in and login buttons */}
//                   {!isLoggedIn && (
//                     <>
//                       <button
//                         type="button"
//                         className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         onClick={handleSignIn}
//                       >
//                         Sign In
//                       </button>
//                       <button
//                         type="button"
//                         className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         onClick={handleLogin}
//                       >
//                         Log In
//                       </button>
//                     </>
//                   )}
//                   {/* Conditionally render profile icon after successful login */}
//                   {isLoggedIn && (
//                     <button
//                       type="button"
//                       className="w-full rounded-full bg-gray-200 h-10 flex items-center justify-center"
//                       onClick={handleProfile}
//                     >
//                       {/* Replace this with your profile icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         {/* Your profile icon */}
//                       </svg>
//                       Profile
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;


// // // import React, { useState } from 'react';
// // // import { Menu } from 'lucide-react';
// // // import { useNavigate, Link } from 'react-router-dom';

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status
// // //   const navigate = useNavigate();

// // //   const toggleMenu = () => {
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   const handleSignIn = () => {
// // //     navigate('/register');
// // //   };

// // //   const handleLogin = () => {
// // //     navigate('/login');
// // //   };

// // //   const handleProfile = () => {
// // //     navigate('/profile');
// // //   };

// // //   return (
// // //     <div className="relative w-full bg-white">
// // //       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
// // //         <div className="inline-flex items-center space-x-2">
// // //           <span className="font-bold">Road-Ready</span>
// // //         </div>
// // //         <div className="hidden lg:flex items-start">
// // //           <ul className="ml-12 inline-flex space-x-8">
// // //             {/* Your menu items */}
// // //           </ul>
// // //         </div>
// // //         <div className="hidden space-x-2 lg:block">
// // //           {/* Conditionally render sign-in and login buttons */}
// // //           {!isLoggedIn && (
// // //             <>
// // //               <button
// // //                 type="button"
// // //                 className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// // //                 onClick={handleSignIn}
// // //               >
// // //                 Sign In
// // //               </button>
// // //               <button
// // //                 type="button"
// // //                 className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// // //                 onClick={handleLogin}
// // //               >
// // //                 Log In
// // //               </button>
// // //             </>
// // //           )}
// // //           {/* Conditionally render profile icon after successful login */}
// // //           {isLoggedIn && (
// // //             <button
// // //               type="button"
// // //               className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center"
// // //               onClick={handleProfile}
// // //             >
// // //               Your Profile
// // //             </button>
// // //           )}
// // //         </div>
// // //         {/* Toggle menu button for mobile */}
// // //         <div className="lg:hidden">
// // //           <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
// // //         </div>
// // //         {/* Mobile menu */}
// // //         {isMenuOpen && (
// // //           <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
// // //             <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
// // //               <div className="px-5 pb-6 pt-5">
// // //                 <div className="flex items-center justify-between">
// // //                   {/* Your logo and close button */}
// // //                 </div>
// // //                 <div className="mt-6">
// // //                   <nav className="grid gap-y-4">
// // //                     {/* Your mobile menu items */}
// // //                   </nav>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Header;


// import React from 'react'

// export const Header = () => {
//     return (
//         <div>
//             {/* <nav className="navbar bg-primary" data-bs-theme="dark">
//                 <div className="container-fluid">
//                     <span className="navbar-brand mb-0 h1">Navbar</span>
//                 </div>
//             </nav> */}
//             <nav className="navbar navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
//                         Road Ready Car-rental
//                     </a>
//                 </div>
//             </nav>
//         </div>
//     )
// }


import React, { useContext, useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight, CircleUser, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../images/Logo.png';
import { AuthContext } from '../context/AuthProvider';

const menuItems = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Cars',
    to: '/cars/getAll',
  },

]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navigate = useNavigate();

  const handleclick = () => {
    navigate('/register')

  }

  const handlelogin = () => {
    navigate('/login')
  }

  const { auth, setAuth } = useContext(AuthContext);
  const userID = auth.id;
  const user = auth.role === 'ROLE_USER';

  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      setAuth({});
      navigate('/');
    }
  }

  const handleLogout = () => {
    toggleMenu(); // Close menu
    logout(); // Logout
  };

  const profile = () => {
    navigate('/profile')
  }

  const toggleProfileCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<div className="fixed top-10 right-10 z-50">
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleProfileCard}>
        Profile
      </button> */}

      {isOpen && (
        <div className="fixed top-10 right-10 bg-gray-100 border border-gray-300 shadow-lg rounded-lg p-4 z-50">
          <button className="absolute top-2 right-2 text-gray-500" onClick={toggleProfileCard}>
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4">Welcome {auth.username}</h2>
          <div className="flex flex-col gap-2">
            <Link to="/cars/getAll" className="btn btn-primary">
              All Cars
            </Link>
            <Link to={`/user/reviews/${auth.id}`} className="btn btn-primary">
              Your Reviews
            </Link>
            <Link to={`/user/reservations/${auth.id}`} className="btn btn-primary">
              Your Reservation
            </Link>
            <Link to={`/user/${auth.id}`} className="btn btn-primary">
              Your Data
            </Link>
          </div>
        </div>
      )}
    </div>

    <div className="relative w-full bg-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-slate-200 bg-current rounded-full">
          <Link to ='/' >
          <span>
            <img src={logoImg} alt="Logo" className='h-12 w-auto' />
          </span>
          </Link>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="inline-flex items-center text-sm font-semibold border-2  rounded-full text-white btn hover:text-gray-900"
                >
                  {item.name}
                  {/* <span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </span> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          {userID ? (
            user ? (
              <>
                <button
                  type="button"
                  className="rounded-md border  border-white px-3 py-2   text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={toggleProfileCard}
                >
                  <CircleUser />
                  {/* Profile */}
                </button>
                <button
                  type="button"
                  className="rounded-md border bg-red-500 border-white  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={logout}
                >
                  <span>
                  <LogOut>
                    Log out
                    </LogOut>
                  </span>
                  {/* Log Out */}
                </button>
              </>
            ) : (
              <button
                type="button"
                className="rounded-md border  bg-red-500 border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={logout}
              >
                Log Out
              </button>
            )
          ) : (
            <>
              <button
                type="button"
                className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handleclick}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="rounded-xl border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handlelogin}
              >
                Log In
              </button>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">Road-Ready</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  {userID ? (
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={handleclick}
                      >
                        Sign In
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={handlelogin}
                      >
                        Log In
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
     </>
  )
}
export default Header;