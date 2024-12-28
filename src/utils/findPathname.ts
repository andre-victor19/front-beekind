export const findPathname = (path: string) => {
  switch (path.toLowerCase()) {
    case "/":
      return "Início";

    default:
      return "";
  }
};

export const findPathnameIcon = (path: string) => {
  switch (path.toLowerCase()) {
    case "/":
      return "fi fi-rr-home";

    default:
      return "";
  }
};
