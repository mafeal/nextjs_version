import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const ProfileNavbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: #3b4252;
  color: #eceff4;

  img {
    width: 298px;
    height: 298px;
    margin-top: 60px;
    margin-bottom: 40px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 350px;

    img {
      width: 298px;
      height: 298px;
    }
  }

  @media (max-width: 568px) {
    width: 100%;

    img {
      margin-top: 30px;
    }

    
    p {
      margin: 10px 0;
    }
  }
`;

const ProfileData = styled.div`
  margin: 0 25px;

  @media (max-width: 768px) {
    margin: 0 15px;
  }

  @media (max-width: 568px) {
    margin: 0 10px;
  }
`;

const UserName = styled.p`
  margin: 0;
  font-family: Lato;
  font-size: 40px;
  font-style: italic;
  line-height: 50px;

  @media (max-width: 568px) {
    margin: 0;
    font-size: 30px;
    line-height: 20px;
  }
`;

const UserLogin = styled.a`
  margin: 0;
  text-decoration: none;
  color: #eceff4;
  font-size: 28px;
  font-style: italic;
  line-height: 34px;

  @media (max-width: 568px) {
    margin: 0;
    font-size: 25px;
  }
`;

const UserBio = styled.p`
  color: #8190a5;
  font-size: 18px;
  font-style: unset;
  font-weight: bold;
  line-height: 28px;

  @media (max-width: 568px) {
    margin: 10px 0;
  }
`;

const UserRanks = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-style: italic;
  justify-content: space-between;
`;

const UserRankItem = styled.div`
  display: flex;
  align-items: center;

  i {
    padding-right: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 568px) {
    margin: 40px 0;
  }
`;

const UserInformationItem = styled.div`
  padding-bottom: 15px;

  i {
    padding-right: 20px;
  }

  a {
    padding-right: 20px;
    text-decoration: none;
    color: #eceff4;
  }

  @media (max-width: 768px) {
    font-size: 20px;

    i {
      padding-right: 20px;
    }
  }

`;

const BackButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-bottom: 35px;

  text-decoration: none;
  background-color: #eceff4;
  border-radius: 5px;
  border-width: 0;
  width: 192px;
  height: 50px;
  align-items: center;

  color: #3b4252;
  font-family: Lato;
  font-size: 18px;
  font-style: italic;
  width: 192px;
  text-align: center;
  cursor: pointer;
`;

export default function NavBar() {
  const [userName, setUserName] = useState("");
  const [amountStar, setAmountStar] = useState(0);
  const [user, setUser] = useState({
    id: "id",
    login: "@username",
    avatar: "/image-profile.png",
    bio: "Biografia do Usuário",
    name: "Nome do usuário",
    company: "Empresa",
    blog: "Blog",
    location: "Localização",
    email: "email@usuario.com",
    followers: "Seguidores",
    following: "Seguindo",
    twitter: "Usuário do Twitter",
    stars: "0",
  });

  const useQuery = () => {
    return new URLSearchParams(document.location.search);
  };

  const getQuery = () => {
    let query = useQuery();
    // console.log(userName + "-> Este é o usuário procurado!");
    return query.get("userName");
  };

  useEffect(() => {
    setUserName(getQuery);

    if (!userName) {
      // console.log("carregando...");
    } else {
      // console.log(userName + " Carregou!");

      fetch(`https://api.github.com/users/${userName}/starred`)
        .then((res) => res.json())
        .then((data) => {
          const star = data.length;
          setAmountStar(star);
        });

      fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setUser({
            id: data.id,
            login: data.login,
            avatar: data.avatar_url,
            bio: data.bio,
            name: data.name,
            company: data.company,
            blog: data.blog,
            location: data.location,
            email: data.email,
            followers: data.followers,
            following: data.following,
            twitter: data.twitter_username,
            repos: data.public_repos,
            stars: "0",
            html_url: data.html_url,
          });
        });
    }
  }, [userName]);

  return (
    <ProfileNavbar as="section">
      <img src={user.avatar} alt="User" />
      <ProfileData as="section">
        <UserName>{user.name}</UserName>
        <UserLogin target="_blank" href={user.html_url}>
          @{user.login}
        </UserLogin>
        <UserBio>{user.bio}</UserBio>
        <UserRanks as="section">
          <UserRankItem>
            <i className="fas fa-users"></i>
            {user.followers} followers
          </UserRankItem>
          <UserRankItem>
            <i className="far fa-heart"></i>
            {user.following} following
          </UserRankItem>
          <UserRankItem>
            <i className="far fa-star"></i>
            {amountStar} stars
          </UserRankItem>
        </UserRanks>
        <UserInformation as="section">
          <UserInformationItem>
            <i className="far fa-building"></i>
            {user.company}
          </UserInformationItem>
          <UserInformationItem>
            <i className="fas fa-map-marker-alt"></i>
            {user.location}
          </UserInformationItem>
          <UserInformationItem>
            <i className="far fa-envelope"></i>
            {user.email}
          </UserInformationItem>
          <UserInformationItem>
            <i className="fas fa-link"></i>
            <a target="_blank" href={`http://${user.blog}`}>
              {user.blog}
            </a>
          </UserInformationItem>
          <UserInformationItem>
            <i className="fab fa-twitter"></i>
            <a target="_blank" href={`https://www.twitter.com/${user.twitter}`}>
              @{user.twitter}
            </a>
          </UserInformationItem>
        </UserInformation>
      </ProfileData>
      <Link href="/">
        <BackButton>Voltar</BackButton>
      </Link>
    </ProfileNavbar>
  );
}
