import About from "../components/pages/about/About.js";
import Contact from "../components/pages/contact/Contact.js";
import home from "../components/pages/home/Home.js";
import { PAGE_NAME } from "../constantes/PAGE_NAME.js";
import { createPage } from "./createPage.js";

export const renderPage = async (pageName) => {
  switch (pageName) {
    case PAGE_NAME.HOME: {
      const content = await home();
      return await createPage(content);
    }
    case PAGE_NAME.CONTACT: {
      const content = await Contact();
      return await createPage(content);
    }

    case PAGE_NAME.ABOUT: {
      const content = await About();
      return await createPage(content);
    }

    //Para que el usuario final siempre tenga una vista, retornar el home si no se obtiene el pageName
    default: {
      const content = await home();
      return await createPage(content);
    }
  }
};
