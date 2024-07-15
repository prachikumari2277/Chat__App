import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
       <div className="logout">
       <h1>{userName}</h1> <Logout />
      </div>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  .logout{
    padding: 0 2rem;
    display: flex;
    gap: 40rem;
    flex-direction: row;
    bottom-margin: 20rem;
    span{
      height:10rem;
      color: #4e0eff;
    }
  }
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
