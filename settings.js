// HTML elemek lekérése

const settingsBtn = document.getElementById("settings-btn");

const settingsPanel = document.getElementById("settings-panel");

const themeColorSelect = document.getElementById("theme-color");

const defaultCurrencySelect = document.getElementById("default-currency");



// Beállítások megjelenítése/elrejtése

settingsBtn.addEventListener("click", () => {

  settingsPanel.classList.toggle("hidden");

});



// Beállítások mentése a böngésző tárhelyébe

function saveSettings() {

  const theme = themeColorSelect.value;

  const defaultCurrency = defaultCurrencySelect.value;



  localStorage.setItem("theme", theme);

  localStorage.setItem("defaultCurrency", defaultCurrency);



  alert("Beállítások mentve!");

  applyTheme(theme);

}



// Alkalmazza a kiválasztott színtémát

function applyTheme(theme) {

  if (theme === "dark") {

    document.body.style.backgroundColor = "#333";

    document.body.style.color = "#fff";

  } else {

    document.body.style.backgroundColor = "#fff";

    document.body.style.color = "#000";

  }

}



// Beállítások betöltése a böngészőből

window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme") || "light";

  const savedCurrency = localStorage.getItem("defaultCurrency") || "USD";



  themeColorSelect.value = savedTheme;

  defaultCurrencySelect.value = savedCurrency;



  applyTheme(savedTheme);

});