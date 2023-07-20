import React from 'react'
import "./header.scss"
import logo from "./Logonetflix.png"
import {Link} from "react-router-dom"
// import {BsSearch} from "react-icons/all"
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
    <nav className='header'>
         <img src={logo} alt="logo img" />

         <div>
            <Link to='/'>Home</Link>
            <Link to='/tvshow'>TV Shows</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/latest'>Latest</Link>
            <Link to='/mylist'>My List</Link>

         </div>
         {/* <BsSearch /> */}
         <FaSearch />
    </nav>
   
  )
}

export default Header