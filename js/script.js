console.log("Hello there!");

let buttonElement = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let theme = document.querySelector(".js-theme");

let howMuch = document.querySelector(".js-taskHowMuch").innerText;
let ruler = document.querySelector(".js-taskRuler");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("body--dark")
    theme.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});

switch (howMuch) {
    case "10":
        ruler.innerText = "Mieszko I";
        break;
    case "20":
        ruler.innerText = "Bolesław I Chrobry";
        break;
    case "50":
        ruler.innerText = "Kazimierz III Wielki";
        break;
    case "100":
        ruler.innerText = "Władysław II Jagiełło";
        break;
    case "200":
        ruler.innerText = "Zygmunt I Stary";
        break;
    case "500":
        ruler.innerText = "Jan III Sobieski";
        break;
    default:
        ruler.innerText = "Taki banknot nie istnieje";
};