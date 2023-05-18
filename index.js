// Code your solutions in this file

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }

function writeCards(names, event) {
    const messages = [];
    for (let i =0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(n) {
  let counter = n;
  while (counter >= 0) {
    console.log(counter--);

  }
}

