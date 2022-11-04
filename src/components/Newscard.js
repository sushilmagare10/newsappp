import React from 'react'
import logo from "./images/logo.png"

const Newscard = ({newsItem}) => {
    console.log(newsItem)
  return (
    <div class="bg-white rounded-lg shadow-2xl md:flex p-3 m-12 h-[320px] w-auto">
    <img 
        src={newsItem.urlToImage ? newsItem.urlToImage: logo}
        alt={newsItem.title} 
        class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-lg"
     />
    
    <div class="p-6">
      <h2 class="font-bold text-xl md:text-2xl mb-2 text-zinc-700">{newsItem.title}</h2>
      <p class="text-ogray-500">
        {newsItem.description}
      </p>
      <div className=' p-2 lg:mt-10 md:mt-38 sm:mt-10 object-bottom'>
      <a href={newsItem.url} target="__blank">
        <span 
        href={newsItem.url}
        className='bg-zinc-400 text-white active:bg-slate-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        >Read More at</span>
        </a> 
        <br/>
        <p className='mt-4 text-xl font-sans font-medium text-slate-800'>Author {newsItem.author? newsItem.author: "Unknown"}</p>
        <p className='mt-4 text-xl font-sans font-medium text-slate-800'>Source {newsItem.source.name}</p>
      </div>
    </div>

  </div>
    
  )
}

export default Newscard