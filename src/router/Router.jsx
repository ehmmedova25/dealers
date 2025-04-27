import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../dealers/layout/Layout'
import Home from '../dealers/home/Home'
const Router = () => {
  return (
<BrowserRouter>
<Routes>

<Route path='/' element={<Layout/>}>
<Route path="/" element={<Home />} />

</Route>

</Routes>

</BrowserRouter> 
 )
}

export default Router

