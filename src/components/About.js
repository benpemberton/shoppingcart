import BreweryPic from "../assets/beer-kegs-piled-up.jpg";
import { motion } from "framer-motion";
import TransitionDiv from "./TransitionDiv";

const About = () => {
  return (
    <TransitionDiv name="about">
      <div className="main-content">
        <div className="text-area">
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
        </div>
        <div className="image-area">
          <img src={BreweryPic} alt="Beers kegs piled up in a warehouse." />
        </div>
      </div>
    </TransitionDiv>
  );
};

export default About;
