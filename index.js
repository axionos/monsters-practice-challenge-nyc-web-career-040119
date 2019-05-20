const monsterURL = "http://localhost:3000/monsters"
const formContainer = document.querySelector("#create-monster");
const monsterContainer = document.querySelector("#monster-container");

fetch(`${monsterURL}/?_limit=50&_page=1`)
  .then(function(res){
    return res.json();
  })
  .then(function(monsters){

    // RENDERING 50 MONSTERS
    for(let monster of monsters){
      monsterContainer.innerHTML += `
        <div>
          <h2>${monster.name}</h2>
          <h4>Age: ${monster.age}</h4>
          <p>Bio: ${monster.description}</p>
        </div>
      `
    };


    // EXPLICIT WAY TO RENDER MONSTERS
    // monsters.forEach(function(monster){
    //   const div = document.createElement("div");
    //   const name = document.createElement("h2");
    //   const age = document.createElement("h4");
    //   const bio = document.createElement("p");
    //   name.innerText = monster.name;
    //   age.innerText = `Age: ${monster.age}`;
    //   bio.innerText = `Bio: ${monster.description}`;
    //   div.appendChild(name);
    //   div.appendChild(age);
    //   div.appendChild(bio);
    //   monsterContainer.appendChild(div);
    // });

  }); // ENDING GET FETCH

  const monsterForm = document.querySelector("#monsterForm");
  const monsterName = document.querySelector("#monsterName");
  const monsterAge = document.querySelector("#monsterAge");
  const monsterDesc = document.querySelector("#monsterDesc");

  monsterForm.addEventListener("submit", function(e){
    e.preventDefault();

    fetch(monsterURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        monster: {
          name: monsterName.value,
          age: monsterAge.value,
          description: monsterDesc.value
        }
      })
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      console.log(json);
      // debusgger

      monsterContainer.innerHTML += `
        <div>
          <h2>${monster.name.value}</h2>
          <h4>Age: ${monster.age.value}</h4>
          <p>Bio: ${monster.description.value}</p>
        </div>
      `
    });
  }); // ENDING MONSTER FORM
