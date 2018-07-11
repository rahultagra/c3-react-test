import React, { Component } from "react";
import UsersDetail  from './UserHtml';
import users from './UserObj';
import get from './NetworkManager';
import { Link } from 'react-router-dom';
import Routes from './AppRoutes';

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { users };
    this.deleteUser = this.deleteUser.bind(this);
    this.findUser = this.findUser.bind(this);
  }
  componentWillMount() {
    if(this.props && this.props.match && this.props.match.params && this.props.match.params.id)
    {
     this.fetchSingleUser(this.props);
    }
    else{
      this.fetchAllUsers();
    } 

  }
  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.match && nextProps.match.params && nextProps.match.params.id)
    {
     this.fetchSingleUser(nextProps);
    }
    else{
      this.fetchAllUsers();
    } 
  }
  fetchSingleUser(props){
    const user = [this.findUser(props.match.params.id)];
    this.setState({
      users:user
    });
  }
  fetchAllUsers(){
    get('https://reqres.in/api/users?page=1&per_page=10').then(response => {
      const parsedResponse = JSON.parse(response);
      this.setState({
        users:this.removeDuplicates(users.concat(parsedResponse.data),'id')
      });
    }, (error) => {

    }) 
  }
  findUser(userId) {
    userId=parseInt(userId);
    return this.state.users.length > 0 ? this.state.users.find((obj) =>  obj.id === userId ) :{ } ;
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}
  deleteUser(userId) {  
   const usersAll = this.state.users.slice();
    var obj = usersAll.find((obj) =>  obj.id === userId );
    const i = usersAll.indexOf(obj);
    usersAll.splice(i, 1);
    this.setState({
      users:usersAll
    });
  }

  checkTarget(e) {
    if(e.target.className === 'delBtn') {
      e.preventDefault();
      return
    }   
  }

  render() {
    let html = [];
    this.state.users.length > 0 && this.state.users.forEach(user => {   
     html.push(<Link to={"/userid/" + user.id}  onClick={this.checkTarget} class="link" key= {`link_${user.id}`}><div className="tile" key= {`tile_${user.id}`}><UsersDetail user={user} key={user.id} />
     <button className="delBtn" onClick={(e) => this.deleteUser(user.id, e)} data-key = {`btn_${user.id}`} key= {`del_${user.id}`}>Delete</button></div></Link>)
  });
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        <div className="main">
       {html} 
       </div>
      </div>
    );
  }
}
