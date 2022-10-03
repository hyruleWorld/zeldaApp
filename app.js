//Namespace for zeldaApp
const zeldaApp = {};

//URL
zeldaApp.url = 'https://botw-compendium.herokuapp.com/api/v2/category/creatures';

//creat a method to get data from URL
zeldaApp.getInfo = () => {
    //AJAX request

    const appUrl = new URL(zeldaApp.url);
    //  console.log(appUrl)

    //fetch data
    fetch(appUrl)
        .then((apiPromise) => {
            return apiPromise.json()
        })
        .then((data) => {
            console.log(data)
            zeldaApp.displayCard(data)
        })
}


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
        // console.log('abc')

        // create variable for selected value = const selectValue
        const selectValue = selectElement.value;


        // selectElement.addEventListener('change', () => {

        //     const selectValue = selectElement.value;

        // });
        console.log(selectValue);

        if (selectValue == 'title') {
            alert('Please select your preference!')
        }
        // // When users finish the question, click a button “Show me” then display answer section
        else if (selectValue == 'food' || selectValue == 'nonFood' || selectValue == 'whatever') {
            answerSection.style.display = 'block'
        }


        zeldaApp.displayCard.helpGetSelectValue.userOption(selectValue)

    })
}


zeldaApp.displayCard = (card) => {
    console.log(card.data);



    zeldaApp.displayCard.helpGetSelectValue = {
        userOption: function (selectValue) {
            console.log(selectValue)

            const imageTag = document.querySelector('.image')
            const nameTag = document.querySelector('.name');
            const locationTag = document.querySelector('.location');
            const descriptionTag = document.querySelector('.description')

            // match selected value with object data's key name(food & non_food &combination of food & non_food)

            // if user selects "food"
            if (selectValue == 'food') {
                // then random generate from food array (36 items) = food.length
                const randomIndex = Math.floor(Math.random() * card.data.food.length);
                console.log(randomIndex);

                // Store randomly generator creature in a variable 
                const creatureHero = card.data.food[randomIndex];
                // console.log(creatureHero)

                //Display card
                nameTag.innerHTML = creatureHero.name;
                locationTag.innerHTML = creatureHero.common_locations;
                descriptionTag.innerHTML = creatureHero.description;
                imageTag.src = creatureHero.image;
                imageTag.alt = creatureHero.name


            }

            // if user selects "non_food"
            else if (selectValue == 'nonFood') {
                //  then random generate from non_food array (47 items) = non_food.length
                const randomIndex = Math.floor(Math.random() * card.data.non_food.length);
                console.log(randomIndex);

                // Store randomly generator creature in a variable 
                const creatureHero = card.data.non_food[randomIndex];
                // console.log(creatureHero)

                //Display card
                nameTag.innerHTML = creatureHero.name;
                locationTag.innerHTML = creatureHero.common_locations;
                descriptionTag.innerHTML = creatureHero.description;
                imageTag.src = creatureHero.image;
                imageTag.alt = creatureHero.name

            }

            // if user selects "whatever"
            else if (selectValue == 'whatever') {
                //combine food and non_food into one array
                card.data.whatever = card.data.food.concat(card.data.non_food)
                console.log(card.data.whatever)

                // then random generate from food or non-food array (36 index + 47 index) = combined.length
                const randomIndex = Math.floor(Math.random() * card.data.whatever.length);
                console.log(randomIndex)

                // Store randomly generator creature in a variable 
                const creatureHero = card.data.whatever[randomIndex];
                // console.log(creatureHero)

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

// loop through food, non_food and the combination 
// create 3 <p> tags inside cardContentContainer(ul>li>p) with separate class name: name, common_location and description;  and 1 <img> tag inside imgContainer with class name of image

// Display card with:
// Img: append a creatureHero.image to imgContainer
// <img src ="" alt="name">
// Name: append a creatureHero.name 
// .name
// Location 
// append a creatureHero.common_locations
// .location
// description 
// append a creatureHero.description
// .description


//init method
zeldaApp.init = () => {
    zeldaApp.getInfo();
    zeldaApp.getOption();

}
//call init
zeldaApp.init()









