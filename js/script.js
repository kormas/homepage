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

        let text;

        switch (howMuch) {
            case "10":
                text = "Mieszko I";
                break;
            case "20":
                text = "Bolesław I Chrobry";
                break;
            case "50":
                text = "Kazimierz III Wielki";
                break;
            case "100":
                text = "Władysław II Jagiełło";
                break;
            case "200":
                text = "Zygmunt I Stary";
                break;
            case "500":
                text = "Jan III Sobieski";
                break;
            default:
                text = "Taki banknot nie istnieje";
        };
        ruler.innerText = text;
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");

        buttonElement.addEventListener("click", toggleBackground);

        welcome();
        whichRuler();
    }

    init();
}