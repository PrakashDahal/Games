var app = new Vue({
    el: '#app',
    data: {
        currentPlayer: 'p0',
        counts: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        gamePlay: {
            p0: [],
            p1: []
        },
        score: {},

        players: {
            firstPlayer: '',
            secondPlayer: ''
        },
        isGameRunning: false,
        isGameOver: false
    },
    methods: {
        startGame: function () {
            if (this.score[this.players.firstPlayer] !== '' && this.score[this.players.secondPlayer] != '') {
                this.isGameRunning = true;
                this.score[this.players.firstPlayer] = 0;
                this.score[this.players.secondPlayer] = 0;
            }
        },

        selectGrid: function (player, gridNumber) {
            this.gamePlay[player].push(gridNumber);
            this.currentPlayer = this.changeCurrentPlayer();
            this.checkWinner(player);

        },

        replay: function () {
            this.isGameRunning = true;
            this.isGameOver = false;
            this.gamePlay.p0 = [];
            this.gamePlay.p1 = [];
        },

        exitGame: function () {
            this.isGameRunning = false;
            this.isGameOver = false;
            this.gamePlay.p0 = [];
            this.gamePlay.p1 = [];
            this.score = {};
            this.currentPlayer = 'p0';
            this.players.firstPlayer = '';
            this.players.secondPlayer = '';
        },

        checkWinner(player) {
            this.checkPattern(player);
            if ((this.gamePlay.p0.length + this.gamePlay.p1.length) == 9) {
                this.isGameOver = true;
            }
        },

        changeCurrentPlayer() {
            if (this.currentPlayer == 'p0') {
                return 'p1'
            }
            return 'p0'
        },

        checkPattern(player) {
            // Checking row
            if (this.gamePlay[player].includes(0) && this.gamePlay[player].includes(1) && this.gamePlay[player].includes(2)) {
                this.setScore(player);
            } else if (this.gamePlay[player].includes(3) && this.gamePlay[player].includes(4) && this.gamePlay[player].includes(5)) {
                this.setScore(player);
            } else if (this.gamePlay[player].includes(6) && this.gamePlay[player].includes(7) && this.gamePlay[player].includes(8)) {
                this.setScore(player);
            }
            // check column
            else if (this.gamePlay[player].includes(0) && this.gamePlay[player].includes(3) && this.gamePlay[player].includes(6)) {
                this.setScore(player);
            } else if (this.gamePlay[player].includes(1) && this.gamePlay[player].includes(4) && this.gamePlay[player].includes(7)) {
                this.setScore(player);
            } else if (this.gamePlay[player].includes(2) && this.gamePlay[player].includes(5) && this.gamePlay[player].includes(8)) {
                this.setScore(player);
            }
            // checking diagonal
            else if (this.gamePlay[player].includes(0) && this.gamePlay[player].includes(4) && this.gamePlay[player].includes(8)) {
                this.setScore(player);
            }
            else if (this.gamePlay[player].includes(2) && this.gamePlay[player].includes(4) && this.gamePlay[player].includes(6)) {
                this.setScore(player);
            }

        },

        setScore(player) {
            isGameRunning = false;
            if (player == 'p0') {
                this.score[this.players.firstPlayer] += 10;
            } else {
                this.score[this.players.secondPlayer] += 10;
            }
            this.isGameOver = true;
        }
    }
})