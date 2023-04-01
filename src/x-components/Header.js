import React from "react";

function Header() {
  const client = "Designer";

  const title = {
    designer: "Design",
    programmer: "Programming",
  };

  const info = {
    name: "Eyas",
    nick: "Hamad",
  };

  return (
    <div className="navbar bg-primary rounded">
      Hello {`${info.name} ${info.nick}`}
      <h1 className="text-white p10px">
        {client === "Designer" ? title.designer : title.programmer} is my life
      </h1>
    </div>
  );
}

export default Header;
