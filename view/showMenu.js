import {menuModelo} from "../model/menuModel";

export function showMenu() {
    menuModelo.forEach( e => {
        const createItem = document.createElement('a')
        createItem.href = e.links;
        createItem.innerHTML = e.title;
        document.getElementsById('navItem').appendChild(createItem);
    })
}
