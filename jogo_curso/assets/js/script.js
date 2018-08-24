new Vue({
	el: '#app',
	data: {
		playerSelected: 1,
		playerOne: {
			points: 0
		},
		playerTwo: {
			points: 0
		},
		cartSelected: ''
	},
	methods: {
		changePlayer() {
			this.playerSelected = this.playerSelected == 1 ? 2 : 1;
		},
		selectedCart() {
			this.cartSelected = Math.floor((Math.random() * 13)+1);
			
			if (this.playerSelected == 1) {
				this.playerOne.points += this.cartSelected;
			}

			if (this.playerSelected == 2) {
				this.playerTwo.points += this.cartSelected;
			}
		}
	}
});