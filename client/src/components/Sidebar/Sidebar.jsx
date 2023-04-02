import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Sidebar.css';
import { logout } from '../../actions/authAction';

function Sidebar() {
  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <button onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              X
            </Link>
          </li>
          <li className='nav-text'>
            <Link to=''>
              <span>Link</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='../home' style={{ textDecoration: 'none' }}>
                <span>Home</span>
            </Link>
          </li>
          <li className='nav-text'>
           <Link to={`/profile/${user._id}`}>
               <span>My Profile</span>
           </Link>
          </li>
          <li className='nav-text'>
           <Link to='../chat'>
               <span>Chat</span>
           </Link>
          </li>
          <li className='nav-text'>
           <button className='nav-text-button' onClick={handleLogout} style={{ border: 'none', width: '100%', textAlign: 'left' }}>
               <span>Logout</span>
           </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// import './Sidebar.css';
// import { logout } from '../../actions/authAction';

// const Sidebar = () => {
//   const user = useSelector((state) => state.authReducer.authData);
//   const dispatch = useDispatch();
//   const [isNavOpen, setIsNavOpen] = useState(false)

//   useEffect(() => {
//     const handleResize = () => {
//         if (window.innerWidth < 600 && isNavOpen) {
//             setIsNavOpen(false)
//         }
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [isNavOpen])

//   const handleLogout = () => {
//     dispatch(logout())
//   }

//   return (
//     <div className='sidebar-component'>
//       <button className="sidebar-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
//         <span class="material-symbols-outlined">
//           {isNavOpen ? "toggle_on" : "toggle_off"}
//         </span>
//       </button>
//       <nav className={`nav ${isNavOpen ? "nav-open" : "nav-closed"}`}>
//         <div className="logo">logo</div>
//         <ul>
//           <li>
//             <Link className='links' to='../home' style={{ textDecoration: 'none' }}>Home</Link>
//           </li>
//           <li>
//             <Link className='links' to={`/profile/${user._id}`}>My Profile</Link>
//           </li>
//           <li>
//             <Link className='links' to='../chat'>Chat</Link>
//           </li>
//           <li>
//             <button className='links' onClick={handleLogout} style={{ border: 'none', width: '100%', textAlign: 'left' }}>Logout</button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Sidebar


// // WITH USESTATE

// // import React, { useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { Link } from 'react-router-dom'
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// // import './Sidebar.css'
// // import { logout } from '../../actions/authAction'

// // const Sidebar = () => {
// //   const user = useSelector((state) => state.authReducer.authData);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const dispatch = useDispatch();

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen)
// //   }

// //   const handleLogout = () => {
// //     dispatch(logout())
// //   }

// //   return (
// //     <div className="Sidebar">
// //        <button onClick={toggleSidebar}>
// //          <i class="fa-solid fa-bars"></i>
// //       </button>
// //       <div className={isSidebarOpen === true ? 'open-sidebar' : 'hidden-sidebar'}>
// //         <span className='sidebar-title'>Menu</span>
// //         <nav className='sidebar-nav-item'>
// //           <Link to='../home' style={{ textDecoration: 'none' }}>Home</Link>
// //           <Link to={`/profile/${user._id}`}>My Profile</Link>
// //           <Link to='../chat'>Chat</Link>
// //           <button onClick={handleLogout}>Logout</button>
// //         </nav>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Sidebar


// // WITH USEREF

// // import React, { useState, useRef } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { Link } from 'react-router-dom'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// // import './Sidebar.css'
// // import { logout } from '../../actions/authAction'

// // const Sidebar = () => {
// //   const user = useSelector((state) => state.authReducer.authData);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const sidebarRef = useRef(null);
// //   const dispatch = useDispatch();

// //   const openSidebar = () => {
// //     sidebarRef.current.focus()
// //   }

// //   const closeSidebar = () => {
// //     sidebarRef.current.blur()
// //   }

// // //   const handleSidebar = () => {

// // //   }

// //   const handleLogout = () => {
// //     dispatch(logout())
// //   }

// //   return (
// //     <div className="Sidebar">
// //       {/* <button onClick={openSidebar}> */}
// //       <button onClick={() => {
// //         if (isSidebarOpen === false) {
// //           setIsSidebarOpen(true)
// //         //   openSidebar()
// //           sidebarRef.current.focus()
// //         } else {
// //           setIsSidebarOpen(false)
// //         //   closeSidebar()
// //           sidebarRef.current.blur()
// //         }
// //       }}>
// //         <i class="fa-solid fa-bars"></i>
// //       </button>
// //       <div 
// //         ref={sidebarRef}
// //         className={isSidebarOpen === true ? 'open-sidebar' : 'hidden-sidebar'}
// //       >
// //         <span className='sidebar-title'>Menu</span>
// //         <nav className='sidebar-nav-item'>
// //           <Link to='../home' style={{ textDecoration: 'none' }}>Home</Link>
// //           <Link to={`/profile/${user._id}`}>My Profile</Link>
// //           <Link to='../chat'>Chat</Link>
// //           <button onClick={handleLogout}>Logout</button>
// //         </nav>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Sidebar.