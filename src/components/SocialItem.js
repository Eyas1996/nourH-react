import React from "react";

const SocialItem = (props) => {
  return (
    <li className="list-group-item">
      <img src={props.p.img} alt={`Icon of ${props.p.media}`} />
      <input className="form-check-input" type="checkbox" id={props.p.id} />
      <label className="form-check-label" htmlFor={props.p.id}>
        {props.p.media}
      </label>
    </li>
  );
};

export default SocialItem;
