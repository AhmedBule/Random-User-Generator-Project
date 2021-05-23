const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const caculateWealthBtn = document.getElementById('calculate-wealth');

// The data is where we are going to put all of the people. It is an  array of objects. 
// It has a first and last name. Then, it has a money value

let data = [];

//fetch random user and add money. 

getRandomUser();


async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json()
    // set a new variable to the data, so we can extract the information from the api 

    const user = data.results[0];

    // The newUser is an object. Don't forget the equal sign. 
    const newUser = {
        // We need to use template literals here because we can put variables in. 
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }
    console.log(newUser)
    addData(newUser)
}

// Add new object to data array. 

function addData(obj) {
    // The push method pushes something to the end of the array. 
    data.push(obj)

    updateDOM();
    // If nothing is passed in, then we will just padd the data 
}

// update DOM
// It will have a parameter called provideData 
function updateDOM(providedData = data) {
    // Clear Main DIV
    main.innerHTML = '<h2><strong>Person </strong>Wealth</h2>';
    
    providedData.forEach()
}


