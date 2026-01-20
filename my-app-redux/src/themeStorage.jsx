// themeStorage.ts
export function getInitialDarkMode() {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "true";
  }