const setHeaderHeight = () => {
  const header = document.getElementsByTagName("nav")[0];
  document.documentElement.style.setProperty(
    "--headerHeight",
    `${header.offsetHeight}px`
  );
};

const setScroll = (type) => {
  const body = document.querySelector("body");
  body.style.overflowY = type;
};

export { setHeaderHeight, setScroll };
