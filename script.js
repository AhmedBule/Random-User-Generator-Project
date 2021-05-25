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
getRandomUser();
getRandomUser();


//(1) First function 
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

// (5) Fith function 
// Double Money function 
function doubleMoney() {
    data.data.map((user) => {
        return { ...user, money: user.money * 2 }
    })

    updateDOM();
}


// (2) Second function
// Add new object to data array. 
function addData(obj) {
    // The push method pushes something to the end of the array. 
    data.push(obj)

    updateDOM();
    // If nothing is passed in, then we will just padd the data 
}

// (3) Third function
// update DOM
// It will have a parameter called provideData 
function updateDOM(providedData = data) {
    // Clear Main DIV
    main.innerHTML = '<h2><strong>Person </strong>Wealth</h2>';

    providedData.forEach(item => {
        // It will create an HTML element
        const element = document.createElement('div')
        // The classList will give a list of classes
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`

        // To insert inside the DOM, we need to take our main element and use the appendChild method. 

        main.appendChild(element)

    });
}

//Format number as money

function formatMoney(number) {
    //formart money is going to take in a number 
    //https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67

}

// Event listeners. This is for the addUser button. If we click the addUser, it should generate a new user. 

// (4) Fourth Functionality
addUserBtn.addEventListener('click', getRandomUser);


doubleBtn.addEventListener('click', doubleMoney)
