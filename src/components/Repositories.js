import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProfileCard = styled.section`
  flex-grow: 2;
  margin: 10px 60px;

  @media (max-width: 768px) {
    margin: 10px 10px;
    width: 367px;
  }
`;

const UlContainer = styled.ul`
  @media (max-width: 768px) {
    padding-left: 20px;
    width: 330px;
  }

  @media (max-width: 568px) {
    padding-inline-start: unset;
    margin: 0 10px;
    width: 100%;
  }
`;

const RepositoryCard = styled.li`
  display: flex;
  flex-direction: column;
  color: #3b4252;
  padding-bottom: 30px;
`;

const RepositoryName = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #3b4252;
`;

const RepositoryDescription = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  max-width: 680px;

  @media (max-width: 568px) {
    margin: 10px 0;
  }
`;

const RepositoryStatus = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  padding-top: 5px;
  color: #8190a5;
  font-family: Lato;
  font-size: 20px;

  .fa-circle {
    font-size: 8px;
    padding-left: 10px;
  }

  @media (max-width: 568px) {
    margin: 10px 0;
  }
`;

const Icon = styled.i`
  padding-right: 20px;
`;

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [repo, setRepo] = useState([]);
  const [arrRepo, setArrRepo] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(document.location.search);
  };

  const getQuery = () => {
    let query = useQuery();
    // console.log(userName + "-> Este é o usuário procurado!");
    return query.get("userName");
  };

  const starOrdenation = (fristPosition, secondPosition) => {
    if (fristPosition.stargazers_count < secondPosition.stargazers_count)
      return -1;

    if (fristPosition.stargazers_count > secondPosition.stargazers_count)
      return 1;
  };

  useEffect(() => {
    setUserName(getQuery);

    if (!userName) {
      // console.log("carregando...");
    } else {
      // console.log(userName + " Carregou!");

      fetch(`https://api.github.com/users/${userName}/repos`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((repos) => {
            setRepo(
              repo.push({
                id: repos.id,
                html_url: repos.html_url,
                description: repos.description,
                name: repos.name,
                updated_at: repos.updated_at,
                stargazers_count: repos.stargazers_count,
              })
            );
          });
        })
        .then(() =>
          setArrRepo(Array.from(repo).sort(starOrdenation).reverse())
        );
    }

    return;
  }, [userName]);

  const lastUpdated = (updatedAt) => {
    const today = new Date()
    const updatedDate = new Date(updatedAt);
    const countDays = (date) => (date.getFullYear() * 365) + ((date.getMonth()+1) * 30) + (date.getDate())

    return countDays(today) - countDays(updatedDate)
}

  return (
    <ProfileCard>
      <UlContainer>
        {arrRepo.length === 0 ? (
          <RepositoryCard>
            <RepositoryName href="#">
              {" "}
              Nenhum repositório encontrado.{" "}
            </RepositoryName>
            <RepositoryDescription>
              Provavelmente o usuário não possui repositórios públicos ou você
              pesquisou pelo usuário errado.
            </RepositoryDescription>
          </RepositoryCard>
        ) : (
          arrRepo.map((item) => (
            <RepositoryCard key={item.id}>
              <RepositoryName target="_blank" href={item.html_url}>
                {item.name}
              </RepositoryName>
              <RepositoryDescription>{item.description}</RepositoryDescription>
              <RepositoryStatus>
                <Icon className="far fa-star"></Icon> {item.stargazers_count}{" "}
                stars
                <Icon className="fas fa-circle"></Icon> Updated{" "}
                {`${lastUpdated(item.updated_at)} `}
                days ago
              </RepositoryStatus>
            </RepositoryCard>
          ))
        )}
      </UlContainer>
    </ProfileCard>
  );
}
