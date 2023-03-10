import React, { useState, useEffect } from 'react';
import Popular from './../Popular/Popular.jsx'
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {  
  return (
    <section>
      <Link to="popular">Popular</Link>
      <Link to="my-list">My List</Link>
      <Outlet />
    </section>
  )
}
