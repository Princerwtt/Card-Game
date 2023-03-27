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

function shaffle() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
function displayCards() {
  const container = document.getElementById("output");
  const shuffled = shaffle();
  let output = "";
  shuffled.forEach((cards) => {
    output += `<span>${cards.rank}</span>`;
  });
  container.innerHTML = output;
  console.log(cards);
  console.log("clicked");
}

// Get a reference to the button element
let button = document.getElementById("draw");

// Add a click event listener to the button
button.addEventListener("click", function draw() {
  // Remove the last card from the array using pop()
  let userCard = cards.pop();
  let computerCard = cards.pop();
  if (userCard.value > computerCard.value) {
    let resuls = document.createElement("h1");
    resuls.textContent = "User Win The Game";
    document.body.appendChild(resuls);
    console.log("User win the game");
  } else if (userCard.value < computerCard.value) {
    let resuls2 = document.createElement("h1");
    resuls2.textContent = "Computer Win The Game";
    document.body.appendChild(resuls2);
    console.log("Computer win the game");
  } else {
    let resuls3 = document.createElement("h1");
    resuls3.textContent = "Game Draw";
    document.body.appendChild(resuls3);
    console.log("Game draw");
  }

  // Display the card on the page
  let userDiv = document.createElement("p");
  userDiv.textContent = userCard.rank + "User Card";
  document.body.appendChild(userDiv);

  let computerDiv = document.createElement("p");
  computerDiv.textContent = computerCard.rank + "Computer Card";
  document.body.appendChild(computerDiv);
  console.log("User Card", userCard);
  console.log("Computer Card", computerCard);
});

// Get a reference to the button element
let resetButton = document.getElementById("reset");

// Add a click event listener to the button
resetButton.addEventListener("click", function () {
  // Reload the page using location.reload()
  location.reload();
});
