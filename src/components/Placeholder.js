import React from "react";
import ContentLoader from "react-content-loader";

const Placeholder = (props) => (
  <ContentLoader
    speed={2}
    width={480}
    height={768}
    viewBox="0 0 480 768"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="386" rx="3" ry="3" width="465" height="33" />
    <rect x="6" y="2" rx="0" ry="0" width="466" height="338" />
    <rect x="329" y="697" rx="0" ry="0" width="140" height="59" />
    <rect x="11" y="703" rx="0" ry="0" width="56" height="60" />
    <rect x="7" y="436" rx="3" ry="3" width="465" height="33" />
    <rect x="8" y="488" rx="3" ry="3" width="330" height="33" />
    <rect x="8" y="541" rx="3" ry="3" width="330" height="33" />
  </ContentLoader>
);

export default Placeholder;
