// Get themes from CSS custom properties
function getAvailableThemes() {
  const themesProperty = getComputedStyle(document.documentElement).getPropertyValue("--available-themes").trim();

  return themesProperty
    .split(",")
    .map((theme) => theme.trim())
    .filter((theme) => theme.length > 0);
}

function getDefaultTheme() {
  return getComputedStyle(document.documentElement).getPropertyValue("--default-theme").trim();
}

export function getTheme() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return getDefaultTheme();
}

export function setTheme(theme) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  }
  document.documentElement.setAttribute("data-theme", theme);
}

export { getAvailableThemes, getDefaultTheme };
