import React from "react";
import styled from 'styled-components'
import SearchCard from "../src/components/SearchCard";

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 90vh;

  @media (max-width: 568px) {
      flex-direction: column;
  }
`;

export default function Home() {

  return (
    <Container>
      <SearchCard/>
    </Container>
  );
}
