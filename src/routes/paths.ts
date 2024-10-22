import AppHome from "../page/AppHome";

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";

export const PATH_AUTH = {
  root: path(ROOTS_AUTH, ""),
  login: path(ROOTS_AUTH, "login"),
};

export const PATH_APP ={
  AppHome: "/auth",
  Categories: "/auth/category"
}

export const PATH_PAGE = {
  page404: "/404",
};
