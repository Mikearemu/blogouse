

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import Footer from './components/Footer';


const App = () => {
  const [category, setCategory] = useState("general");
  return (
   
    <div className="overflow-hidden bg-fixed  bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
     <Navbar setCategory={setCategory} />
     <NewsBoard category={category}/>
     <Footer/>
    </div>

  )
}

export default App