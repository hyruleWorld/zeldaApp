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


//Change visibility of question and answer sections-display:none

//Click a button “Start Game” to display qustion section

//When users finish the question, click a button “Show me” then display answer section

// Display  card with:
// Img
// Name
// Location 
// description  


//init menthod
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






