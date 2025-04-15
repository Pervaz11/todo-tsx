import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
          alt="To-Do Logo"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
          <li>
            <Link to="/pending">Pending</Link>
          </li>
          <li>
            <Link to="/add">Add Todo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
