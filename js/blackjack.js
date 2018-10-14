function BlackJackTable(deck_size) {

    this.deck = new Deck(deck_size);
    
    this.dealer = {
        hand: [],
    };

    this.positions = [
        {hand: [[]], bet: [0,0,0]},
        {hand: [[]], bet: [0,0,0]},
        {hand: [[]], bet: [0,0,0]},
        {hand: [[]], bet: [0,0,0]},
        {hand: [[]], bet: [0,0,0]},
        {hand: [[]], bet: [0,0,0]},
        {hand: [[]], bet: [0,0,0]},
    ];

    this.hit = function(p, h) {this.positions[p].hand[h].push(new Card(this.deck.deal()));};

    this.dealer_hit = function() {this.dealer.hand.push(new Card(this.deck.deal()));};

    this.stand = function() {return;};

    this.dealer_stand = function() {
        //todo: call function to evaluate winners and payouts
        return;};

    this.split = function(p, h) {
        this.positions[p].hand.push(this.positions[p].hand[h].pop());
    };

    this.double_down = function(p, h, b) {
        //todo: subtract credits from player
        this.positions[p].bet[b] *= 2;
        this.hit(p, h);
        this.stand();
    };

    this.surrender = function(p, h) {
        //todo: junk the hand, return half of each placed wager
        this.positions[p].hand[h] = [];
    };

    this.place_wager = function(p, b, c) {
        this.positions[p].bet[b] = c;
    };

} 
