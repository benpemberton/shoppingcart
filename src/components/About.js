import BreweryPic from "../assets/beer-kegs-piled-up.jpg";
import { PageWrap } from "../styles/ContainerElements";
import styled from "styled-components";

const About = () => {
  return (
    <AboutWrap>
      <MainContent>
        <TextArea>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis odio eget est vulputate tristique et at diam. In sed est felis.
            Aliquam ornare, ligula eu gravida consectetur, purus massa fermentum
            velit, sit amet viverra elit tortor a magna. Ut malesuada elementum
            venenatis.
            <br></br>
            <br></br>
            Curabitur imperdiet vestibulum urna nec vehicula. Vestibulum iaculis
            placerat dignissim. Nulla porta nulla vitae odio suscipit, ut
            interdum urna ultrices. Phasellus a efficitur tellus. Mauris ac
            massa non est rutrum feugiat in vel sem. Donec eleifend pharetra
            justo, quis elementum dui pharetra eu.
          </p>
        </TextArea>
        <ImageArea>
          <img src={BreweryPic} alt="Beers kegs piled up in a warehouse." />
        </ImageArea>
      </MainContent>
    </AboutWrap>
  );
};

const AboutWrap = styled(PageWrap)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5rem;
  max-width: 1400px;
  position: relative;
`;

const TextArea = styled.div`
  position: absolute;
  line-height: 1.5;
  background-color: #6dd483;
  padding: 2rem;
  width: 40%;
  left: 0;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.221);
`;

const ImageArea = styled.div`
  width: 70%;

  img {
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.221);
  }
`;

export default About;
