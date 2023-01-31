/* Create a class 'Tweet' that has a text body and a method 'printTweet' that
 prints the body of the tweet */

class Tweet {
    constructor(text) {
        this.text = text;
    }

    printTweet() {
        console.log(this.text);
    }
}

/* export the tweet class */
module.exports = Tweet;