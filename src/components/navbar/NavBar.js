import { getHtmlPage } from "../../utils/getHtmlPage.js";

export default async function NavBar() {
  return await getHtmlPage("./src/components/navbar/NavBar.html");
}
