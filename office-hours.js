const fs = require('fs');

fs.readFile



var responseData; 
var fetchData = fetch('officeHours.txt');
fetchData
    .then(response => response.text())
    .then(data => {
        const lines =data.split('\n').filter(line => line.trim() !== '');
        const courses =lines.map(line => {
            const [course, day, start, end, ta, location, instructor] = line.split(',');
            return { course, day, start, end, ta, location, instructor };
        });
        for(var i = 0; i < courses.length; i++){
            courses[i].courseinstructor = courses[i].course + courses[i].instructor;
        }

        

        const key2 = 'course';
        const array2 = [...new Map(courses.map(item => [item[key2], item])).values()];
        var courseFilter = document.getElementById('courseFilter');
        array2.forEach(function(category){
            var option = document.createElement('option');
            option.classList.add('optionValC')
            option.value = category.course;
            option.text = category.course;
            courseFilter.add(option);
        });

        const key3 = 'instructor';
        const array3 = [...new Map(courses.map(item => [item[key3], item])).values()];

        var courseFilter = document.getElementById('profFilter');
        array3.forEach(function(category){
            var option = document.createElement('option');
            option.classList.add('optionValI')
            option.value = category.instructor;
            option.text = category.instructor;
            courseFilter.add(option);
        });


        //Get rid of duplicate courses
        const key1 = 'courseinstructor';
        const array1 = [...new Map(courses.map(item => [item[key1], item])).values()];
        //Get rid of duplicate instructors
        //const key2 = 'instructor';
       // const array2 = [...new Map(array1.map(item => [item[key2], item])).values()];

       responseData = array1; 
        
        //array1 contains the unique combos of courses and instructors
        const cardContainer = document.getElementById('card-container');
        const filterC = document.getElementById('courseFilter');
        const filterI = document.getElementById('profFilter');
        const filterCVal = filterC.value;
        const filterIVal = filterI.value;

        array1.forEach(course =>{
            const card = document.createElement('div');
            card.classList.add('col-sm-4');
            card.innerHTML = `
            <div class="card text-center">
                <div class="card-body">
                <h5 class="card-title">
                    ${course.course}
                </h5>
                <p class="card-text">
                    ${course.instructor}
                </p>
                <a href="${course.course + course.instructor}.html" class="stretched-link"></a>
                </div>
            </div>` ;
            cardContainer.appendChild(card);
        });

       
    });

    function updatePageCourse(){
        const cardContainer = document.getElementById('card-container');
        const filterC = document.getElementById('courseFilter');
        const filterCVal = filterC.value;
        const cards = cardContainer.querySelectorAll(".card");
        if (filterCVal != "All"){
            cards.forEach((card) =>{
                const cardtitle = card.querySelector('.card-title');
                if(cardtitle.innerText === filterCVal){
                    card.style.display = "";
                }
                else{
                    card.style.display = "none";
                }
            })
        }
        else{
            cards.forEach((card) =>{
                card.style.display = "";
            })
        }
    }

        function updatePageProf(){
            const cardContainer = document.getElementById('card-container');
            const filterC = document.getElementById('profFilter');
            const filterCVal = filterC.value;
            const cards = cardContainer.querySelectorAll(".card");
            if (filterCVal != "All"){
                cards.forEach((card) =>{
                    const cardtitle = card.querySelector('.card-text');
                    if(cardtitle.innerText === filterCVal){
                        card.style.display = "";
                    }
                    else{
                        card.style.display = "none";
                    }
                })
            }
            else{
                cards.forEach((card) =>{
                    card.style.display = "";
                })
            }
        }

       /**for(var i = 0; i < cards.length; i++){
            val = cards[i].querySelector(".card-title");
            if(val.innerText == filterCVal){
                cards[i].style.display = "";
            }
            else{
                cards[i].style.display = "none";
            }
        } */


        /**const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const cardTitle = card.querySelector('.card-title');
  if (cardTitle.innerText === 'CMSC 131') {
    const cardText = card.querySelector('.card-text').innerText;
    console.log(cardText); // Output: Pedram Sadeghian
  }
}); */
       // const profs = document.getElementsByClassName('optionValI');

        //const key3 = 'instructor';
       // const array3 = [...new Map(responseData.map(item => [item[key3], item])).values()];

       /**  var courseFilter = document.getElementById('profFilter');
        profs.forEach(function(category){
            if (category.course === filterCVal){
                var option = document.createElement('option');
                option.value = category.instructor;
                option.text = category.instructor;
                courseFilter.add(option);
            }
        }); 
        title = cards[i].querySelector(".card-body p.card-text");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
        */
       
    


/**const data = [];
fetch("officehours.csv")
  .then(response => response.text())
  .then(data => {
    const lines = data.split("\n");
    const headerVal = lines[0].split(",");

    for(var i = 1; i < lines.length; i ++){
      const value = lines[i].split(",");
      var obj = {};
      for(var j = 0; j < value.length; j++){
        obj[headerVal[j].trim()] = value[j].trim();
        }
        data.push(obj)
      }

    const cardContainer = document.getElementById('card-container');
    for(i=0; i < data.length; i++){
        const card = document.createElement('div');
        card.classList.add('col-sm-4');
        card.innerHTML = `
            <div class="card" text-center">
                <div class="card-body">
                <h5 class="card-title">
                    ${data.Course}
                </h5>
                <p class="card-text">
                ${data.Instructor}
                </p>
                </div>
            </div>` ;
        cardContainer.appendChild(card);
    }
    });*/



   /**  const cardContainer = document.getElementById('card-container');
    for(i=0; i < officeHours.length; i++){
        const card = document.createElement('div');
        card.classList.add('col-sm-4');
        card.innerHTML = `
            <div class="card" text-center">
                <div class="card-body">
                <h5 class="card-title">
                    ${officeHours.Course}
                </h5>
                <p class="card-text">
                ${officeHours.Instructor}
                </p>
                </div>
            </div>` ;
        cardContainer.appendChild(card);
    }
    const officeHours = Papa.parse(data, { header: true });
    console.log(officeHours); 
  }); */

// Make a GET request for the CSV file
/** const xhr = new XMLHttpRequest();
const hours = [];
xhr.open('GET', 'officehours.csv');
xhr.onload = function() {
  if (xhr.status === 200) {
    // Parse the CSV file contents using PapaParse
    const csvData = Papa.parse(xhr.responseText).data;
    
    // Do something with the parsed data
    console.log(csvData);
  } else {
    console.error('Failed to load CSV file');
  }
};
xhr.send(); */
/** 
const fs = require("fs");
const Papa = require("papaparse");

const officeHours = [];

const options = { header: true };

fs.createReadStream("officehours.csv")
  .pipe(Papa.parse(Papa.NODE_STREAM_INPUT, options))
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    console.log(results);
  });
  */



function filterDropDown(button, dropdown, input, items) {
    //Create dropdown items from a list of items
    for (let i=0; i<items.length; i++) {
        let dropdown_item = document.createElement('a');
        dropdown_item.setAttribute('href', '#'+items[i]);
        dropdown_item.setAttribute('class', 'dropdown-item');
        dropdown_item.innerHTML = items[i];
        dropdown.appendChild(dropdown_item);
    }
    //Hide the dropdown list
    dropdown.style.display = 'none';

    //Make the button toggle the display of dropdown
    button.addEventListener('click', function () {
        if (dropdown.style.display == 'none')
            dropdown.style.display = 'block';
        else {
            dropdown.style.display = 'none';
            input.value = '';
        }
    });


}

//Call the filterDropDown function
filterDropDown(
    document.getElementById('prof'),
    document.getElementById('dropdown'),
    document.getElementById('input'),
    devices
)

 function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("Course");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("allClasses");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
} 

function myFunction2() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("Prof");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body p.card-text");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
} 

