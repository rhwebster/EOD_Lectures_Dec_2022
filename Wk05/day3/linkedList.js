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
        let sum = 0;
        let curr = this.head;

        if (!this.head) return sum;

        while(curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;
    }

    averageValue() {
        // if (!this.head) return 0;
        return !this.head ? 0 : this.sumOfNodes()/this.listLength();
    }

    findNthNode(n) {
        let curr = this.head;

        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }

        return curr;
    }

    findMid() {
        // solution1
    
        // if (!this.head) return null;

        // let slow = this.head;
        // let fast = this.head;

        // while (fast.next) {
        //     fast = fast.next;
        //     if (!fast.next) break;
        //     fast = fast.next;
        //     slow = slow.next;
        // }

        // return slow;

        //solution 2

        // let length = this.listLength();

        // if (length % 2 !== 0) {
        //     length -= 1;
        // } else {
        //     length -2;
        // }

        // let mid = this.findNthNode(length/2);

        // return mid;

        //solution 3
        let curr = this.head;
        let mid = Math.floor(this.listLength()/2);
        let index = 0;

        while (index < mid && curr) {
            curr = curr.next;
            index += 1;
        }

        if (index === mid && curr) {
            return curr;
        }

        return null;
    }

    reverse() {
        // start at head
        // go to node 2, update next to 1 instead of 3
        // got to 3, update next 2 to instead of 4
        // creat 3 variables

        let curr = this.head;
        let prev = null;
        let next = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
        return this;
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