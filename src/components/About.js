import BreweryPic from "../assets/beer-kegs-piled-up.jpg";
import { PageWrap } from "../styles/ContainerElements";
import styled from "styled-components";

const About = () => {
  return (
    <AboutWrap>
      <MainContent>
        <ImageArea>
          <img src={BreweryPic} alt="Beers kegs piled up in a warehouse." />
        </ImageArea>
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
      </MainContent>
    </AboutWrap>
  );
};

const AboutWrap = styled(PageWrap)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 650px) {
    align-items: start;
    padding: 0;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
`;

const TextArea = styled.div`
  padding-top: 2rem;

  p {
    line-height: 1.5;
  }

  @media (max-width: 650px) {
    padding: 2rem;
  }
`;

const ImageArea = styled.div`
  img {
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.221);
  }
`;

export default About;
