import React, { useState } from "react";
import styled from 'styled-components'
import { useRouter } from 'next/router';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
`;

const Title = styled.p`
    margin: 0;
    align-self: flex-end;
    padding-left: 80px;
    color: #3B4252;
    font-family: Lato;
    font-size: 40px;
    font-style: italic;
    font-weight: 200;

    @media (max-width: 568px) {
      width: 100%;
      padding: 0;
    }
`;

const Form = styled.div`
    display: flex;
    align-items: center;

    
  @media (max-width: 568px) {
      flex-direction: column;
  }
`;

const Input = styled.input`
    background-color: #FFFFFF;
    border: 1px solid #3B4252;
    border-radius: 5px;
    padding-left: 20px;
    width: 400px;
    height: 50px;
  
    color: #8190A5;
    font-family: Lato;
    font-size: 18px;
    font-style: italic;
    line-height: 62px;
    width: 290px;
    text-align: left;

    @media (max-width: 568px) {
        width: 100%;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #47525E;
    border-radius: 5px;
    padding: 0 10px;
    width: 118px;
    height: 50px;
  
    color: #ECEFF4;
    font-family: Lato;
    font-size: 22px;
    font-style: italic;
    cursor: pointer;

    @media (max-width: 568px) {
        margin-top: 10px;
    }
`;

const ErrorMessage = styled.div`
    margin-top: 10px;
    padding: 20px;
    background-color: rgb(230, 153, 125);
    border-radius: 20px;
    text-align: center;
    font-size: 1.3em;
`;


export default function SearchCard() {
    const [userName, setUserName] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter()
  
    const getUserName = (event) => {
      event.preventDefault();
      const userInput = document.querySelector('#search-input').value
      setUserName(userInput) 
    }
  
    const submitHandle = (event) => {
      event.preventDefault();
  
      fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
         if (data.message === "Not Found") {
           setErrorMessage(` Usuário "${userName}" não encontrado`)
        } else {
          router.push(`/profile?userName=${userName}`)
        }
      })
    }
  
    return (
        <Card>
          <Title>Search Devs</Title>
          <Form>
            <Input
              id="search-input"
              placeholder="Type the username here..."
              onChange={getUserName}
            />
            <Button onClick={submitHandle}>
              <i className="fas fa-search"></i>
              Buscar
            </Button>
          </Form>
          {errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </Card>
    );
  }