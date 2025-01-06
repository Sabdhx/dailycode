import React from 'react'
import Markdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

type Props = {
  title:string
  tags:string
  body:string
  index:number
}

function ShowSingleNote({title,tags,body,index}: Props) {
  const navigate = useNavigate()
 
  return (
    <>
    <div
    onClick={()=>{navigate(`/${index}`)}}
      className="bg-blue-50 p-4 rounded-lg shadow-md border border-gray-200 "
    >
      <h2 className="text-xl font-semibold text-blue-700">
        {title}
      </h2>
      <p className="text-sm text-gray-600 mt-1">
        <span className="font-medium text-blue-500">Tags: </span>
        {tags}
      </p>
      <Markdown className="text-gray-700 mt-3">{body}</Markdown>
    </div> 
    </>
     )
}

export default ShowSingleNote