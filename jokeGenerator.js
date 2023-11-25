
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("button");

async function getJoke(){
    
      const response=  await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
      let data= await response.json();
      jokeContainer.innerHTML=`${data.joke}`;
  }
  btn.addEventListener("click",getJoke);
  getJoke();