import React from "react";

import TeamMember from "./TeamMember";
function Team() {
  const info = [
    {
      id: 1,
      img: "/images/01.jpg",
      name: "Jinx",
      title: "webdesigner",
      email: "JinxJinx@gmail.com",
      website: "arcane.com",
    },
    {
      id: 2,
      img: "/images/02.jpg",
      name: "Vi",
      title: "Web developer",
      phone: "+49 123 8956 9943",
      email: "ViVi@gmail.com",
      website: "arcane.com",
    },
    {
      id: 3,
      img: "/images/03.jpg",
      name: "Vander",
      title: "Cloud engineer",
      phone: "+49 123 8956 9943",
      email: "Vander@gmail.com",
      website: "arcane.com",
    },
    {
      id: 4,
      img: "/images/04.png",
      name: "Silco",
      title: "Network administrator",
      email: "Silco@gmail.com",
      website: "arcane.com",
    },
    {
      id: 5,
      img: "/images/05.png",
      name: "Jayce",
      title: "Data scientist",
      phone: "+49 123 8956 9943",
      email: "Jayce@gmail.com",
      website: "arcane.com",
    },
    {
      id: 6,
      img: "/images/06.jpg",
      name: "Viktor",
      title: "Software engineer",
      phone: "+49 123 8956 9943",
      email: "Viktor@gmail.com",
    },
  ];

  const members = info.map((member) => (
    <TeamMember
      key={member.id}
      img={member.img}
      name={member.name}
      title={member.title}
      phone={member.phone}
      email={member.email}
      website={member.website}
    />
  ));

  return <div className="container">{members}</div>;
}

export default Team;
