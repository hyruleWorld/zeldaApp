//Namespace for zeldaApp
const zeldaApp = {};

//URL
zeldaApp.url = 'https://botw-compendium.herokuapp.com/api/v2';

//create a method to get data from URL
zeldaApp.getInfo = () => {
    //AJAX request

    const appUrl = new URL(zeldaApp.url);
    //fetch data
    fetch(appUrl)
        .then((apiPromise) => {
            return apiPromise.json()
        })
        .then((data) => {
            zeldaApp.displayCard(data)
        }).catch((error) => {
            if (error.message === 'Not Found') {
                alert('No creature found')
            } else ('Something is broken')
        });

};


//Change style visibility of question and answer sections-display:none


//Click a button “Start Game” to display question section

const startGame = document.querySelector('.startGame');
const questionSection = document.querySelector('.question')
startGame.addEventListener('click', (e) => {
    e.preventDefault();
    questionSection.style.display = 'block'
})

// event listener for the submitted value that has been selected in drop down menu (option)


const formElement = document.querySelector('form');
const selectElement = document.getElementById('creatureQuestion');
const showMe = document.querySelector('.showMe');
const answerSection = document.querySelector('.answer')


zeldaApp.getOption = () => {
    formElement.addEventListener('submit', (e) => {
        // add in prevent default of default event on clicking "Show me" button
        e.preventDefault();

        // create variable for selected value = const selectValue
        const selectValue = selectElement.value;
       

        if (selectValue == 'title') {
            alert('Please select your preference!')
        }
        // // When users finish the question, click a button “Show me” then display answer section
        else if (selectValue == 'creatures' || selectValue == 'equipment' || selectValue == 'monsters' || selectValue == 'treasure') {
            answerSection.style.display = 'block'
        }
        zeldaApp.displayCard.helpGetSelectValue.userOption(selectValue)
    })
}


zeldaApp.displayCard = (card) => {
    zeldaApp.displayCard.helpGetSelectValue = {
        userOption: function (selectValue) {

            const imageTag = document.querySelector('.image')
            const nameTag = document.querySelector('.name');
            const locationTag = document.querySelector('.location');
            const descriptionTag = document.querySelector('.description')

            // match selected value with object data's key name(food & non_food &combination of food & non_food)

            // if user selects "food"
            if (selectValue == 'creatures') {
                //combine food and non_food in creatures category into one array
                card.data.creature = card.data.creatures.food.concat(card.data.creatures.non_food);

                // then random generate from food or non-food array (36 index + 47 index) = combined.length
                const randomIndex = Math.floor(Math.random() * card.data.creature.length);

                // Store randomly generator creature in a variable 
                const creatureHero = card.data.creature[randomIndex];


                //Display card
                nameTag.innerHTML = creatureHero.name;
                locationTag.innerHTML = creatureHero.common_locations;
                descriptionTag.innerHTML = creatureHero.description;
                imageTag.src = creatureHero.image;
                imageTag.alt = creatureHero.name

            }

            // if user selects "non_food"
            else if (selectValue == 'equipment') {
                //  then random generate from non_food array (47 items) = non_food.length
                const randomIndex = Math.floor(Math.random() * card.data.equipment.length);

                // Store randomly generator creature in a variable 
                const creatureHero = card.data.equipment[randomIndex];

                //Display card
                nameTag.innerHTML = creatureHero.name;
                locationTag.innerHTML = creatureHero.common_locations;
                descriptionTag.innerHTML = creatureHero.description;
                imageTag.src = creatureHero.image;
                imageTag.alt = creatureHero.name
            }

            // if user selects "whatever"
            else if (selectValue == 'monsters') {
                //  then random generate from non_food array (47 items) = non_food.length
                const randomIndex = Math.floor(Math.random() * card.data.monsters.length);

                // Store randomly generator creature in a variable 
                const creatureHero = card.data.monsters[randomIndex];

                //Display card
                nameTag.innerHTML = creatureHero.name;
                locationTag.innerHTML = creatureHero.common_locations;
                descriptionTag.innerHTML = creatureHero.description;
                imageTag.src = creatureHero.image;
                imageTag.alt = creatureHero.name
            }

            else if (selectValue == 'treasure') {
                //  then random generate from non_food array (47 items) = non_food.length
                const randomIndex = Math.floor(Math.random() * card.data.treasure.length);

                // Store randomly generator creature in a variable 
                const creatureHero = card.data.treasure[randomIndex];

                //Display card
                nameTag.innerHTML = creatureHero.name;
                locationTag.innerHTML = creatureHero.common_locations;
                descriptionTag.innerHTML = creatureHero.description;
                imageTag.src = creatureHero.image;
                imageTag.alt = creatureHero.name
            }
        }
    }
}


//init method
zeldaApp.init = () => {
    zeldaApp.getInfo();
    zeldaApp.getOption();
}

//call init
zeldaApp.init()









