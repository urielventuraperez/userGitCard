import React from "react";
import Profile from "./profile";
import defaultImage from "../media/default.jpg";

const Card = props => {

  const USERINIT = "Username";
  const NAMEINIT = "Name";
  const BIOINIT = "Biography";

  const styles = {
    container: {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      borderRadius: 25,
      background: "#fafafa",
      color: "#333"
    }
  };

  return (
    <div style={styles.container}>
      <Profile imageuri={ props.profile ? props.profile : defaultImage } />
      <h4>{ props.login ? props.login : USERINIT }</h4>
      <h5>{ props.name ? props.name : NAMEINIT }</h5>
      <h6>{ props.bio ? props.bio : BIOINIT }</h6>
    </div>
  );
};

export default Card;
