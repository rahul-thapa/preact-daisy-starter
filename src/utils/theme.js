import config from "~/config";

export function getTheme() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return config.themes[0]; // first theme in the array is the default theme
}

export function setTheme(theme) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  }
  document.documentElement.setAttribute("data-theme", theme);
}
