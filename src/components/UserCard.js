import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const UserCard = (props) => {
    const user = props.user;
    return(
    <div className="card-container">
    <div className="desc">
    <h2>
    <Link to={`/show/${user._id}`}>
    { user.nom } {user.prenom}
    </Link>
    </h2>
    <h3>{user.email}</h3>
    <p>{user.adresse}</p>
    </div>
    </div>
    )
    };
    export default UserCard;