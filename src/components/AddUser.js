import { Component } from "react";
import { number } from './../../node_modules/tailwindcss/src/util/dataTypes';

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
render()
{

return(

    <form noValidate onSubmit={this.onSubmit}>
<div className='form-group'>
<input type='text' placeholder='Nom' name='nom' className='form-control' value={this.state.nom} onChange={this.onChange}/>
{this.state.nom}
</div>
</form>
);

}

}
export default AddUser;