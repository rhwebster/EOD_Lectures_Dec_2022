class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this
    }

    listLength() {
        if (!this.head) return this.length;

        let curr = this.head;
        this.length++;
        while (curr.next) {
            this.length++;
            curr = curr.next;
        }

        return this.length;
    }

    sumOfNodes() {
        
    }

    averageValue() {
    
    }

    findNthNode(n) {
        let curr = this.head;

        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }

        return curr;
    }

    findMid() {
        
    }

    reverse() {
        
    }

    print() {
        if (!this.head) return;

        let curr = this.head;

        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}