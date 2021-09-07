// Code your solutions in this file
function writeCards(recipients, event) {
    let messages = [];
    for(let i = 0; i < recipients.length; i++) {
        messages.push(`Thank you, ${recipients[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}

function countDown(posNum) {
    while(posNum >= 0) {
        console.log(posNum);
        posNum--;

    }
    
}