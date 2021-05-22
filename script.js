const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const caculateWealthBtn = document.getElementById('calculate-wealth');

// The data is where we are going to put all of the people. It is an  array of objects. 
// It has a first and last name. Then, it has a money value

let data = [];

// fetch random user and add money. 

async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json()
    // set a new variable to the data, so we can extract the information from the api 

    const user = data.results[0];

    // The newUser is an object. Don't forget the equal sign. 
    const newUser = {

    }
}

getRandomUser();
getRandomUser();
getRandomUser();