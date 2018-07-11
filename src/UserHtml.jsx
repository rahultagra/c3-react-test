import React from "react";

const UsersDetail = (props) => {
    let userDetailHtml = [];
    const user = props.user;
    if (user.hasOwnProperty('avatar')) {
        userDetailHtml.push(<div className='img_main'><img  key={user.id+'_image'} src={user.avatar} alt={user.first_name} /></div>);
      }
      userDetailHtml.push(<div className="name"><UserName id={user.id}  fname={user.first_name} lname={user.last_name}/></div>);
   return userDetailHtml;
};

const UserName = (props) => {
let name = [];
if (props.fname) {
    name.push(<span key={`${props.id}_fname`}>{props.fname}</span>);
  }
  if (props.lname) {
    name.push(' ');
    name.push(<span key={`${props.id}_lname`}>{props.lname}</span>);
  }
  return name;
}
export default  UsersDetail;