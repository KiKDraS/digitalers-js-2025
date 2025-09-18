import { getHtmlPage } from "../../../utils/getHtmlPage.js";

export default async function About() {
  return await getHtmlPage("./src/components/pages/about/About.html");
}
