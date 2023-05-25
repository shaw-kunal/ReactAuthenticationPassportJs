import React from 'react'
import { Link} from 'react-router-dom'
import { posts } from '../data'

const Card = ({post}) => {
  return (
    <div className='card'>
    <Link className='link' to={`/post/${post.id}`}>{post.title}</Link>
    <img src={post.img} alt="" className="image" />
    <p className='desc'>{post.desc}</p>
    <button className='cardButton' >    <Link className='link' to={`/post/${post.id}`}>Read More</Link>
</button>
    </div>
  )
}

export default Card