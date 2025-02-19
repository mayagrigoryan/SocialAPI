import React from 'react'
import { NavLink } from 'react-router-dom'
import './UserCard.css'

function UserCard({ user }) {
  return (
    <div className='user-card'>
      <NavLink to={`/profile/${user.id}`}>
        <h2>{user?.name}</h2>
      </NavLink>
      <img src={user?.photos?.large === null ? "https://www.megavoxels.com/wp-content/uploads/2024/01/Pixel-Art-Cat-5.webp" : user?.photos?.large} alt="" />
      <div>
        <button>follow</button>
        <b>{user?.id}</b>
      </div>
    </div>
  )
}

export default UserCard