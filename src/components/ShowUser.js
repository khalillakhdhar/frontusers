import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router'
import { useSearchParams  } from 'react-router-dom'
var id="";
class ShowUser extends Component
{
   
// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
this.state={
    user:{}
    
}
let url=window.location.href;
let result = url.lastIndexOf("/");
id=url.substring(result+1,url.length);
console.log(id);
}

componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
    .get("http://localhost:8081/api/users/"+id)
    .then(res => { console.log(res.data.id);
    this.setState({
    user: res.data
    
    })
    }).catch(err => {
    console.log("Error from showUser"+err);
    })
    };

render()
{
    const user = this.state.user;
    let UserItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nom</td>
            <td>{ user.nom }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>prenom</td>
            <td>{ user.prenom }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>email</td>
            <td>{ user.email}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>adresse</td>
            <td>{ user.adresse }</td>
          </tr>
          
        </tbody>
      </table>
    </div>
return(
<div>
{ UserItem }          </div>
   
);

}

}
export default ShowUser;