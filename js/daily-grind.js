/* 
    Here are the main things we'll likely need to store for each coffee:

    name- the name of the coffee
    pic - the picture of the coffee
    color - the color associated with the coffee
    alt - the alt tag identifying the coffee
    day - the day of the week
    desc- the description of the coffee
*/

let myDate = new Date();

let today = myDate.getDay();

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){

return `
	 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s' Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
`;
  
}

//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }
 today = parseInt(today);

switch(today){

    case 0:
        today = "Sunday";

        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picutre of a drip coffee",
            color: "grey",
            day: "Sunday",
            desc: `I love me some dripp coffee!`
        };


    break; 
    
    case 1:
        today = "Monday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picutre of a bubble tea",
            color: "pink",
            day: "Monday",
            desc: `I love me some bubble tea!`
        };

    
    break;
    
    case 2:
        today = "Tuesday";

        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picutre of a Mocha coffee",
            color: "BurlyWood",
            day: "Tuesday",
            desc: `I love me some Mocha`
        };


    break;

    case 3:
        today = "Wednesday";

        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picutre of a pumpkin spice latte ",
            color: "Coral",
            day: "Wednesday",
            desc: `I love me some pumpkin spice!`
        };


    break;
    
    case 4:
        today = "Thursday";

        coffee = {
            name: "Cold brew",
            pic: "images/cold-brew.jpg",
            alt: "A picutre of a cold brew coffee",
            color: "lightblue",
            day: "Thursday",
            desc: `I love me some cold brew!`
        };


    break;
    
    case 5:
        today = "Friday";

        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picutre of a frappaccino",
            color: "lightgreen",
            day: "Friday",
            desc: `I love me some frappaccino!`
        };


    break;

    case 6:
        today = "Saturday";

        coffee = {
            name: "Caramel latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picutre of a caramel latte ",
            color: "Lavender",
            day: "Wednesday",
            desc: `I love me some caramel latte !`
        };


    break;
    default:
        today = "Day is Unknown";
}

 
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color

console.log(coffee);