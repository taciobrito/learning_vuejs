new Vue({
	el: '#app',
	data: {
		playerSelected: 1,
		playerOne: {
			points: 0,
			history: []
		},
		playerTwo: {
			points: 0,
			history: []
		},
		cartSelected: ''
	},
	methods: {
		changePlayer() {
			this.playerSelected = this.playerSelected == 1 ? 2 : 1;
			this.cartSelected = '';
		},
		selectedCart() {
			this.cartSelected = Math.floor((Math.random() * 13)+1);
			
			if (this.playerSelected == 1) {
				this.playerOne.points += this.cartSelected;
				this.playerOne.history.push(this.cartSelected);
			}

			if (this.playerSelected == 2) {
				this.playerTwo.points += this.cartSelected;
				this.playerTwo.history.push(this.cartSelected);
			}

			if (this.playerOne.points >= 21 || this.playerTwo.points >= 21)
				this.finishGame();
		},
		finishGame() {
			var p1 = this.playerOne.points;
			var p2 = this.playerTwo.points;

			if (p1 <= 21 && p1 > p2) 
				alert('Player 1 Campeão!');
			else if (p2 <= 21 && p2 > p1) 
				alert('Player 2 Campeão!');
			else if (p1 > 21) 
				alert('Player 2 Campeão!');
			else if (p2 > 21) 
				alert('Player 1 Campeão!');
			else
				alert('Empate!');

			var vm = this;
			setTimeout(function(){
				vm.resetGame();
			}, 3000);
		},
		resetGame () {
			this.playerOne.points = 0;
			this.playerTwo.points = 0;
			this.playerOne.history = [];
			this.playerTwo.history = [];
			this.cartSelected = '';
			this.playerSelected = 1;
		}
	},
	computed: {
		numberHistoryPlayerOne () {
			return this.playerOne.history.length;
		},
		numberHistoryPlayerTwo () {
			return this.playerTwo.history.length;
		}
	}

});