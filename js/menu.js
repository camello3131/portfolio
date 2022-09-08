
export default function hamburguer(btn, panel, menuLink) {
    const d = document;
    
    d.addEventListener ("click", e => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            d.querySelector(panel).classList.toggle("is-active")
            document.querySelector(btn).classList.toggle("is-active")
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(btn).classList.toggle("is-active")
        }
    })
}