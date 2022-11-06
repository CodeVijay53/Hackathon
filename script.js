// Creating Headline as Nationalize API

const h1Ele = document.createElement("h1");
h1Ele.innerText = "Nationalize API";
h1Ele.id = "Title";
h1Ele.style.textAlign = "center";
document.body.appendChild(h1Ele);

// Creating definition

const h4Ele = document.createElement("div");
h4Ele.innerText = "This search bar gives the probable nationality of a surname";
h4Ele.id = "Titledef";
h4Ele.style.textAlign = "center";
document.body.appendChild(h4Ele);

// Creating the Text

const labelEle = document.createElement("label");
labelEle.innerText = "Type any Name: ";
labelEle.id = "label";
document.body.appendChild(labelEle);

// Creating the Input field

const inputEle = document.createElement("input");
inputEle.innerText = "Enter the Name";
inputEle.type = "text";
inputEle.id = "givenName";
document.body.appendChild(inputEle);

// Creating the search button

const searchbtn = document.createElement("button");
searchbtn.innerText = "SEARCH";
searchbtn.id = "btn";
document.body.appendChild(searchbtn);

//Creating the Default Result area

const divdef = document.createElement("div");
divdef.id = "resultdef";

//Creating the Result area

const divEle = document.createElement("div");
divEle.id = "result";

// Function to get the result

const nationality = async () => {
  const EntName = document.getElementById("givenName").value;
  console.log(EntName);
  const response = await fetch(`https://api.nationalize.io?name=${EntName}`);
  const data = await response.json();
  console.log(data);
  const name = data.name;
  const count1 = data.country[0].country_id;
  const count2 = data.country[1].country_id;
  const prob1 = data.country[0].probability;
  const prob2 = data.country[1].probability;

  try {
    divdef.innerText = "You can see the result of the entered name below:";

    document.body.appendChild(divdef);

    divEle.innerText = `1.a First probable nationality of ${name} is ${count1}

  1.b Probability of ${name} in the country is ${prob1}

  2.a Second probable nationality of ${name} is ${count2}

  2.b Probability of ${name} in the country is ${prob2}
   `;
    document.body.append(divEle);
  } catch (error) {
    console.log(error);
  }
};
nationality();
// Adding the click action
searchbtn.addEventListener("click", () => {
  nationality();
});
