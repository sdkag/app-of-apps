const MINISITES = ["app", "blog", "shop", "note", "game", "graveyard"];

const leftpad = document.getElementById("leftpad");
const rightpad = document.getElementById("rightpad");

const navigation = document.getElementById("navigation");

const state = {
  selected: null,
  all: ["app", "blog", "shop", "note", "game", "graveyard"],
  index: 0,
};
state.all.slice(0, state.all.length - 1).forEach((app) => {
  const appEl = document.createElement("div");
  appEl.innerHTML = app;
  navigation.appendChild(appEl);
});

const selectedApp = document.getElementById("selected-app");
leftpad.addEventListener("click", () => {
  state.index = Math.max(state.index - 1, 0);
  state.selected = state.all[state.index];
  console.log(state.selected);
});
rightpad.addEventListener("click", () => {
  state.index = Math.min(state.index + 1, 5);
  state.selected = state.all[state.index];
  console.log(state.selected);
});
