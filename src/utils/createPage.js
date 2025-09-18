import navbar from "../components/navbar/NavBar.js";
import footer from "../components/footer/Footer.js";

export const createPage = async (content) => {
  const navBarComponent = await navbar();
  const footerComponent = await footer();

  return navBarComponent + content + footerComponent;
};
