//WebComponent pour afficher une flamme

class Flame extends HTMLElement{
    html = `<div class="center">
                <div id="flame"></div>
            </div>
            <div class="center">
                <button id="flameButton">Eteindre la flamme</button>
            </div>`

    style = `
    .center {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

    #flame{
        width:100px;
        height:100px;
        background:linear-gradient(-45deg, red, orange);
        border-radius: 50px 50px 0px 50px;
        transform:rotate(-135deg);
        animation:.1s flame infinite;
        filter:blur(5px);
        position:relative;
        box-shadow:70px 20px 90px #700;
        border: 5px solid black;
        border-left-width:5px;
        border-top-width:5px;

        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        
        &:after,
        &:before{
            content:'';
            width:100px;
            height:100px;
            display:block;
            position:absolute;
            background:linear-gradient(-45deg, red, orange);
            animation:.2s flame infinite;
            transform:scale(.8) rotate(20deg);
            border-radius: 100px 100px 0px 100px;
            top:20px;
        }
        &:before{
            top:0;
            animation-duration:.09s;
            transform:scale(.9) rotate(-15deg) translate(10px, 0px);
        }
    }
    
    @keyframes flame{
      0% {height:100px; width:100px;}
      50% {height:85px; width:85px;}
      100% {height:100px; width:100px;}
    }`

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    //Afficher ou cacher la flamme
    setVisibility(){
        let flameDIV = this.shadowRoot.querySelector("#flame");
        let flameButton = this.shadowRoot.querySelector("#flameButton");

        if(flameDIV.style.visibility == "visible"){
            flameDIV.style.visibility = "hidden";
            flameButton.innerHTML = "Allumer la flamme";
        }
        else{
            flameDIV.style.visibility = "visible";
            flameButton.innerHTML = "Eteindre la flamme";
        }
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `<style>${this.style}</style>` + this.html;

        let flameButton = this.shadowRoot.querySelector("#flameButton");
        flameButton.addEventListener("click", () => {
            this.setVisibility();
        })
    }
}

customElements.define("my-flame", Flame);