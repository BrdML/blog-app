import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
        <h1>Enregistrez-vous</h1>
        <form>
            <input required type="text" placeholder="Nom d'utilisateur" />
            <input required type="email" placeholder='Email'/>
            <input required type="password" placeholder='Mot de passe' />
            <button>Enregistrer</button>
            <p>This is an error!</p>
            <span>Déja un compte? <Link to="/login">Se connecter</Link></span>
        </form>
    </div>
  )
}

export default Register