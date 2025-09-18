export const navigateTo = (pageName) => {
  history.pushState(null, null, pageName);
};
