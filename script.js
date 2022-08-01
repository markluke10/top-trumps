const pokedex = [
    { id: 1,
    name: "Bulbasaur",
    HP: 45,
    Attack: 49,
    Defense: 49,
    SpAttack: 65,
    SpDefense: 65,
    Speed: 45,
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
    },
    { id: 2,
    name: "Ivysaur",
    HP: 60,
    Attack: 62,
    Defense: 63,
    SpAttack: 80,
    SpDefense: 80,
    Speed: 60,
    description:
      "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
    },
    { id: 3,
    name: "Venusaur",
    HP: 80,
    Attack: 82,
    Defense: 83,
    SpAttack: 100,
    SpDefense: 100,
    Speed: 80,
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
    },
    { id: 4,
    name: "Charmander",
    HP: 39,
    Attack: 52,
    Defense: 43,
    SpAttack: 60,
    SpDefense: 50,
    Speed: 65,
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
    },
    { id: 5,
    name: "Charmeleon",
    HP: 58,
    Attack: 64,
    Defense: 58,
    SpAttack: 80,
    SpDefense: 65,
    Speed: 80,
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
    },
    { id: 6,
    name: "Charizard",
    HP: 78,
    Attack: 84,
    Defense: 78,
    SpAttack: 109,
    SpDefense: 85,
    Speed: 100,
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
    },
    { id: 7,
    name: "Squirtle",
    HP: 44,
    Attack: 48,
    Defense: 65,
    SpAttack: 50,
    SpDefense: 64,
    Speed: 43,
    description:
      "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
    },
    { id: 8,
    name: "Wartortle",
    HP: 59,
    Attack: 63,
    Defense: 80,
    SpAttack: 65,
    SpDefense: 80,
    Speed: 58,
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
    },
    { id: 9,
    name: "Blastoise",
    HP: 79,
    Attack: 83,
    Defense: 100,
    SpAttack: 85,
    SpDefense: 105,
    Speed: 78,
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
    },
    { id: 10,
    name: "Caterpie",
    HP: 45,
    Attack: 30,
    Defense: 35,
    SpAttack: 20,
    SpDefense: 20,
    Speed: 45,
    description:
      "Its body is soft and weak. In nature, its perpetual fate is to be seen by others as food.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
    },
    { id: 11,
    name: "Metapod",
    HP: 50,
    Attack: 20,
    Defense: 55,
    SpAttack: 25,
    SpDefense: 25,
    Speed: 30,
    description:
      "Its hard shell doesn’t crack a bit even if Pikipek pecks at it, but it will tip over, spilling out its insides.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png",
    },
    { id: 12,
    name: "Butterfree",
    HP: 60,
    Attack: 45,
    Defense: 50,
    SpAttack: 90,
    SpDefense: 80,
    Speed: 70,
    description:
      "Nectar from pretty flowers is its favorite food. In fields of flowers, it has heated battles with Cutiefly for territory.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png",
    },
    { id: 13,
    name: "Weedle",
    HP: 40,
    Attack: 35,
    Defense: 30,
    SpAttack: 20,
    SpDefense: 20,
    Speed: 50,
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png",
    },
    { id: 14,
    name: "Kakuna",
    HP: 45,
    Attack: 25,
    Defense: 50,
    SpAttack: 25,
    SpDefense: 25,
    Speed: 35,
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png",
    },
    { id: 15,
    name: "Beedrill",
    HP: 65,
    Attack: 90,
    Defense: 40,
    SpAttack: 45,
    SpDefense: 80,
    Speed: 75,
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png",
    },
    { id: 16,
    name: "Pidgey",
    HP: 40,
    Attack: 45,
    Defense: 40,
    SpAttack: 35,
    SpDefense: 35,
    Speed: 56,
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png",
    },
    { id: 17,
    name: "Pidgeotto",
    HP: 63,
    Attack: 60,
    Defense: 55,
    SpAttack: 50,
    SpDefense: 50,
    Speed: 71,
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png",
    },
    { id: 18,
    name: "Pidgeot",
    HP: 83,
    Attack: 80,
    Defense: 75,
    SpAttack: 70,
    SpDefense: 70,
    Speed: 101,
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png",
    },
    { id: 19,
    name: "Rattata",
    HP: 30,
    Attack: 56,
    Defense: 35,
    SpAttack: 25,
    SpDefense: 35,
    Speed: 72,
    description:
      "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png",
    },
    { id: 20,
    name: "Raticate",
    HP: 55,
    Attack: 81,
    Defense: 60,
    SpAttack: 50,
    SpDefense: 70,
    Speed: 97,
    description:
      "Its whiskers are essential for maintaining its balance. No matter how friendly you are, it will get angry and bite you if you touch its whiskers.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png",
    },
    { id: 21,
    name: "Spearow",
    HP: 40,
    Attack: 60,
    Defense: 30,
    SpAttack: 31,
    SpDefense: 31,
    Speed: 70,
    description:
      "Due to its short wings, it can’t fly long distances. It wanders about restlessly and pecks at bug Pokémon.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png",
    },
    { id: 22,
    name: "Fearow",
    HP: 65,
    Attack: 90,
    Defense: 65,
    SpAttack: 61,
    SpDefense: 61,
    Speed: 100,
    description:
      "In Alola, fish Pokémon are its prey. It can be seen circling above the ocean searching for food.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png",
    },
    { id: 23,
    name: "Ekans",
    HP: 35,
    Attack: 60,
    Defense: 44,
    SpAttack: 40,
    SpDefense: 54,
    Speed: 55,
    description:
      "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png",
    },
    { id: 24,
    name: "Arbok",
    HP: 60,
    Attack: 95,
    Defense: 69,
    SpAttack: 65,
    SpDefense: 79,
    Speed: 80,
    description:
      "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png",
    },
    { id: 25,
    name: "Pikachu",
    HP: 35,
    Attack: 55,
    Defense: 40,
    SpAttack: 50,
    SpDefense: 50,
    Speed: 90,
    description:
      "While sleeping, it generates electricity in the sacs in its cheeks. If it’s not getting enough sleep, it will be able to use only weak electricity.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
    },
    { id: 26,
    name: "Raichu",
    HP: 60,
    Attack: 90,
    Defense: 55,
    SpAttack: 90,
    SpDefense: 80,
    Speed: 110,
    description:
      "Because so many Trainers like the way Pikachu looks, you don’t see this Pokémon very often.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png",
    },
    { id: 27,
    name: "Sandshrew",
    HP: 50,
    Attack: 75,
    Defense: 85,
    SpAttack: 20,
    SpDefense: 30,
    Speed: 40,
    description:
      "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png",
    },
    { id: 28,
    name: "Sandslash",
    HP: 75,
    Attack: 100,
    Defense: 110,
    SpAttack: 45,
    SpDefense: 55,
    Speed: 65,
    description:
      "Thanks to its thick claws, it’s good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png",
    },
    { id: 29,
    name: "Nidoran♀",
    HP: 55,
    Attack: 47,
    Defense: 52,
    SpAttack: 40,
    SpDefense: 40,
    Speed: 41,
    description:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png",
    },
    { id: 30,
    name: "Nidorina",
    HP: 70,
    Attack: 62,
    Defense: 67,
    SpAttack: 55,
    SpDefense: 55,
    Speed: 56,
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/030.png",
    },
    ]

  // -------------------------------------------------------------
  // Identify Players cards
  // -------------------------------------------------------------
  let p1Cards = [];
  let p2Cards = [];
  // console.log(p1Cards)
    
  // -------------------------------------------------------------
  // Shuffle Cards
  // -------------------------------------------------------------
  function shuffleCards () { pokedex.sort(() => Math.random() - 0.5); console.log(pokedex); return pokedex};
  
  shuffleCards();
  
  // -------------------------------------------------------------
  // Allocating Shuffled Cards to each Player
  // -------------------------------------------------------------
  function dealingPlayerCard() {
    
    for(i=0;i<30;i++){
      if([i] % 2 == 0){
        p1Cards.push(pokedex[i])
      } else {
        p2Cards.push(pokedex[i])
      }
    }
  }
  dealingPlayerCard()
  console.log(p1Cards)
  console.log(p2Cards)
  
  // -------------------------------------------------------------
  // Player 1 & 2 No. of Cards Held
  // -------------------------------------------------------------

    let p1NoOfCards = document.getElementById("p1NoOfCards")
    let p2NoOfCards = document.getElementById("p2NoOfCards")
    let totalPlayer1Cards = p1Cards.length
    let totalPlayer2Cards = p2Cards.length

  function cardsHeld() {
    p1NoOfCards.innerText = ("Total No. of Card: " + totalPlayer1Cards);
    p2NoOfCards.innerText = ("Total No. of Card: " + totalPlayer2Cards);
  }
  cardsHeld()

  // -------------------------------------------------------------
  // Current cards in play
  // -------------------------------------------------------------
  let p1CurrentlyInPlay = [];
  let p2CurrentlyInPlay = [];

  // -------------------------------------------------------------
  // Place a Card on the Board
  // -------------------------------------------------------------

  p1CurrentlyInPlay = p1Cards.shift()
  p2CurrentlyInPlay = p2Cards.shift()

  // -------------------------------------------------------------
  // Getting a Current card into play
  // -------------------------------------------------------------
  let p1CardDisplay = document.getElementById("cardP1Img")
  let p2CardDisplay = document.getElementById("cardP2Img")

  function player1Stats(){
    p1CardDisplay.src = `${p1CurrentlyInPlay.img}`
    document.getElementById("name1").innerText = ("Name: " + p1CurrentlyInPlay.name);
    document.getElementById("HP1").innerText = ("HP: " + p1CurrentlyInPlay.HP);
    document.getElementById("Attack1").innerText = ("Attack: " + p1CurrentlyInPlay.Attack);
    document.getElementById("Defense1").innerText = ("Defense: " + p1CurrentlyInPlay.Defense);
    document.getElementById("Speed1").innerText = ("Speed: " + p1CurrentlyInPlay.Speed);
    document.getElementById("Description1").innerText = ("Description: " + p1CurrentlyInPlay.description);
  }
  function player2Stats(){
    p2CardDisplay.src = `${p2CurrentlyInPlay.img}`
    document.getElementById("name2").innerText = ("Name: " + p2CurrentlyInPlay.name);
    document.getElementById("HP2").innerText = ("HP: " + p2CurrentlyInPlay.HP);
    document.getElementById("Attack2").innerText = ("Attack: " + p2CurrentlyInPlay.Attack);
    document.getElementById("Defense2").innerText = ("Defense: " + p2CurrentlyInPlay.Defense);
    document.getElementById("Speed2").innerText = ("Speed: " + p2CurrentlyInPlay.Speed);
    document.getElementById("Description2").innerText = ("Description: " + p2CurrentlyInPlay.description);
  }
  player1Stats()
  player2Stats()
  console.log(p1CurrentlyInPlay)
  console.log(p2CurrentlyInPlay)

  // -------------------------------------------------------------
  // Creating a Blank Card
  // -------------------------------------------------------------
  // let p2BackOfCardCardDisplay = document.getElementById("blankCardImg")
  // let img1 = (src="\Images\back_of_image.jpg")
  
  // function blankCard(){
  //   document.getElementById("cardP2") = `${p2BackOfCardCardDisplay.img1}`
  // }
  // blankCard()
  // function buildComputerCard() {
  //   // function to display the current card of the computer
  //   computerCardDiv.classList.toggle("flip");
  
  //   var computerCardBack = document.getElementById("computerCardBack");
  //   computerCardBack.style.height = $(playercard).height() + "px";
  //   var computercardBackHeader=document.getElementById("computercardBackHeader");
  //   computercardBackHeader.innerHTML =  currentComputerCard[0];
        // turn over computer card
        // computerCardDiv.classList.toggle("flip");

  // -------------------------------------------------------------
  // Comparing attributes between Players Cards
  // -------------------------------------------------------------
  hpBtn.addEventListener('click', compareHPAtt);
  attackBtn.addEventListener('click', compareAttackAtt);
  DefenseBtn.addEventListener('click', compareDefenseAtt);
  speedBtn.addEventListener('click', compareSpeedAtt);
  
  function compareHPAtt() {
    if (p1CurrentlyInPlay.HP > p2CurrentlyInPlay.HP) {
      "Player 1 Wins"
      console.log("Player1 Wins")
    } else if (p1CurrentlyInPlay.HP < p2CurrentlyInPlay.HP) {
      "Player 2 Wins"
      console.log("Player2 Wins")
    } else {
      "Draw"
      console.log("Draw")
    }
  }
  function compareAttackAtt() {
    if (p1CurrentlyInPlay.Attack > p2CurrentlyInPlay.Attack) {
      "Player 1 Wins"
      console.log("Player1 Wins")
    } else if (p1CurrentlyInPlay.Attack < p2CurrentlyInPlay.Attack) {
      "Player 2 Wins"
      console.log("Player2 Wins")
    } else {
      "Draw"
      console.log("Draw")
    }
  }
  function compareDefenseAtt() {
    if (p1CurrentlyInPlay.Defense > p2CurrentlyInPlay.Defense) {
      "Player 1 Wins"
      console.log("Player1 Wins")
    } else if (p1CurrentlyInPlay.Defense < p2CurrentlyInPlay.Defense) {
      "Player 2 Wins"
      console.log("Player2 Wins")
    } else {
      "Draw"
      console.log("Draw")
    }
  }
  function compareSpeedAtt() {
    if (p1CurrentlyInPlay.Speed > p2CurrentlyInPlay.Speed) {
      buttonPressed("Player 1 Wins")
      console.log("Player1 Wins")
    } else if (p1CurrentlyInPlay.Speed < p2CurrentlyInPlay.Speed) {
      buttonPressed("Player 2 Wins")
      console.log("Player2 Wins")
    } else {
      buttonPressed("Draw")
      console.log("Draw")
    }
  }


  // -------------------------------------------------------------
  // Where to allocate Cards after Attribute of Button Pressed 
  // -------------------------------------------------------------

  function buttonPressed(outcome){
    if(outcome === "Player1 Wins"){
      console.log("Player 1 Wins")
      p1Cards.push(p1CurrentlyInPlay)
      p1Cards.push(p2CurrentlyInPlay)
      totalPlayer1Cards = p1Cards.length;
      totalPlayer2Cards = p2Cards.length;
      p1Cards.length += 1
      p2Cards.length -= 1
    } else if(outcome === "Player2 Wins"){
      console.log("Player 2 Wins")
      p2Cards.push(p2CurrentlyInPlay)
      p2Cards.push(p1CurrentlyInPlay)
      totalPlayer2Cards = p2Cards.length;
      totalPlayer1Cards = p1Cards.length;
      p2Cards.length += 1
      p1Cards.length -= 1
    } else {
      console.log("Draw")
      p1Cards.length += 1
      p2Cards.length -= 0

    }
  }

  buttonPressed()



  // -------------------------------------------------------------
  // Conculsion of the Game
  // -------------------------------------------------------------
  
  // function endGame(){
  //   if(p1Cards.length < 30 && p2Cards.length < 30){
  //     continueGame()
  //   } else if (p1Cards.length == 30){
  //     return "Player 1 has WON!!!"
  //   } else {
  //     return "Player 2 has WON!!!"
  //   }
  // }
