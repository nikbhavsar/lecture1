class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }
    flights() {
        console.log("He Flights");
    }
}
function main() {
    var tom = new Player();
    tom.flights();
}