const content = document.getElementById("content");
const menu = document.getElementById("Menu");
const home = document.getElementById("Home");
const about = document.getElementById("About");

import './styles.css';
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

home.addEventListener("click", loadHome);
menu.addEventListener("click", loadMenu);
about.addEventListener("click", loadAbout);

loadHome();