const brewers = [
    {
        name: 'Emily DeWitt',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Hartwell, Georgia`,
        favoriteBeers: ['Wiseacre Tiny Bomb', 'Red Stripe', 'Tecate'],
    },
    {
        name: 'Josh Pantana',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Atlanta, Georgia`,
        favoriteBeers: ['Miller Lite', 'Old Speckled Hen', 'Dos Equis'],
    },
    {
        name: 'Keith Walker',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Chicago, Illinois`,
        favoriteBeers: ['Fullers ESB', 'Budweiser', 'Newcastle Brown Ale'],
    },
    {
        name: 'Austin Casey',
        photo: `http://www.ieeeaustsb.org/files/2017/05/placeholder-male-square.png`,
        hometown: `Nashville, Tennessee`,
        favoriteBeers: ['Chicken Scratch', 'Peanut Butter Milk Stout', 'Jackalope'],
    },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const printMap = () => {
    const mapContainer = document.getElementById('mapContainer');
    if(mapContainer === null){
        return;
    } else {
    let domString = ``;
    domString += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.393140738528!2d-86.75879268470213!3d36.13263981268999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646609ffab37eb%3A0x528b2eab4ef5110e!2s500+Interstate+Blvd+S%2C+Nashville%2C+TN+37210!5e0!3m2!1sen!2sus!4v1553963381330!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`;
    printToDom('mapContainer', domString);
    };
};

const printContactInfo = () => {
    const contactInfoContainer = document.getElementById('contactInfoContainer');
    if (contactInfoContainer === null) {
        return;
    } else {
        let domString = ``;
        domString += `<div id="contactText">`
        domString +=    `<h2>Visit our Brewery</h2>`
        domString +=    `<p>Kiss the Goat Brewery</p>`;
        domString +=    `<p>500 Interstate Blvd South</p>`;
        domString +=    `<p>Nashville, Tennessee 37210</p>`;
        domString +=    `<p>Phone: (615) 736-0000</p>`;
        domString +=    `<button id="scheduleTour">Click here to schedule a tour</button>`
        domString += `</div>`

        printToDom('contactInfoContainer', domString)
    }
};

const printBrewerTitle = () => {
    let domString = ``;
    domString += `<h2 id="meetTheBrewersTitle">Meet our Brewers</h2>`;
    printToDom('brewerTitleContainer', domString);
};

const printBrewerPhotos = () => {
    let domString = ``;
    domString += '<div class="row">';
    brewers.forEach((brewer) => {
        domString += `<div class="card text-center col-6 brewerCard">`; //CARD
        domString +=   `<div class="brewerPhotoAndDescriptionWrap">`; //PHOTO AND DESCRIPTION WRAP
        domString +=     `<img class="brewerPhotoWrap" src="${brewer.photo}">`; //BREWER PHOTO
        domString +=     `<div class="brewerDescriptionWrap">`; //DESCRIPTION WRAP
        domString +=       `<h4>${brewer.name}</h4>`;
        domString +=       `<h5>Hometown: ${brewer.hometown}</h5>`;
        domString +=       `<h5>Favorite beers: ${brewer.favoriteBeers}</h5>`;
        domString +=     `</div>`; //END DESCRIPTION WRAP
        domString +=   `</div>` //END PHOTO AND DESCRIPTION WRAP
        domString +=  `</div>`; //END CARD
        printToDom('brewerCardContainer', domString);
      });
};

const scheduleAlert = () => {
    alert("Your request to schedule a brewery tour has been received. We'll be in touch shortly!");
};

const eventListeners = () => {
    document.getElementById('scheduleTour').addEventListener('click', scheduleAlert);
}

const init = () => {
    printMap();
    printContactInfo();
    printBrewerTitle();
    printBrewerPhotos();
    eventListeners();
};

init();