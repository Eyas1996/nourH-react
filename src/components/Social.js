import React from "react";

function Social() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input className="form-check-input" type="checkbox" id="facebook" />
        <label className="form-check-label" htmlFor="facebook"> Facebook</label>
      </li>
      <li className="list-group-item">
        <input className="form-check-input" type="checkbox" id="youtube" />
        <label className="form-check-label" htmlFor="youtube"> Youtube</label>
      </li>
      <li className="list-group-item">
        <input className="form-check-input" type="checkbox" id="instagram" />
        <label className="form-check-label" htmlFor="instagram"> Instagram</label>
      </li>
    </ul>
  );
}

export default Social;

// <li className="list-group-item">
// <input type="checkbox" id="facebook" />
// <label for="facebook"> Facebook</label>
// </li>
// <li className="list-group-item"></li>
// <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
// <label for="vehicle2"> Youtube</label>
// </li>
// <li className="list-group-item"></li>
// <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
// <label for="vehicle3"> Instagram</label></li>
