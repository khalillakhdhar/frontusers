import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router'

class ShowUser extends Component
{

// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
this.state={
    user:{}
}
}
componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
    .get("http://localhost:8081/api/users/"+this.props.match.params.id)
    .then(res => { console.log("Print-showBookDetails-API-response: " +res.data);
    this.setState({
    user: res.data
    })
    }).catch(err => {
    console.log("Error from showUser"+err);
    })
    };

render()
{

return(

    <h1>ShowUser</h1>
);

}

}
export default ShowUser;