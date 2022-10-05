import { AboutWrap, MainContent, ImageDiv, TextArea } from '../styles/components/StyledAbout'

const About = () => {
  return (
    <AboutWrap>
      <MainContent>
        <ImageDiv />
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

export default About;
