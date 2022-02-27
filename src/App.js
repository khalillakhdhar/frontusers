import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Component } from 'react';
import ListUsers from './components/ListUsers';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import ShowUser from './components/ShowUser';
class App extends Component
{
  render()
  {
return(
<Router>
<Routes>
<Route path='/' element={<ListUsers/>} exact  />
<Route path='/create' element={<AddUser/>} exact  />
<Route path='/update/:id' element={<UpdateUser/>} exact  />
<Route path='/show/:id' element={<ShowUser/>} exact />



</Routes>



</Router>



)


  }


}
export default App;
