import React from 'react'
import { Container } from "@mui/material"
import Newscard from './Newscard'

const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore}) => {
  return (
    <Container maxWidth="md ">
        <div className='pt-20'>

        {newsArray.map((newsItem)=>(
            <Newscard
                newsItem={newsItem}
                key={newsItem.title}
            />
        ))}

        {
            loadMore <= newsResults && (
                <div className='flex justify-center'>
                    <hr/>
                    <button 
                    className='bg-zinc-400 text-white active:bg-slate-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' 
                    onClick={() => setLoadMore(loadMore + 20)}>
                    Load More
                    </button>
                </div>
            )
        }
        </div>
    </Container>
  )
}

export default NewsContent