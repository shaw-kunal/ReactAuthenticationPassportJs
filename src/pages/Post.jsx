import React from 'react'
import { posts } from '../data'
import { useLocation } from 'react-router-dom'

const Post = () => {

  const location = useLocation()
  console.log(location)
  const path = location.pathname.split("/")[2]
  console.log(path)
  console.log(path)
  const post = posts.find(p=> p.id.toString() === path)

  return (
    <div className='post'>
        <img src={post.img} alt="" className='postImg' />
        <h1 className="postTitle">{post.title}</h1>
        <p className="PostDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
    </div>
  )
}

export default Post