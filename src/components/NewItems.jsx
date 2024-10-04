import React from 'react'
import image from '../assets/news.jpg'
import { GoArrowRight } from "react-icons/go";

const NewItems = ({ title, description, src, url, date }) => {
  return (
    <div >
      <div  className=" animate__animated animate__fadeIn border border-gray-200 shadow dark:border-gray-700 relative flex flex-col rounded-xl bg-clip-border h-full cursor-pointer  shadow-md backdrop-blur-lg  max-w-sm ">
        <a
          href={url}>
          <img src={src ? src : image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        </a>
        <div className="p-6">
          <h5 className="mb-2 block dark:text-white  font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description ? description.slice(0, 100) : "Stay tuned for more details on this developing story! While the full description is currently unavailable, check back soon for updates and insights."} ...
          </p>
        </div>
        <div className="p-6 pt-0">

          <a
            href={url}
            className=" flex text-white absolute items-center gap-4 end-2.5 bottom-2.5 bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Read More</span>
            <GoArrowRight />
          </a>



          {/* <small className=" text-light">{date}</small> */}
        </div>
      </div>
    </div>


  )
}

export default NewItems