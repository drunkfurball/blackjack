function CrapsTable() {

    this.dice = [];
    this.positions = [
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false},
        {bet: [[]], button: false}
    ];
    this.puck = {state:false, value:0};

    for (let i = 0; i < 2; i++) this.dice.push(new Dice());

    this.shoot = function () {
        for (let i = 0; i < this.dice.length; i++) this.dice[i].roll();
    };

    this.place_wager = function(p, b, c) {
        this.positions[p].button = true;
        this.positions[p].bet[b] = c;
    };

}