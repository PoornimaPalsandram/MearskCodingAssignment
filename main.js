var cardValues = [1,2,3,4,5,6,7,8,9];

function updateCards(){
    for(let i=0; i<9; i++){
        let cardItem = document.getElementById("card"+i);
        cardItem.innerText = cardValues[i];
        cardItem.className = `card cardContent${cardValues[i]}`;
    }
}
function sortCards(){
    cardValues.sort();
    updateCards();

}

function shuffleCards(){
    const newArr = cardValues.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    cardValues = newArr;
    updateCards();
}