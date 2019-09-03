import React from "react";

const Profile = ( props ) => {
  const style = {
    container:{
        width: '100%'
    },
    image: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      border: "2px solid #fafafa"
    }
  };

  return (
    <div style={style.container}>
      <img style={style.image} src={ props.imageuri } alt="Default Profile" />
    </div>
  );
};

export default Profile;
