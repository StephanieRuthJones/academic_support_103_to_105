document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has been fully loaded");
  console.log(menuItems);
  const menuList = document.querySelector("#menu-list");
  menuList.style.listStyle = "none";
  const menuForm = document.querySelector("#menu-form");
  //display all menu item titles and descriptions inside the menu-list
  const addMenuItemToDisplay = (item) => {
    const { title, description } = item;
    const listItemEl = document.createElement("li");
    listItemEl.className = "menu-item";
    const titleEl = document.createElement("h2");
    titleEl.innerText = title;
    const descriptionEl = document.createElement("p");
    descriptionEl.innerText = description;
    menuList.appendChild(listItemEl);
    listItemEl.append(titleEl, descriptionEl);
  };
  menuItems.map(addMenuItemToDisplay);
  menuForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const menuFormData = new FormData(menuForm);
    const title = menuFormData.get("item-title");
    const description = menuFormData.get("item-description");
    const newMenuItem = { title, description };
    addMenuItemToDisplay(newMenuItem);
  });
});
