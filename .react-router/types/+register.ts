import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/sitemap.xml": {};
  "/style-guide": {};
  "/untitled": {};
  "/robots.txt": {};
  "/_image/*": {
    "*": string;
  };
};
