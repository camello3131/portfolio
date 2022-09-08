import { darkMode } from "./js/darkMode.js"
import hamburguer from "./js/menu.js"


const d = document

d.addEventListener("DOMContentLoaded", e => {
    hamburguer(".panel-btn", ".panel", ".menu a")
})

darkMode(".btn-dark", "darkMode")