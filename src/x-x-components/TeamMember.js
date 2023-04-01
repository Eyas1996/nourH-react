import React from "react";

const TeamMember = (props) => {
  // props.p.name ? console.log("he") : console.log("neeee");

  return (
    <div className="card">
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div
        className="info"
        style={{
          backgroundColor: props.website ? "black" : "white",
          color: props.website ? "white" : "black",
        }}
      >
        <h1 className="name">{props.name}</h1>
        <span className="title">{props.title}</span>
        <span className="phone">
          Phone: {props.phone ? props.phone : "There is no Phone"}
        </span>
        <span className="email">
          Email: {props.email ? props.email : "There is no Email"}
        </span>
        <span className="website">
          Website: {props.website ? props.website : "There is no website"}
        </span>
      </div>
    </div>
  );
};

export default TeamMember;
