import { getHtmlPage } from "../../../utils/getHtmlPage.js";

export default async function Home() {
  return await getHtmlPage("./src/components/pages/home/Home.html");
}
