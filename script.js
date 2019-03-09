function compliment(){
let request = new XMLHttpRequest();
let url = "https://complimentr.com/api";

request.open("GET", url, true);

request.onload = function(){
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    let advice = document.getElementById('advice');
    
    if (request.status >= 200 && request.status <400){
        advice.innerHTML = "Compliment - " + data.compliment;
    }
    
};
request.send();
}

function advice(){
let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice";

request.open("GET", url, true);

request.onload = function(){
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    let advice = document.getElementById('advice');
    
    if (request.status >= 200 && request.status <400){
        advice.innerHTML = "Advice- " + data["slip"].advice;
    }
    
};
request.send();
}

function dadjoke(){
let request = new XMLHttpRequest();
let url = "https://icanhazdadjoke.com/slack";

request.open("GET", url, true);

request.onload = function(){
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    let advice = document.getElementById('advice');
    
    if (request.status >= 200 && request.status <400){
        advice.innerHTML = "Dad Joke - " + data.attachments[0].text;
    }
    
};
request.send();
}

function geekjoke(){
let request = new XMLHttpRequest();
let url = "https://geek-jokes.sameerkumar.website/api";

request.open("GET", url, true);

request.onload = function(){
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    let advice = document.getElementById('advice');
    
    if (request.status >= 200 && request.status <400){
        advice.innerHTML = "Geek Joke - " + data;
    }
    
};
request.send();
}

function sortinghat(){
let request = new XMLHttpRequest();
let url = "https://www.potterapi.com/v1/sortingHat";

request.open("GET", url, true);

request.onload = function(){
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    let advice = document.getElementById('advice');
    
    if (request.status >= 200 && request.status <400){
        advice.innerHTML = "Sorting Hat: Hmm. Difficult. Very difficult. Plenty of courage, I see. Not a bad mind either. There's talent, oh my goodness, yes - and a nice thirst to prove yourself, now that's interesting... So where shall I put you? You will go to " + data;
    }
    
};
request.send();
}

