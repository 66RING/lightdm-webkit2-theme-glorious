class GreeterScreen {
  constructor() {
    this._hideGreeterScreen = this._hideGreeterScreen.bind(this);
    this._showGreeterScreen = this._showGreeterScreen.bind(this);
    this._greeterScreen = document.querySelector(".screen#greeterScreen");
    this._greeterScreenButton = document.querySelector("#greeterScreenButton");
    this._passwordInputEL = document.querySelector("#passwordInput");

    this._passwordInputEL.focus();
    this._greeterScreenVisible = false;

    this._greeterScreenButtonOnClickEvent();
  }

  getGreeterScreenVisibility() {
    return this._greeterScreenVisible;
  }

  // Hide greeter screen
  _hideGreeterScreen() {
    this._greeterScreen.classList.remove("showGreeterScreen");
    this._passwordInputEL.focus();
    this._greeterScreenVisible = false;
  }

  // Shiw greeter screen
  _showGreeterScreen() {
    this._greeterScreen.classList.add("showGreeterScreen");
    this._passwordInputEL.blur();
    this._greeterScreenVisible = true;
  }

  // Toggle greeter screen
  toggleGreeterScreen() {
    if (!this._greeterScreenVisible) {
      this._showGreeterScreen();
    } else {
      this._hideGreeterScreen();
    }
  }

  // Greeter screen button on click event
  _greeterScreenButtonOnClickEvent() {
    this._greeterScreenButton.addEventListener("click", () => {
      this._passwordInputEL.value = "";
      this._showGreeterScreen();
    });
  }
}
