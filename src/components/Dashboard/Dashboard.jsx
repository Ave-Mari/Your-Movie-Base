import React, { useState, useEffect } from 'react';
import Popular from './../Popular/Popular.jsx'
import { Link } from 'react-router-dom';

export default function Dashboard() {  
  return (
    <section>
      <Link to="popular">Popular</Link>
    </section>
  )
}
