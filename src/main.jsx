
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"



import Navbar from "./components/Navbar"
import About from './components/About'
import Footer from "./components/Footer"
import Product from "./components/Product"
import Search from './components/Search'

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(
    <div>
        <Navbar></Navbar>
        <Search></Search>
        <Product></Product>
        <About></About>
        <Footer></Footer>
    </div>
)