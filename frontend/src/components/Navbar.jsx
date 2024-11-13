// Importing necessary React features and components
import React, { useState } from 'react'; // useState is used to manage state within the component
import { assets } from '../assets/assets'; // Importing assets (like images) from an external file
import { NavLink, useNavigate } from 'react-router-dom'; // NavLink for navigation and useNavigate for programmatic navigation

// Navbar component definition
const Navbar = () => {
    // useNavigate hook to programmatically navigate to different routes
    const navigate = useNavigate();

    // State hooks for managing menu visibility and user authentication status (token)
    const [showMenu, setShowMenu] = useState(false); // Manages if the mobile menu is shown or not
    const [token, setToken] = useState(true); // Simulates user authentication (true = logged in, false = logged out)

    return (
        // Main navbar container, using Flexbox to align items
        <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-400'>
            
            {/* Logo image, clickable with a custom cursor */}
            <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
            
            {/* Navigation menu, hidden on small screens (using 'hidden md:flex') */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                {/* NavLink is used for navigation, automatically adds active styles */}
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            {/* Section for user actions like profile and login */}
            <div className='flex items-center gap-4'>
                {
                    // Conditional rendering based on user authentication (token state)
                    token
                    ? (
                        // User is logged in - display profile picture and dropdown menu
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            {/* Profile picture */}
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile" />
                            {/* Dropdown icon */}
                            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
                            
                            {/* Dropdown menu appears when user hovers over the profile picture */}
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                {/* Dropdown content */}
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    {/* Profile link - navigates to the "My Profile" page */}
                                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                                    {/* Appointments link - navigates to the "My Appointments" page */}
                                    <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My appointments</p>
                                    {/* Logout option - sets the token to false (logs out) */}
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        // User is not logged in - show a "Create Account" button
                        <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                            Create account
                        </button>
                    )
                }
            </div>
        </div>
    );
};

// Exporting the Navbar component so it can be used in other parts of the app
export default Navbar;
