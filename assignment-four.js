//Problem:1  radianToDegree [convert a radian input to degree]

function radianToDegree(radianValue){

    if(typeof radianValue !== 'number'){
        return 'Please enter a valid number...';
    }

    else{
        let degreeValue = radianValue*(180/Math.PI);
        degreeValue = degreeValue.toFixed(2);
        const degree = parseFloat(degreeValue);
        return degree;
    }
}



//Problem:2  isJavaScriptFile [check a file whether it is a javasctipt file or not]

function isJavaScriptFile(fileName){

    if(typeof fileName !== 'string'){
        return 'Please type a vlaid name...';
    }

    else if(fileName.endsWith('.js')){
        return true;
    }

    else {
        return false;
    }
}



//Problem 3: oilPrice [calculate the total price to be paid]

function oilPrice(diesel, petrol, octen){

    if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octen !== 'number'){
        return 'Please enter a valid number...';
    }

    //in case of negative inputs

    else if(Math.sign(diesel) === -1 || Math.sign(petrol) === -1 || Math.sign(octen) === -1){
        return 'Please enter a valid number...';
    }

    else{
        const dieselPerLitre = 114;
        const petrolPetLitre = 130;
        const octenPerLitre = 135;

        const dieselPrice = diesel*dieselPerLitre;
        const petrolPrice = petrol*petrolPetLitre;
        const octenPrice = octen*octenPerLitre;

        const TotalPrice = dieselPrice + petrolPrice + octenPrice;
        return TotalPrice;
    }
}



//Problem 4: publicBusFare [calculate the bus fair to be paid for the passengers]

function publicBusFare(people){
    
    if (typeof people !== 'number'){
        return 'Please enter a valid number...';
    }

    //in case of negative inputs

    else if (Math.sign(people) === -1){
        return 'Please enter a valid number...';
    }

    else{
        const busPassengers = 50;
        const microPassengers = 11;
        const busFairPerPerson = 250;

        const PeopleAfterFillingBus = people % busPassengers;
        const peopleAfterFillingMicro = PeopleAfterFillingBus % microPassengers;

        const requiredFare = peopleAfterFillingMicro * busFairPerPerson;
        return requiredFare;
    }
}



//Problem 5: isBestFriend [to check whether the guys are best friends or not ]

function isBestFriend(friend1, friend2){

    // in case of invalid input 

    if(typeof friend1 !== 'object' || typeof friend2 !== 'object'){
        return 'Please type a valid object...'
    }

    else if (friend1.name.toLowerCase() === friend2.friend.toLowerCase() && friend2.name.toLowerCase() === friend1.friend.toLowerCase()){
        return true;
    }

    else {
        return false;
    }
}