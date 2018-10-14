function Player(c) {

    this.wallet = (c? c:1000);
    this.wagers = [];

    this.place_wager = function (t, p, b, c) {
        this.wagers.push([t, p, b, c]);
        this.wallet -= c;
        tables[t].place_wager(p, b, c);//don't like this. too dependent
    };

}
