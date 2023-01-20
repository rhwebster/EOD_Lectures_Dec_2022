class PartyPlanner {
    constructor(guestList) {
        this.guestList = [];
    }

    addToGuestList(name) {
        this.guestList.push(name);
    }

    throwParty() {
        let last = this.guestList.pop();
        if (!this.guestList.length) {
            return `Gotta add people to the guest list.`
        } else if (this.guestList.length === 1) {
            return `Welcome to the party ${last}`;
        } else {
            return `Welcome to the party ` + this.guestList.join(', ') + `, and ${last}.`
        }
    }
}

const party = new PartyPlanner;
party.addToGuestList("Jax");
party.addToGuestList("Domenik");
party.addToGuestList("Ryan");
party.addToGuestList("Jimmy");
party.addToGuestList("Kim");
console.log(party.throwParty());

module.exports = PartyPlanner;