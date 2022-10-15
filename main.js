const coffeeQuotesArr = [
  `I have measured out my life with coffee spoons.`,
  "Do you know how helpless you feel if you have a full cup of coffee in your hand and you start to sneeze?",
  `I judge a restaurant by the bread and by the coffee.`,
  `Kids are meeting in coffee shops and basements figuring out what's unsustainable in their communities. That's the future.`,
  `I put instant coffee in a microwave oven and almost went back in time.`,
  `Why did the hipster burn his tongue? Because he drank his coffee before it was cool.`,
  `I put coffee in my coffee.`,
  `When life gives you lemons, trade them for coffee.`,
  `Decaf coffee only works if you throw it at people.`,
];
const coffeeTipsArr = [
  `Buy whole bean coffee.`,
  `Store beans the proper way.`,
  `Re-use your coffee grounds.`,
  `Try Coffee Ice Cubes.`,
  `No fancy coffee machine, no problem.`,
  `Blast beans in a blender.`,
];
const coffeeRandomFacts = [
  `Coffee beans are technically seeds.`,
  `Brazil grows the most coffee in the world.`,
  `Only two U.S. states produce coffee.`,
  `Espresso means "Lorem Ipsum" in Italian.`,
  `The world's most expensive coffee can cost more than $600 a pound.`,
  `Multiple people have tried to ban coffee.`,
  `Finland is home to the biggest coffee lovers.`,
  `Coffee drinkers tend to live longer.`,
  `The Boston Tea Party helped popularize coffee in America.`,
];

const addLoremIpsum = (arr) => {
  const output = [];
  arr.map((str) => {
    const subOutput = [];
    const strArr = str.split(" ");
    strArr.map((str) => {
      if (str === "coffee") {
        str = "lorem coffee";
      } else if (str === "coffee,") {
        str = "lorem coffee,";
      } else if (str === "coffee.") {
        str = "lorem coffee.";
      } else if (str === "Coffee") {
        str = "Lorem-Latte";
      } else if (str === "Coffee,") {
        str = "Lorem-Latte,";
      } else if (str === "Coffee.") {
        str = "Lorem-Latte.";
      } else if (str === "bean") {
        str = "ipsum bean";
      } else if (str === "beans") {
        str = "ipsum beans";
      } else if (str === "bean,") {
        str = "ipsum bean,";
      } else if (str === "bean.") {
        str = "ipsum bean.";
      } else if (str === "Bean") {
        str = "Ipsum Bean";
      } else if (str === "Bean,") {
        str = "Ipsum Bean,";
      } else if (str === "Bean.") {
        str = "Ipsum Bean.";
      }
      subOutput.push(str);
    });
    output.push(subOutput.join(" "));
  });
  //  console.log(output);
  return output;
};

const loremCoffeeQuotesArr = addLoremIpsum(coffeeQuotesArr);
const loremCoffeeTipsArr = addLoremIpsum(coffeeTipsArr);
const loremCoffeeRandomFacts = addLoremIpsum(coffeeRandomFacts);

const tall = document.getElementById("tall");
const grande = document.getElementById("grande");
const venti = document.getElementById("venti");
const loremText = document.getElementById("lorem-text");

tall.addEventListener("click", () => {
  let numOfSentences = Math.floor(Math.random() * 3 + 3);
  const output = [];
  for (let i = 0; i < numOfSentences; i++) {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
      output.push(
        loremCoffeeQuotesArr[Math.floor(Math.random() * coffeeQuotesArr.length)]
      );
    } else if (num === 1) {
      output.push(
        loremCoffeeTipsArr[Math.floor(Math.random() * coffeeTipsArr.length)]
      );
    } else if (num === 2) {
      output.push(
        loremCoffeeRandomFacts[
          Math.floor(Math.random() * coffeeRandomFacts.length)
        ]
      );
    }
  }
  console.log(output);
  loremText.textContent = output.join(" ");
});

grande.addEventListener("click", () => {
  let numOfSentences = Math.floor(Math.random() * 3 + 8);
  const output = [];
  for (let i = 0; i < numOfSentences; i++) {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
      output.push(
        loremCoffeeQuotesArr[Math.floor(Math.random() * coffeeQuotesArr.length)]
      );
    } else if (num === 1) {
      output.push(
        loremCoffeeTipsArr[Math.floor(Math.random() * coffeeTipsArr.length)]
      );
    } else if (num === 2) {
      output.push(
        loremCoffeeRandomFacts[
          Math.floor(Math.random() * coffeeRandomFacts.length)
        ]
      );
    }
  }
  console.log(output);
  loremText.textContent = output.join(" ");
});

venti.addEventListener("click", () => {
  let numOfSentences = Math.floor(Math.random() * 3 + 11);
  const output = [];
  for (let i = 0; i < numOfSentences; i++) {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
      output.push(
        loremCoffeeQuotesArr[Math.floor(Math.random() * coffeeQuotesArr.length)]
      );
    } else if (num === 1) {
      output.push(
        loremCoffeeTipsArr[Math.floor(Math.random() * coffeeTipsArr.length)]
      );
    } else if (num === 2) {
      output.push(
        loremCoffeeRandomFacts[
          Math.floor(Math.random() * coffeeRandomFacts.length)
        ]
      );
    }
  }
  console.log(output);
  loremText.textContent = output.join(" ");
});
