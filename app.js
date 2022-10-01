//Namespace for zeldaApp
const zeldaApp = {};

//URL
zeldaApp.url = 'https://botw-compendium.herokuapp.com/api/v2/category/creatures';

//creat a method to get data from URL
zeldaApp.getInfo=()=>{
    //AJAX request

    const appUrl=new URL(zeldaApp.url);
    //  console.log(appUrl)

    //fetch data
    fetch(appUrl)
        .then((apiPromise)=>{
            return apiPromise.json()
        })
        .then((data)=>{
            console.log(data)
        })    
}


//Change style visibility of question and answer sections-display:none


//Click a button “Start Game” to display question section
    // event listener for the submitted value that has been selected in drop down menu (option)
        // create variable for selected value = const selectValue
        // create variable method for  const random Generator [Math.floor(Math.random( 10 * selectedValue.length))]
        // add in prevent default of default event on clicking "Show me" button
        // if user selects "food"
        // then random generate from food array (36 items) = food.length
        // if user selects "non food"
        //  then random generate from non_food array (47 items) = non_food.length
        // if user selects "whatever"
        // then random generate from food or non-food array (36 index + 47 index) = combined.length
//OPTIONS 
// 1: ARRAY METHOD
        // create an combine array variable
        // .push the food and non_food array in the combine array
        // random generate a value from the answer from the array
        // then alert "select a preference"
// 2: CREATE A NEW OBJECT
        // create a new empty obj named newObj
        // grab the content in the food & non_food arrays
        // loop through newObj
        // random generate a value from the answer from the newObj
        
    
    // else user selects a submit value as an empty value "pick you preference" because an answer is required

    //create a variable to store the creature index that was randomly generated
        //const randomIndex

    // Store randomly generator creature in a variable 
        // const creatureHero = data.food[randomIndex]

//When users finish the question, click a button “Show me” then display answer section

    // event listener for the show me button
    // match selected value with object data's key name(food & non_food &combination of food & non_food)
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
zeldaApp.init = ()=>{
    zeldaApp.getInfo()
}
//call init
zeldaApp.init()


// -     Click a button “Start Game” to display a multiple choice question for users to choose:
// One answer of the question leads to the food category and another leads to the nonfood category. 
// If = Selected // Food = random generate creature under food
// Else if = Selected // Non-Food = random generate creature under food
// Else = A third answer “Whatever” leads to a random character regardless of food/non food category.

// -    	When users finish the question, click a button “You’re…” then randomly generate a character form the category they chose. [Array method .filter()]
// Display create card with:
// Img
// Name
// Location 
// description  

// -    	Create an app object (zeldaApp)//Namespace for app.

// -  	Store input information in a variable inside a method.

// -  	Create a method to get data from API(zeldaApp.getCharacter), and a if statement to make a validation to prevent submitting form without input(s).


    
// -  	When API call is successful, display the a card info with character by looping through each result, rendering  * HTML elements for character name, picture, common locations, description.






