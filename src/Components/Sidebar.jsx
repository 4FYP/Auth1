// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaBars, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
// import { BiBook, BiBookAdd, BiBookBookmark, BiBookOpen, BiCameraMovie, BiSearch } from 'react-icons/bi';
// import { BiCog } from 'react-icons/bi';
// import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
// import { BsCartCheck } from 'react-icons/bs';
// import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import Mainpage from './Mainpage';
// import Card from './Card';

// const routes = [
//   {
//     path: '/storybook',
//     name: 'Story Books',
//     icon: <BiBookBookmark />,
//     className: 'sidebar_Attributes_CSS',
//   },
//   {
//     path: '/Programming-Books',
//     name: 'Programming Books',
//     icon: <BiBookOpen />,
//   },
//   {
//     path: '/Movies',
//     name: 'Movies',
//     icon: <BiCameraMovie />,
//   },
//   {
//     path: '/novels',
//     name: 'Novels',
//     icon: <AiTwotoneFileExclamation />,
//     subRoutes: [
//       {
//         path: '/settings/profile',
//         name: 'Profile',
//         icon: <FaUser />,
//       },
//       {
//         path: '/settings/2fa',
//         name: '2FA',
//         icon: <FaLock />,
//       },
//       {
//         path: '/settings/billing',
//         name: 'Billing',
//         icon: <FaMoneyBill />,
//       },
//     ],
//   },
//   {
//     path: '/order',
//     name: 'Order',
//     icon: <BsCartCheck />,
//   },
//   {
//     path: '/settings',
//     name: 'Settings',
//     icon: <BiCog />,
//     exact: true,
//   },
//   {
//     path: '/saved',
//     name: 'Saved',
//     icon: <AiFillHeart />,
//   },
  
// ];

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       width: '140px',
//       padding: '5px 15px',
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       width: 'auto',
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <div className="image">
//       <div className="main-container">
//         <motion.div
//           animate={{
//             width: isOpen ? '200px' : '38px',
//             transition: {
//               duration: 0.5,
//               type: 'spring',
//               damping: 11,
//             },
//           }}
//           className="sidebar"
//         >
//           <div className="top_section">
//             {isOpen && (
//               <motion.h1
//                 initial="hidden"
//                 animate="show"
//                 exit="hidden"
//                 variants={showAnimation}
//                 className="logo"
//               >
//                 Home
//               </motion.h1>
//             )}
//             <div className="bars">
            
//               <FaBars onClick={toggle} />
//             </div>
//           </div>
//           <div className="search">
//             <div className="search_icon">
//               <BiSearch />
//             </div>
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.input
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   variants={inputAnimation}
//                   placeholder="Search"
//                 />
//               )}
//             </AnimatePresence>
            
//           </div>
//           <section className="routes">
//             {routes.map((route) => (
//               <NavLink
//                 activeClassName="active"
//                 to={route.path}
//                 key={route.name}
//                 className="link"
//               >
//                 <div className="icon">{route.icon}</div>
//                 <AnimatePresence>
//                   {isOpen && <motion.div className="link_text">{route.name} </motion.div>}
//                 </AnimatePresence>
//               </NavLink>
//             ))}
//           </section>
//           <section className="routes">
//           </section>
//         </motion.div>
//         <main>{children}</main>
//       </div>
//       <Mainpage />
     
//     </div>
    
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaBars, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
// import { BiBook, BiBookAdd, BiBookBookmark, BiBookOpen, BiCameraMovie, BiSearch } from 'react-icons/bi';
// import { BiCog } from 'react-icons/bi';
// import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
// import { BsCartCheck } from 'react-icons/bs';
// import { AnimatePresence, motion } from 'framer-motion';
// import Mainpage from './Mainpage';
// import Card from './Card';

// const routes = [
//   {
//     path: '/storybook',
//     name: 'Story Books',
//     icon: <BiBookBookmark />,
//     className: 'sidebar_Attributes_CSS',
//   },
//   {
//     path: '/Programming-Books',
//     name: 'Programming Books',
//     icon: <BiBookOpen />,
//   },
//   {
//     path: '/Movies',
//     name: 'Movies',
//     icon: <BiCameraMovie />,
//   },
//   {
//     path: '/novels',
//     name: 'Novels',
//     icon: <AiTwotoneFileExclamation />,
//     subRoutes: [
//       {
//         path: '/settings/profile',
//         name: 'Profile',
//         icon: <FaUser />,
//       },
//       {
//         path: '/settings/2fa',
//         name: '2FA',
//         icon: <FaLock />,
//       },
//       {
//         path: '/settings/billing',
//         name: 'Billing',
//         icon: <FaMoneyBill />,
//       },
//     ],
//   },
//   {
//     path: '/order',
//     name: 'Order',
//     icon: <BsCartCheck />,
//   },
//   {
//     path: '/settings',
//     name: 'Settings',
//     icon: <BiCog />,
//     exact: true,
//   },
//   {
//     path: '/saved',
//     name: 'Saved',
//     icon: <AiFillHeart />,
//   },

// ];

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAuthorMode, setIsAuthorMode] = useState(false);
//   const navigate = useNavigate();

//   const toggle = () => setIsOpen(!isOpen);

//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       width: '140px',
//       padding: '5px 15px',
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       width: 'auto',
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const handleButtonClick = () => {
//     setIsAuthorMode(!isAuthorMode);
//     navigate(isAuthorMode ? '/' : '/AuthorLand');
//   };

//   return (
//     <div className="image">
//       <div className="main-container">
//         <motion.div
//           animate={{
//             width: isOpen ? '200px' : '38px',
//             transition: {
//               duration: 0.5,
//               type: 'spring',
//               damping: 11,
//             },
//           }}
//           className="sidebar"
//         >
//           <div className="top_section">
//             {isOpen && (
//               <motion.h1
//                 initial="hidden"
//                 animate="show"
//                 exit="hidden"
//                 variants={showAnimation}
//                 className="logo"
//               >
//                 Home
//               </motion.h1>
//             )}
//             <div className="bars">
//               <FaBars onClick={toggle} />
//             </div>
//           </div>
//           <div className="search">
//             <div className="search_icon">
//               <BiSearch />
//             </div>
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.input
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   variants={inputAnimation}
//                   placeholder="Search"
//                 />
//               )}
//             </AnimatePresence>
//           </div>
//           <section className="routes">
//             {routes.map((route) => (
//               <NavLink
//                 activeClassName="active"
//                 to={route.path}
//                 key={route.name}
//                 className="link"
//               >
//                 <div className="icon">{route.icon}</div>
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div className="link_text">{route.name} </motion.div>
//                   )}
//                 </AnimatePresence>
//               </NavLink>
//             ))}
//           </section>
//           <section className="routes">
//             <button className="sidebar-button" onClick={handleButtonClick}>
//               {isAuthorMode ? 'Reader Mode' : 'Author Mode'}
//             </button>
//           </section>
//         </motion.div>
//         <main>{children}</main>
//       </div>
//       <Mainpage />
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { BiBook, BiBookAdd, BiBookBookmark, BiBookOpen, BiCameraMovie, BiSearch } from 'react-icons/bi';
import { BiCog } from 'react-icons/bi';
import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';
import Mainpage from './Mainpage';
import Card from './Card';

const routes = [
  {
    path: '/storybook',
    name: 'Story Books',
    icon: <BiBookBookmark />,
    className: 'sidebar_Attributes_CSS',
  },
  {
    path: '/Programming-Books',
    name: 'Programming Books',
    icon: <BiBookOpen />,
  },
  {
    path: '/Movies',
    name: 'Movies',
    icon: <BiCameraMovie />,
  },
  {
    path: '/novels',
    name: 'Novels',
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: '/settings/profile',
        name: 'Profile',
        icon: <FaUser />,
      },
      {
        path: '/settings/2fa',
        name: '2FA',
        icon: <FaLock />,
      },
      {
        path: '/settings/billing',
        name: 'Billing',
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: '/order',
    name: 'Order',
    icon: <BsCartCheck />,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: <BiCog />,
    exact: true,
  },
  {
    path: '/saved',
    name: 'Saved',
    icon: <AiFillHeart />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorMode, setIsAuthorMode] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: '140px',
      padding: '5px 15px',
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: 'auto',
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleButtonClick = () => {
    setIsAuthorMode(!isAuthorMode);
    navigate(isAuthorMode ? '/' : '/AuthorLand');
  };

  useEffect(() => {
    if (!isOpen) {
      setIsAuthorMode(false);
    }
  }, [isOpen]);

  return (
    <div className="image">
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? '200px' : '38px',
            transition: {
              duration: 0.5,
              type: 'spring',
              damping: 11,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            {isOpen && (
              <motion.h1
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={showAnimation}
                className="logo"
              >
                Home
              </motion.h1>
            )}
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route) => (
              <NavLink
                activeClassName="active"
                to={route.path}
                key={route.name}
                className="link"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div className="link_text">{route.name} </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section><br></br>
          <section className="routes">
            {isOpen && (
              <button className="sidebar-button cool-button" onClick={handleButtonClick}>
              {isAuthorMode ? 'Reader Mode' : 'Author Mode'}
            </button>
            

            )}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
      <Mainpage />
    </div>
  );
};

export default Sidebar;
