import React from "react";

import TeamMember from "./TeamMember";
function Team() {
  return (
    <div className="container">
      <TeamMember
        info={{
          img: "/images/01.jpg",
          name: "Jinx",
          title: "webdesigner",
          phone: "+49 123 8956 9943",
          email: "JinxJinx@gmail.com",
          website: "arcane.com",
        }}
      />

      <TeamMember
        info={{
          img: "/images/02.jpg",
          name: "Vi",
          title: "Data scientist",
          phone: "+49 123 8956 9943",
          email: "ViVi@gmail.com",
          website: "arcane.com",
        }}
        />
      <TeamMember
        info={{
          img: "/images/03.jpg",
          name: "Vander",
          title: "Cloud engineer",
          phone: "+49 123 8956 9943",
          email: "Vander@gmail.com",
          website: "arcane.com",
        }}

        /*
        Network administrator
        Software engineer
         Web developer
         webdesigner
         Data scientist
         Cloud engineer
        */
      />
      
      <TeamMember
        info={{
          img: "/images/04.png",
          name: "Vi",
          title: "Data scientist",
          phone: "+49 123 8956 9943",
          email: "ViVi@gmail.com",
          website: "arcane.com",
        }}
        />
        
      <TeamMember
        info={{
          img: "/images/05.png",
          name: "Vi",
          title: "Data scientist",
          phone: "+49 123 8956 9943",
          email: "ViVi@gmail.com",
          website: "arcane.com",
        }}
        />
        
      <TeamMember
        info={{
          img: "/images/06.jpg",
          name: "Vi",
          title: "Data scientist",
          phone: "+49 123 8956 9943",
          email: "ViVi@gmail.com",
          website: "arcane.com",
        }}
        />
    </div>
  );
}

export default Team;
