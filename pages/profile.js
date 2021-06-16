import styled from 'styled-components'
import Repositories from "../src/components/Repositories";
import NavBar from "../src/components/Navbar";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 568px) {
    flex-direction: column;
  }
`;

export default function profile() {
  return (
    <ProfileContainer>
      <NavBar />
      <Repositories />
    </ProfileContainer>
  );
}
