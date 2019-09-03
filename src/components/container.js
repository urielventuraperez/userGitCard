import React, { useState } from "react";
import Card from "./card";

const CardContainer = () => {
  const API = "https://api.github.com/users/";
  const SEARCHTEXT = "Search User";

  const style={
      formStyle:{
          marginBottom:'4%',
      }
  }

  const [userFilter, setUserFilter] = useState({
    login: ""
  });

  const [user, setUser] = useState({
    login: "",
    name: "",
    userprofile: "",
    bio: ""
  });

  const onChangeInputUserName = e => {
    e.preventDefault();
    setUserFilter({
      login: e.target.value
    });
  };

  const onClickGetUser = e => {
    e.preventDefault();
    fetch(API + userFilter.login)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUser({
          login: data.login,
          name: data.name,
          profile: data.avatar_url,
          bio: data.bio
        });
      })
      .catch(error => {
        console.log(error);
      });
    setUserFilter({
      login: ""
    });
  };

  return (
    <div>
      <form style={style.formStyle}>
        <input
          onChange={e => onChangeInputUserName(e)}
          name="login"
          placeholder="Enter username"
          value={userFilter.login}
        />
        <button onClick={e => onClickGetUser(e)}>{SEARCHTEXT}</button>
      </form>
      <Card
        profile={user.profile}
        login={user.login}
        name={user.name}
        bio={user.bio}
      />
    </div>
  );
};

export default CardContainer;
