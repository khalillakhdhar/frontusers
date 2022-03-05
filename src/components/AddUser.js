import { Component } from "react";
import { number } from './../../node_modules/tailwindcss/src/util/dataTypes';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
class AddUser extends Component
{

// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
    this.state=
    {
        nom:"",
        prenom:"",
        email:"",
        adresse:"",
        age:number,
    }

}
onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };
onSubmit= e=>{
    e.preventDefault();
    const data=
    {
        nom:this.state.nom,
        prenom:this.state.prenom,
        email:this.state.email,
        adresse:this.state.adresse,
        age:this.state.age,
    }
    axios
    .post('http://localhost:8081/api/users/', data)
    .then(res => {
    this.setState({
        nom:"",
        prenom:"",
        email:"",
        adresse:"",
        age:number,
    })
    this.props.history.push('/');
    alert("utilisateur ajouté avec succés");
    })
    .catch(err => {
    console.log("Error in CreateUser!"+err);
    })
    };

render()
{

return(
<div className="CreateBook">
<div className="container">
<div className="row">
<div className="col-md-8 m-auto">
<br />
<Link to="/" className="btn btn-outline-warning floatleft">
Voir liste
</Link>
</div>
<div className="col-md-8 m-auto">
<h1 className="display-4  text-center">Ajouter user</h1>
<p className="lead text-center">
Nouveau utilisateur
</p>
    <form noValidate onSubmit={this.onSubmit}>
<div className='form-group'>
<input type='text' placeholder='Nom' name='nom' className='form-control' value={this.state.nom} onChange={this.onChange}/>

</div>
<div className='form-group'>
<input type='text' placeholder='Prenom' name='prenom' className='form-control' value={this.state.prenom} onChange={this.onChange}/>

</div>
<div className='form-group'>
<input type='email' placeholder='Email' name='email' className='form-control' value={this.state.email} onChange={this.onChange}/>

</div>
<div className='form-group'>
<textarea name='adresse' placeholder="votre adresse ici" className='form-control' value={this.state.adresse} onChange={this.onChange}/>

</div>
<div className='form-group'>
<input type='number' min="1" placeholder='age' name='age' className='form-control' value={this.state.age} onChange={this.onChange}/>

</div>
<input
type="submit" className="btn btn-outline-warning btn-block mt-4"/>
</form>
</div>
</div>
</div>
</div>
);
}
}
export default AddUser;