let messages = [];
const writeCards = (names, eventName) => {
    names.forEach((name) => {
        messages.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`); 
    })
    return messages;
}



// for(let i = 0;i < names.length; i++){
//     messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    
// }

const countDown = () => {
    let count = 10;
    while(count > -1){
        console.log(count--)
    }
}