import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus possimus nam sequi? ",
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus possimus nam sequi? ",
      img: "https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus possimus nam sequi? ",
      img: "https://images.pexels.com/photos/3944417/pexels-photo-3944417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus possimus nam sequi? ",
      img: "https://images.pexels.com/photos/909256/pexels-photo-909256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
              <div className="bg"></div>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button to={`/post/${post.id}`}>Lire pluss..</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home