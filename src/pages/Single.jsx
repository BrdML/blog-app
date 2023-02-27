import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../images/editer.png';
import Delete from '../images/delete.png';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Kyle</span>
            <p>Posté il y a jours</p>
          </div>
          <div className="edit">
            <Link to={`/admin?edit=`}>
              <img src={Edit} alt="edit" />
            </Link>
            <Link>
              <img src={Delete} alt="delete" />
            </Link>
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Ab cumque dolor minus est 
          iste hic cum, mollitia voluptatum adipisci eaque 
          dignissimos nulla sunt perspiciatis, eligendi, 
          consequuntur autem ipsum ad nostrum! Lorem ipsum 
          dolor sit amet, consectetur adipisicing elit. Ab 
          corporis quidem consequuntur perferendis atque corrupti, 
          id vero nemo doloribus! Inventore dolore iusto error doloremque 
          facilis, quaerat totam laborum rerum corrupti?
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Ab cumque dolor minus est 
          iste hic cum, mollitia voluptatum adipisci eaque 
          dignissimos nulla sunt perspiciatis, eligendi, 
          consequuntur autem ipsum ad nostrum! Lorem ipsum 
          dolor sit amet, consectetur adipisicing elit. Ab 
          corporis quidem consequuntur perferendis atque corrupti, 
          id vero nemo doloribus! Inventore dolore iusto error doloremque 
          facilis, quaerat totam laborum rerum corrupti?
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Ab cumque dolor minus est 
          iste hic cum, mollitia voluptatum adipisci eaque 
          dignissimos nulla sunt perspiciatis, eligendi, 
          consequuntur autem ipsum ad nostrum! Lorem ipsum 
          dolor sit amet, consectetur adipisicing elit. Ab 
          corporis quidem consequuntur perferendis atque corrupti, 
          id vero nemo doloribus! Inventore dolore iusto error doloremque 
          facilis, quaerat totam laborum rerum corrupti?
          </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single