import { getHtmlPage } from "../../utils/getHtmlPage.js";

export default async function Footer() {
  return await getHtmlPage("./src/components/footer/Footer.html");
}
