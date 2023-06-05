// Define the cards
const cards = [
    { rank: "2♥", value: 2 },
    { rank: "3♥", value: 3 },
    { rank: "4♥", value: 4 },
    { rank: "5♥", value: 5 },
    { rank: "6♥", value: 6 },
    { rank: "7♥", value: 7 },
    { rank: "8♥", value: 8 },
    { rank: "9♥", value: 9 },
    { rank: "10♥", value: 10 },
    { rank: "J♥", value: 11 },
    { rank: "Q♥", value: 12 },
    { rank: "K♥", value: 13 },
    { rank: "A♥", value: 14 },
    { rank: "2♦", value: 2 },
    { rank: "3♦", value: 3 },
    { rank: "4♦", value: 4 },
    { rank: "5♦", value: 5 },
    { rank: "6♦", value: 6 },
    { rank: "7♦", value: 7 },
    { rank: "8♦", value: 8 },
    { rank: "9♦", value: 9 },
    { rank: "10♦", value: 10 },
    { rank: "J♦", value: 11 },
    { rank: "Q♦", value: 12 },
    { rank: "K♦", value: 13 },
    { rank: "A♦", value: 14 },
    { rank: "2♣", value: 2 },
    { rank: "3♣", value: 3 },
    { rank: "4♣", value: 4 },
    { rank: "5♣", value: 5 },
    { rank: "6♣", value: 6 },
    { rank: "7♣", value: 7 },
    { rank: "8♣", value: 8 },
    { rank: "9♣", value: 9 },
    { rank: "10♣", value: 10 },
    { rank: "J♣", value: 11 },
    { rank: "Q♣", value: 12 },
    { rank: "K♣", value: 13 },
    { rank: "A♣", value: 14 },
    { rank: "2♤", value: 2 },
    { rank: "3♤", value: 3 },
    { rank: "4♤", value: 4 },
    { rank: "5♤", value: 5 },
    { rank: "6♤", value: 6 },
    { rank: "7♤", value: 7 },
    { rank: "8♤", value: 8 },
    { rank: "9♤", value: 9 },
    { rank: "10♤", value: 10 },
    { rank: "J♤", value: 11 },
    { rank: "Q♤", value: 12 },
    { rank: "K♤", value: 13 },
    { rank: "A♤", value: 14 },
  ];
  //write function for card shuffle
  function shaffle() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
  //write function for shuffled card display
  function displayCards() {
    const container = document.getElementById("output");
    const shuffled = shaffle();
    let output = "";
    shuffled.forEach((cards) => {
        output += `<span>${cards.rank}</span>`; //storing card in span tag and dislay in web page
      });
      container.innerHTML = output;
      console.log(cards);
      console.log("clicked");
    }
    // Add a submit event listener to the name form
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const nameInput = document.getElementById("name");
      const name = nameInput.value;
      const nameOutput = document.getElementById("name-output");
      let output="";
      output += `Welcome:- ${name}!`
      nameOutput.innerHTML=output
      console.log(name)
    });


    let button = document.getElementById("draw");
    
    // Add a click event listener to the button
button.addEventListener("click", function draw() {
    // Remove the last card from the array using pop()
  let userCard = cards.pop(); //Pass one card in userCard 
  let computerCard = cards.pop(); //Pass one card in computerCard
// cards value comparing for winner
  if (userCard.value > computerCard.value) {
    let result = document.getElementById("winner-output")
    let winner = `<h3>User Wins</h3>`;
    result.innerHTML = winner;
    console.log("User win the game");
} else if (userCard.value < computerCard.value) {
  let result = document.getElementById("winner-output");
  let winner = `<h3>Computer Wins</h3>`;
  result.innerHTML = winner;
  console.log("Computer win the game");
} else {
    let result = document.getElementById("winner-output");
    let winner = `<h3>Game Draw</h3>`;
    result.innerHTML = winner;
    console.log("Game draw");
  }

  // Display the card on the page
  let userDiv = document.getElementById("userCard");
  let outputUser = ""
  outputUser += `<div>${userCard.rank}</div>`;
  userDiv.innerHTML = outputUser;
  let computerDiv = document.getElementById("computerCard");
  let outputComputer = "";
  outputComputer += `<div>${computerCard.rank}</div>`
  computerDiv.innerHTML = outputComputer;
  console.log("User Card", userCard);
  console.log("Computer Card", computerCard);
});

let resetButton = document.getElementById("reset");

// Add a click event listener to the button
resetButton.addEventListener("click", function () {
  // For reset the game using location.reload()
  location.reload();
});
