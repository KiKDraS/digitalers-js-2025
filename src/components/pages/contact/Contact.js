import { getHtmlPage } from "../../../utils/getHtmlPage.js";

export default async function Contact() {
  return await getHtmlPage("./src/components/pages/contact/Contact.html");
}
