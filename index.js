class SwitchCard {
    activeID = 0;
    constructor(firstCardID, secondCardID, switchInputID) {
        this.cardsID = [firstCardID, secondCardID];
        this.$firstCard = document.getElementById(firstCardID);
        this.$secondCard = document.getElementById(secondCardID);
        this.$switchInput = document.getElementById(switchInputID);
        this.$switchInput.addEventListener('change', (e) => this.handler(e.target.checked))
        this.$secondCard.style.top = this.$firstCard.style.top
    }

    handler = (isChecked) => {
        if (isChecked) {
            this.$firstCard.style.opacity = 0
            this.$firstCard.style.zIndex = 0
            this.$secondCard.style.opacity = 1
            this.$secondCard.style.zIndex = 1
        } else {
            this.$firstCard.style.opacity = 1
            this.$firstCard.style.zIndex = 1
            this.$secondCard.style.opacity = 0
            this.$secondCard.style.zIndex = 0
        }
    }

}

const mySwitchCard = new SwitchCard('first-card', 'second-card', 'card-switch');
console.log('Script loaded...');