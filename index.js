//WebComponent pour afficher un texte animé

class MyLogo extends HTMLElement {
    html = `
    <div>
        <label for="colorSelector">Couleur</label>
        <input id='colorSelector' type='color'/>
    </div>
    <div>
        <label for="sizeSelector">Taille</label>
        <input id='sizeSelector' type='number'/>
    </div>
        <label for="rotateSelector">Rotation</label>
        <input id='rotateSelector' type='number'/>
    </div>
    <div>
        <label for="changeTextInput">Texte</label>
        <input id="changeTextInput" type="text">
        <button id="changeTextButton">Changer Texte</button>
    </div>
    <h1 id='animatedText'>
    </h1>`
    
    style = `@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy");
    /* BODY */
    body {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: skyblue;
      background-image: -webkit-linear-gradient(90deg, skyblue 0%, steelblue 100%);
      background-attachment: fixed;
      background-size: 100% 100%;
      overflow: hidden;
      font-family: "Luckiest Guy", cursive;
      -webkit-font-smoothing: antialiased;
    }
    
    ::selection {
      background: transparent;
    }
    /* CLOUDS */
    body:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 0;
      height: 0;
      margin: auto;
      border-radius: 100%;
      background: transparent;
      display: block;
      box-shadow: 0 0 150px 100px rgba(255, 255, 255, 0.6),
        200px 0 200px 150px rgba(255, 255, 255, 0.6),
        -250px 0 300px 150px rgba(255, 255, 255, 0.6),
        550px 0 300px 200px rgba(255, 255, 255, 0.6),
        -550px 0 300px 200px rgba(255, 255, 255, 0.6);
    }
    /* JUMP */
    h1 {
      text-align: center;
    }
    
    h1 span {
      position: relative;
      top: 20px;
      display: inline-block;
      -webkit-animation: bounce 0.3s ease infinite alternate;
      font-size: 80px;
      color: #000;
      text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
        0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
        0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
    }
    
    h1 span:nth-child(2) {
      -webkit-animation-delay: 0.1s;
    }
    
    h1 span:nth-child(3) {
      -webkit-animation-delay: 0.2s;
    }
    
    h1 span:nth-child(4) {
      -webkit-animation-delay: 0.3s;
    }
    
    h1 span:nth-child(5) {
      -webkit-animation-delay: 0.4s;
    }
    
    h1 span:nth-child(6) {
      -webkit-animation-delay: 0.5s;
    }
    
    h1 span:nth-child(7) {
      -webkit-animation-delay: 0.6s;
    }
    
    h1 span:nth-child(8) {
      -webkit-animation-delay: 0.2s;
    }
    
    h1 span:nth-child(9) {
      -webkit-animation-delay: 0.3s;
    }
    
    h1 span:nth-child(10) {
      -webkit-animation-delay: 0.4s;
    }
    
    h1 span:nth-child(11) {
      -webkit-animation-delay: 0.5s;
    }
    
    h1 span:nth-child(12) {
      -webkit-animation-delay: 0.6s;
    }
    
    h1 span:nth-child(13) {
      -webkit-animation-delay: 0.7s;
    }
    
    h1 span:nth-child(14) {
      -webkit-animation-delay: 0.8s;
    }
    
    /* ANIMATION */
    @-webkit-keyframes bounce {
      100% {
        top: -20px;
        text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
          0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
          0 50px 25px rgba(0, 0, 0, 0.2);
      }
    }`

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    
    //Gestion des différents évènements
    connectedCallback() {
        this.shadowRoot.innerHTML = `<style>${this.style}</style>` + this.html;
        this.setText(this.getAttribute("text"));
        this.setColor(this.getAttribute("color"));
        this.shadowRoot.querySelector("#sizeSelector").value = 80;
        this.shadowRoot.querySelector("#rotateSelector").value = 0;

        let changeTextInput = this.shadowRoot.querySelector("#changeTextInput");
        let changeTextButton = this.shadowRoot.querySelector("#changeTextButton");
        changeTextButton.addEventListener("click", () => {
            this.setText(changeTextInput.value);
        })

        this.shadowRoot.querySelector("#colorSelector").addEventListener("input", (event) => {
            let letters = this.shadowRoot.querySelectorAll(".animatedLetter");
            letters.forEach(letter => {
                letter.style.color = event.target.value;
            })
        })

        this.shadowRoot.querySelector("#sizeSelector").addEventListener("input", (event) => {
            console.log(event.target.value);
            this.setSize(event.target.value);
        })

        this.shadowRoot.querySelector("#rotateSelector").addEventListener("input", (event) => {
            console.log(event.target.value);
            this.setRotation(event.target.value);
        })
    }

    //Changer la taille du texte
    setSize(size){
      let letters = this.shadowRoot.querySelectorAll(".animatedLetter");
      letters.forEach(letter => {
          letter.style.fontSize = size;
      });
    }

    //Modifier la rotation du texte
    setRotation(rotation){
      let letters = this.shadowRoot.querySelectorAll(".animatedLetter");
      letters.forEach(letter => {
          letter.style.transform = "rotate(" + rotation + "deg)"
      });
    }

    //Changer le texte en gardant les paramètres de taille, rotation et couleur
    setText(newText){
        // this.myLogo.textContent = newText;
        let animatedText = this.shadowRoot.querySelector("#animatedText");
        animatedText.innerHTML = "";
        newText.split("").forEach(letter => {
            let span = document.createElement("span");
            let textNode = document.createTextNode(letter);
            span.appendChild(textNode);
            span.classList.add("animatedLetter")
            animatedText.appendChild(span);
        });

        this.setSize(this.shadowRoot.querySelector("#sizeSelector").value);
        this.setRotation(this.shadowRoot.querySelector("#rotateSelector").value);
        this.setColor(this.shadowRoot.querySelector("#colorSelector").value);
    }

    //Changer la couleur du texte
    setColor(color){
      let letters = this.shadowRoot.querySelectorAll(".animatedLetter");
      letters.forEach(letter => {
          letter.style.color = color;
      })
    }
  }
  
  customElements.define("my-logo", MyLogo);
  