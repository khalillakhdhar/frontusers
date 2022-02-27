import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'
class ListUser extends Component
{

// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
    this.state={
        users:[]
    }
}
componentDidMount() {
    axios
    .get('http://localhost:8081/api/users')
    .then(res => {
    this.setState({
    users: res.data
    })
    })
    .catch(err =>{
    console.log('Error from ShowBookList');
    })
    };


render()
{
    const users= this.state.users  ;
let usersList;
if(!users)
{
usersList="no users in DB";

}
else {
    usersList = users.map((user, k) =>
    <UserCard user={user} key={k} />
    );
/*
map=
for(let user in users)
{
    usersList=UsersList+<BookCard(user)>
}
*/

    }

    return (
        <div >
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
        </div>
        <div className="col-md-11">
        <Link to="/create" className="btn btn-outlinewarning float-right">
        + Ajout utilisateur
        </Link>
        <br />
        <br />
        <hr />
        </div>
        </div>
        <div className="list">
        {usersList}
        </div>
        </div>
        </div>
        );

}

}
export default ListUser;