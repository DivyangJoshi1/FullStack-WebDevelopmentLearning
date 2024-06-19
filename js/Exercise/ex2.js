/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

const word1_1="Crazy"
const word1_2="Amazing"
const word1_3="Fire"

const word2_1="Engine"
const word2_2="Foods"
const word2_3="Garments"

const word3_1="Bros"
const word3_2="Limited"
const word3_3="Hub"

function getRandomWord(word1, word2, word3) {
        const randomIndex = Math.floor(Math.random() * 3);
        if (randomIndex === 0) return word1;
        if (randomIndex === 1) return word2;
        return word3;
}

function randomnamegeneration(){
    const word1= getRandomWord(word1_1,word1_2,word1_3)
    const word2= getRandomWord(word2_1,word2_2,word2_3)
    const word3= getRandomWord(word3_1,word3_2,word3_3)

    return `${word1} ${word2} ${word3}`
}

console.log(randomnamegeneration())