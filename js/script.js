let tables = [];
tables.push(new BlackJackTable(416));// make a blackjack table
tables[0].deck.shuffle();// shuffle the deck

let players = [];// make some players
players.push(new Player(1000));

//Simulating wager placing
players[0].place_wager(0, 2, 0, 10);//table[0].positions[2].bet[0] += 10;

//deal two cards to each position and the dealer
for (let c = 0; c < 2; c++){
    
    for (let x = 0; x < tables[0].positions.length; x++) {
        //if a position has a wager, deal that position a card
        if (tables[0].positions[x].bet[0] > 0) tables[0].hit(x, 0);//positions[x].hand[0].push(new Card(table.deck.deal()));
    }

    tables[0].dealer_hit();

}

// display the cards as appropriate, and clockwise proceed with play


// if player gets blackjack, pays 2.5x bet, otherwise, if beat the dealer hand, pay 2x bet, if tied the dealer pay 1x bet