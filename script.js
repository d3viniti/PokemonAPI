// references to dom nodes
const mainImage = document.querySelector("#poke-con img");
const name = document.querySelector("#name");
const species = document.querySelector("#species");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const abilitiesList = document.querySelector("#abilities-list")
const getPokeButton = document.querySelector("#get-poke-button");


//utility functions

function setImgSrc(imgRef, imgSrc){
    // this if/else statement is what you'd put if the API returns no img:
    //if(imgSrc === ``){ img src = "pokemon logo" 
    imgRef.setAttribute("src", imgSrc);
}

function setText(el, text){
    el.innerText = text;
}


// project - API-specific functions

function setBasicInfo(pokemon){
        setText(name, `NAME: ${pokemon.name}`)
        setText(species, `SPECIES: ${pokemon.species.name}`);
        setText(weight, `WEIGHT: ${pokemon.weight}`);
        setText(height, `HEIGHT: ${pokemon.height}`);  
}

function setAbilityList(abilitiesArray){
    let htmlString = ``;
    abilitiesArray.forEach((item) => {
        htmlString += `<li>${item.ability.name}</li>`;
    });
    abilitiesList.innerHTML = htmlString;
}

function createPokeProfile(pokemon){
    setImgSrc(mainImage, pokemon.sprites.other.home.front_default);
    setBasicInfo(pokemon);
    setAbilityList(pokemon.abilities);  
}

function getRandomPokemon(){
    const randomPokeId = Math. floor(Math.random() * 1000 + 1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeId}`)
    .then((res) => res.json())
    .then((json) => {
        const pokemon = json;
        console.log(pokemon);
        createPokeProfile(pokemon);
    })
    .catch((err) => console.log(err));
}

//Generate random number between 1-1000

getPokeButton.addEventListener("click", function(){
    getRandomPokemon();
})

    getRandomPokemon();
