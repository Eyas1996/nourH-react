import React from "react";

const TeamMember = (props) => {
  // props.p.name ? console.log("he") : console.log("neeee");

  return (
    <div className="card" >
      <div className="image">
        <img src={props.info.img} alt="" />
      </div>
      <div className="info">
        <h1 className="name">{props.info.name }</h1>
        <span className="title">{props.info.title}</span>
        <span className="phone">Phone: {props.info.phone}</span>
        <span className="email">Email: {props.info.email}</span>
        <span className="website">Website: {props.info.website ? props.info.website : props.info.website}</span>
      </div>
    </div>
  );
};

export default TeamMember;
