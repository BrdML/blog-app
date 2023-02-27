import React from 'react'
import { Link } from 'react-router-dom';

function AdminMenu() {
  return (
    <div className='adminmenu'>
      <div className="contentmnu">
        <div className="links">
          <Link className='link' to="/admin">
            <h6>Dashboard</h6>
          </Link>
          <Link className='link' to="/blogpost">
            <h6>Blog Posts</h6>
          </Link>
          <Link className='link' to="/">
            <h6>Messages</h6>
          </Link>
          <Link className='link' to="/">
            <h6>Statistiques</h6>
          </Link>
          <span>Déconnexion</span>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu