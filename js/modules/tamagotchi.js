export default class Tamagotchi {
  constructor() {
    this.health = { value: 10, importance: 1 };
    this.hunger = { value: 10, importance: 3 };
    this.energy = { value: 10, importance: 2 };
    this.fun = { value: 10, importance: 4 };
    this.updateCounter = 0;
    console.log("Tamagotchi initialized");
  }

  displayParameter = (param) => {
    const displayElement = param.displayElement;
    displayElement.innerText = param.value;

    if (param.value > 9) {
      displayElement.classList.add("high_value");
    } else {
      displayElement.classList.remove("high_value");
    }
  };

  mountParameter = (param, elementSelector) => {
    param.displayElement = document.querySelector(elementSelector);
    this.displayParameter(param);
  };

  mount = ({ healthElement, hungerElement, energyElement, funElement }) => {
    this.mountParameter(this.health, healthElement);
    this.mountParameter(this.hunger, hungerElement);
    this.mountParameter(this.energy, energyElement);
    this.mountParameter(this.fun, funElement);
  };

  decrementParameter = (param) => {
    if (param.value > 0) {
      param.value--;
      this.displayParameter(param);
    }
  };

  update = () => {
    this.updateCounter++;
    this.decrementParameter(this.hunger);
    this.decrementParameter(this.fun);

    if (this.hunger.value <= 0 && this.energy.value <= 0) {
      this.decrementParameter(this.health);
    }

    if (this.updateCounter % 2 === 0) {
      this.decrementParameter(this.energy);
      if (this.fun.value <= 0) {
        this.decrementParameter(this.energy);
      }
    }
  };
}
