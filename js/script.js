{
    const welcome = () => {
        console.log("Hello there!");
    };
    
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const theme = document.querySelector(".js-theme");

        body.classList.toggle("body--dark")
        theme.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };
    
    const whichRuler = () => {
        const howMuch = document.querySelector(".js-taskHowMuch").innerText;
        const ruler = document.querySelector(".js-taskRuler");

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
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");

        buttonElement.addEventListener("click", toggleBackground);

        welcome();
        whichRuler();
    }

    init();
}