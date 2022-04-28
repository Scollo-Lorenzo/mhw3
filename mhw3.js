/*

                                                ||| Nota per il Professore |||

    --- È tutto codice funzionante, solo che di questo genere di API non ho trovato la rispettiva API con OAUTH
        quindi ho dovuto cambiare "genere"... ---

function stampaTutto(json){

    console.log(json);

}

function onResponse(response){

    console.log("Risposta ricevuta!!");
    return response.json();

}

function printImgs(json){

    console.log("JSON Ricevuto -->", json);
    const results = json.results;

    const vista = document.querySelector('#vista');
    vista.innerHTML = '';
    
    if(results.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

        for(result of results){

            console.log("result.brand ", result.brand);
            console.log("result.colorway ", result.colorway);
            console.log("result.media.smallImageUrl ", result.media.smallImageUrl);

            console.log(result);

            const sezione = document.createElement("div");
            sezione.classList.add("album");
            const new_p = document.createElement("p");
            new_p.textContent = result.name;
            const new_img = document.createElement("img");
            new_img.src = result.media.smallImageUrl;
            sezione.appendChild(new_p);
            sezione.appendChild(new_img);
            vista.appendChild(sezione);
    
        }

    }

}

function search(event){

    event.preventDefault();

    console.log("Dentro Search");

    const brand = document.querySelector('#contenuto_textbox').value;
    console.log("Content -> ", brand);

    const img_request = sneaker_end_point + "?limit=10" + "&brand=" + brand;
    console.log("img_request -->", img_request);

    //fetch(img_request).then(onResponse).then(printImgs);

    fetch(img_request, 
{

    method: 'GET',
	headers: {
		'X-RapidAPI-Host': host,
		'X-RapidAPI-Key': key
	}

}
).then(onResponse).then(printImgs);

}

const key = "55c9f6e8bemsh746fb4baec5314cp15e0c6jsnd245799b374f";
const sneaker_end_point = "https://v1-sneakers.p.rapidapi.com/v1/sneakers";
const host = "v1-sneakers.p.rapidapi.com";


fetch(sneaker_end_point + "?limit=10", 
{

    method: 'GET',
	headers: {
		'X-RapidAPI-Host': host,
		'X-RapidAPI-Key': key
	}

}
).then(onResponse).then(stampaTutto);

const form = document.querySelector("#cerca");
form.addEventListener("submit", search);

*/

// --------------- FUNZIONI x MODALE ---------------

function apriModale(event) {

	const image = document.createElement('img');
	image.id = 'immagine_post';
	image.src = event.currentTarget.src;
	modale.appendChild(image);
	modale.classList.remove('hidden');
	document.body.classList.add('no-scroll');
}

function chiudiModale(event) {
	console.log(event);
	if(event.key === 'Escape')
	{
		modale.classList.add('hidden');
		img = modale.querySelector('img');
		img.remove();
		document.body.classList.remove('no-scroll');
	}
}

// --------------- FUNZIONE STAMPA DI CONTROLLO PER API KEY ---------------

function stampaTutto(json){

    console.log(json);

}

function onResponse(response){

    console.log("Risposta ricevuta!!");
    return response.json();

}

// --------------- FUNZIONE STAMPA DI CONTROLLO PER API OAUTH ---------------

function getToken(json)
{
	token_data = json;
	console.log(json);

    token = json.access_token;
}

function onTokenResponse(response) {
    console.log(response);
    return response.json();
}

// --------------- FUNZIONE STAMPA ANIME ---------------

function printAnime(json){

    //console.log("JSON Ricevuto -->", json);

    const noe = getNumberOfElement(); //noe = Numero degli elementi che vogliamo fare visualizzare
    //console.log("noe ---> ", noe);

    let result = [];

    for(let i = 0; i<noe; i++){

        result[i] = json.results[i];
        //console.log("Vettore Result ---> ", result[i]);

    }

    const vista = document.querySelector('#vista');
    vista.innerHTML = '';
    
    if(result.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

        let cont = 1;  //Contatore per utilizzo prettamente "logistico", non ha un reale utilizzo

        for(item of result){

            console.log("Oggetto di posizione: ", cont, " ---> ", item);

            const sezione = document.createElement("div");
            sezione.classList.add("album");
            const titolo = document.createElement("p");
            titolo.textContent = item.title;
            const new_img = document.createElement("img");
            new_img.src = item.image_url;
            //Event Listener per rendere cliccabile l'immagine
            new_img.addEventListener("click", apriModale);
            //Appendiamo tutto alla "vista"
            sezione.appendChild(titolo);
            sezione.appendChild(new_img);
            vista.appendChild(sezione);

            cont++;

        }

    }

}

// --------------- FUNZIONE STAMPA MANGA ---------------

function printManga(json){

    //console.log("JSON Ricevuto -->", json);

    const noe = getNumberOfElement();

    let result = [];

    for(let i = 0; i<noe; i++){

        result[i] = json.results[i];
        console.log("Vettore Result ---> ", result[i]);

    }

    const vista = document.querySelector('#vista');
    vista.innerHTML = '';
    
    if(result.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

        let cont = 1;

        for(item of result){

            console.log("Oggetto di posizione: ", cont, " ---> ", item);

            const sezione = document.createElement("div");
            sezione.classList.add("album");
            const new_p = document.createElement("p");
            new_p.textContent = item.title;
            const new_img = document.createElement("img");
            new_img.src = item.image_url;
            //Event Listener per rendere cliccabile l'immagine
            new_img.addEventListener("click", apriModale);
            //Appendiamo tutto alla "vista"
            sezione.appendChild(new_p);
            sezione.appendChild(new_img);
            vista.appendChild(sezione);

            cont++;
    
        }

    }

}

// --------------- FUNZIONE STAMPA PERSONAGGI ---------------

function printCharacter(json){

    //console.log("JSON Ricevuto -->", json);

    const noe = getNumberOfElement();

    let result = [];

    for(let i = 0; i<noe; i++){

        result[i] = json.results[i];
        //console.log("Vettore Result ---> ", result[i]);

    }

    const vista = document.querySelector('#vista');
    vista.innerHTML = '';
    
    if(result.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

        let cont = 1;

        for(item of result){

            console.log("Oggetto di posizione: ", cont, " ---> ", item);

            const sezione = document.createElement("div");
            sezione.classList.add("album");
            const new_p = document.createElement("p");
            new_p.textContent = item.title;
            const new_img = document.createElement("img");
            new_img.src = item.image_url;
            //Event Listener per rendere cliccabile l'immagine
            new_img.addEventListener("click", apriModale);
            //Appendiamo tutto alla "vista"
            sezione.appendChild(new_p);
            sezione.appendChild(new_img);
            vista.appendChild(sezione);

            cont++;
    
        }

    }

}

// --------------- FUNZIONE STAMPA CANZONI (API OAUTH) ---------------

function printSong(json){

    //console.log("JSON SONG --> ", json);

    const canzoni = json.albums.items;

    const vista = document.querySelector('#vista');
    vista.innerHTML = '';
    
    if(json.albums.total == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

        let cont = 1;

        for (canzone of canzoni){

            //console.log("Oggetto di posizione: ", cont, " ---> ", canzone);
            //console.log("Immagine ---> ", canzone.images[0].url);

            const sezione = document.createElement("div");
            sezione.classList.add("album");
            const new_p = document.createElement("p");
            new_p.textContent = canzone.name;
            const new_img = document.createElement("img");
            new_img.src = canzone.images[0].url;
            //Event Listener per rendere cliccabile l'immagine
            new_img.addEventListener("click", apriModale);
            //Appendiamo tutto alla "vista"
            sezione.appendChild(new_p);
            sezione.appendChild(new_img);
            vista.appendChild(sezione);

            cont++;

        }

    }   

}

// --------------- FUNZIONE PER OTTENERE QUANTI ELEMENTI VOGLIAMO FAR STAMPARE ---------------

function getNumberOfElement(){

    const variabile = document.querySelector('#numberOfElement').value;
    let noe;

    if(variabile === "dieci"){

        noe = 10;

    }else if(variabile === "quindici"){

        noe = 15;

    }else if(variabile === "venti"){

        noe = 20;

    }

    return noe;

}

// --------------- FUNZIONE SEARCH CON API KEY E API OAUTH ---------------

function search(event){

    event.preventDefault();

    console.log("Dentro Search");

    const valTB = document.querySelector('#contenuto_textbox').value;

    if(valTB){

        const toSearch = encodeURIComponent(valTB);
        console.log("Dobbiamo Cercare -> ", toSearch);

        const tipo = document.querySelector("#tipo").value;
        console.log("Sottoforma di -> ", tipo);

        if(tipo === "anime"){ //Richiesta Stampa ANIME (API KEY)


            const data_required = animeList_end_point + tipo + "?q=" + toSearch;
            console.log("Data_Required -->", data_required);
        
            fetch(data_required, 
            {
        
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': host,
                    'X-RapidAPI-Key': key
                }
        
            }
            ).then(onResponse).then(printAnime);

        }else if(tipo === "manga"){ //Richiesta Stampa MANGA (API KEY)

            const data_required = animeList_end_point + tipo + "?q=" + toSearch;
            console.log("Data_Required -->", data_required);
        
            fetch(data_required, 
            {
        
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': host,
                    'X-RapidAPI-Key': key
                }
        
            }
            ).then(onResponse).then(printManga);

        }else if(tipo === "character"){ //Richiesta Stampa PERSONAGGI (API KEY)

            const data_required = animeList_end_point + tipo + "?q=" + toSearch;
            console.log("Data_Required -->", data_required);
        
            fetch(data_required, 
            {
        
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': host,
                    'X-RapidAPI-Key': key
                }
        
            }
            ).then(onResponse).then(printCharacter);

        }else if (tipo === "song"){ //UTILIZZO API OAUTH

            const noe = getNumberOfElement();

            fetch("https://api.spotify.com/v1/search?q=" + toSearch + "&type=album&market=IT&limit=" + noe,
            {
                headers:{
                    "Authorization": "Bearer " + token
                }
            }
            ).then(onResponse).then(printSong);

        }

    }

}


//DATI X API KEY

const key = "55c9f6e8bemsh746fb4baec5314cp15e0c6jsnd245799b374f";
const animeList_end_point = 'https://jikan1.p.rapidapi.com/search/';
const host = "jikan1.p.rapidapi.com";

//DATI X API OAUTH

 const client_id="f768fe4a5f73475693dd47b63669985f";
 const client_secret="c19e88cc397144c194f31aa4d0105dfb";

 let token;

fetch("https://accounts.spotify.com/api/token",
{
    method: "post",
    body:"grant_type=client_credentials",
    headers:{
      "Content-Type": 'application/x-www-form-urlencoded',
      "Authorization": 'Basic ' + btoa(client_id + ':' + client_secret)
    }
}
).then(onTokenResponse).then(getToken);


const form = document.querySelector("#cerca");
form.addEventListener("submit", search);

//creo il pulsante per la chiusura del post 
window.addEventListener('keydown', chiudiModale);




/*                                                  IDEA API INIZIALE

const client = "ScolloLorenzo";
const redirect_url = "file:///C:/Users/loren/Desktop/Robe%20di%20Uni/III%20ANNO/4)"+"%20Database%20&%20WEB%20PROGRAMMING/Web%20Programming%20("+"2'%20Semestre)"+"/Esercizi/JavaScript/mhw3/index.html";
const redirect_uri = "https://anilist.co/api/v2/oauth/pin";
const secret_client = "Y9SSqCWK0zyclcaadXkOoFrvAe1f7yXgIkQRVIYo";
const client_idA = "8160";
const endpointToken = "https://anilist.co/api/v2/oauth/authorize";
//const endpointToken = "https://anilist.co/api/v2/oauth/token";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

function onResponse2(response){

    console.log(response);
    console.log(response.text());
    return response.text;
    

}

//appena scrivo .json() mi da errore

fetch(proxyUrl + endpointToken + "?client_id=8160&response_type=token",
    {
        method: 'POST',
        body:"grant_type=client_credentials",
        headers: {
            'Content-Type': 'application/json',
            //'Accept': 'application/json',
            //"Access-Control-Allow-Origin": "*",
            "Authorization": 'Basic ' + btoa(client_idA),
            
        }
    }).then(onResponse2);

*/