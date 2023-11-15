"use strict";

async function getData() {
  const url =
    "https://famous-quotes4.p.rapidapi.com/random?category=all&count=10";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29e06fd8ccmsh44c4a24e08fb5dfp1ff70fjsn945f5a944fa8",
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    let quotesEl = document.querySelector("#quotes");
    quotesEl.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      let quoteEl = createQuoteEl(result[i]);
      quotesEl.append(quoteEl);
    }
  } catch (error) {
    console.error(error);
  }
}

function createQuoteEl(quote) {
  let quoteEl = document.createElement("blockquote");
  let quoteTextEl = document.createElement("p");
  quoteTextEl.textContent = quote.text;
  let authorEl = document.createElement("footer");
  authorEl.textContent = quote.author;

  quoteEl.append(quoteTextEl);
  quoteEl.append(authorEl);

  return quoteEl;
}

getData();

let btnEl = document.querySelector("#quoteBtn");
btnEl.addEventListener("click", function () {
  getData();
});
