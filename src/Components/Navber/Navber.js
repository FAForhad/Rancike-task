import React from 'react';
import './Navber.css'

const Navber = () => {
    return (
        <div className='px-10 py-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div id='ellispse' className='hidden lg:inline-block'></div>
                    <div className='pl-12 ml-3 uppercase font-extrabold text-4xl'>
                        <h2 style={{ color: '#072C51' }}>DEC
                            <span className='origin-center -rotate-45'>
                                E
                            </span>
                            NT
                        </h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Pricing</a></li>
                        <li><a>Featuers</a></li>
                        <li><a>Customers</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button style={{ backgroundColor: '#0370DD' }} className="uppercase px-10 py-5 font-bold text-white rounded-2xl">Login/Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;