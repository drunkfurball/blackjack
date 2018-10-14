function Card(i) {
    
    this.rank = i % 13;//assigns the face value by dividing by 13 and returnung the remainder, 0-12
    this.suit = i % 4;//assigns the suit by dividing by 4 and returning the remainder, 0-3

}

function Deck(size) {

    this.size = size;
    this.dealt = new Array(this.size);

    this.shuffle = function() {
        for (i=0;i<this.size;i++) {
            this.dealt[i] = false;
        }
    };

    this.deal = function() {
        let x = Math.floor(Math.random() * this.size);
        while (this.dealt[x]) x = Math.floor(Math.random() * this.deck.size);
        this.dealt[x] = true;
        return x;
    };

}

function Dice() {

    this.value = 0;

    this.roll = function() {
        this.value = Math.floor(Math.random() * 6);
    };
}