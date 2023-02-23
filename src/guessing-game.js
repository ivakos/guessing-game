class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minValue = min;
			this.maxValue = max;
    }

    guess() {
      return this.guessValue = Math.ceil((this.maxValue + this.minValue) / 2);
    }

    lower() {
      return this.maxValue = this.guessValue;
    }

    greater() {
      return this.minValue = this.guessValue;
    }
}

module.exports = GuessingGame;
