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

    let quoteEl = document.querySelector("#quote");
    quoteEl.textContent = result[0].text;

    let authorEl = document.querySelector("#author");
    authorEl.textContent = result[0].author;
  } catch (error) {
    console.error(error);
  }
}

getData();

let btnEl = document.querySelector("#quoteBtn");
btnEl.addEventListener("click", function () {
  getData();
});
