export const getHtmlPage = async (url) => {
  try {
    const response = await fetch(url);

    //Validamos la petición
    if (!response.ok)
      throw new Error(`HTTP Error - status: ${response.status}`);

    return await response.text();
  } catch (error) {
    console.error(error);

    return "<h1>404 - Page not found</h1>";
  }
};
