import React from 'react'

function Menu() {

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
      ];

  return (
    <div className='menu'>
        <h3>Article qui pourrait vous plaire</h3>

        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Lire pluss..</button>
            </div>
        ))}
    </div>
  )
}

export default Menu