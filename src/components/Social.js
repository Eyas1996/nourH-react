import React from "react";

import SocialItem from "./SocialItem";

function Social() {
  return (
    <ul className="list-group">
      <SocialItem
        media="Facebook"
        id="facebook"
        img="https://picsum.photos/60"
      />

      <SocialItem
        media="Youtube"
        id="youtube"
        img="https://picsum.photos/61"
      />

      <SocialItem
        media="Instagram"
        id="instagram"
        img="https://picsum.photos/62"
      />

      <SocialItem
        media="LinkedIn"
        id="linkedin"
        img="https://picsum.photos/63"
      />
    </ul>
  );
}

export default Social;
