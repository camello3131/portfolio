const d = document;
const ls = localStorage;

export function darkMode (btn, classDark) {
    const $btn = d.querySelector(btn)
    const $selectores = d.querySelectorAll("[data-dark]")

    let moon = "🌙";
    let sun = "☀️";

    const lightMode = () =>{
        $selectores.forEach((el) => el.classList.remove(classDark))
        $btn.textContent = moon
        ls.setItem("theme", "light")
    }

    const darkkMode = () =>{
        $selectores.forEach((el) => el.classList.add(classDark))
        $btn.textContent = sun
        ls.setItem("theme", "dark")
    }

    d.addEventListener("click", (e)=> {
        if(e.target.matches(btn)){
            if($btn.textContent === moon) {
                darkkMode()
            }
            else {
                lightMode ()
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");

        if(ls.getItem("theme") === "light") lightMode();
        if(ls.getItem("theme") === "dark") darkkMode();
    })
}