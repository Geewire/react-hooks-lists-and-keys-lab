import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const naBar= links.map((link)=><a key={link} href={`#${link}`}>{link}</a>)

  return <nav>{
  naBar
   }
  </nav>;
}

export default NavBar;
