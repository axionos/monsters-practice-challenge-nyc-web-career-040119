const monsterURL = "http://localhost:3000/monsters"
const formContainer = document.querySelector("#create-monster");
const monsterContainer = document.querySelector("#monster-container");

let page = 1
fetch(`${monsterURL}/?_limit=50&_page=${page}`)
  .then(function(res){
    return res.json();
  })
  .then(function(monsters){
    console.log(monsters)
    // RENDERING 50 MONSTERS
    for(let monster of monsters){
      // monsterContainer.innerHTML = ""
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

  monsterForm.addEventListener("submit", function(){

    fetch(monsterURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          name: monsterName.value,
          age: monsterAge.value,
          description: monsterDesc.value
      })
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      console.log(json);

      monsterContainer.innerHTML += `
        <div>
          <h2>${json.name}</h2>
          <h4>Age: ${json.age}</h4>
          <p>Bio: ${json.description}</p>
        </div>
      `
    }); // ENDING POST FETCH

  }); // ENDING MONSTER FORM



  // NEXT BUTTON
  const nextBtn = document.querySelector("#forward");

  nextBtn.addEventListener("click", function(){
    page++;
    console.log(page);
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${page}`)
    .then(function(res){
      return res.json();
    })
    .then(function(monsters){
      console.log(monsters)

      monsterContainer.innerHTML = ""

      for(let monster of monsters){
        monsterContainer.innerHTML += `
        <div>
        <h2>${monster.name}</h2>
        <h4>Age: ${monster.age}</h4>
        <p>Bio: ${monster.description}</p>
        </div>
        `
      }
      document.body.scrollTop = 0; // for Safari
      document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE, Opera

    }) // END OF GET FETCH
  }); // END OF NEXT BUTTON EVENT LISTENER




  // PREVIOUS BUTTON

  const preBtn = document.querySelector("#back");

  preBtn.addEventListener("click", function(){
    page--;
    console.log(page);
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${page}`)
    .then(function(res){
      return res.json();
    })
    .then(function(monsters){
      console.log(monsters)

      monsterContainer.innerHTML = ""

      for(let monster of monsters){
        monsterContainer.innerHTML += `
        <div>
        <h2>${monster.name}</h2>
        <h4>Age: ${monster.age}</h4>
        <p>Bio: ${monster.description}</p>
        </div>
        `
      }
      document.body.scrollTop = 0; // for Safari
      document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE, Opera

    }) // END OF GET FETCH
  }); // END OF PREVIOUS BUTTON EVENT LISTENER
