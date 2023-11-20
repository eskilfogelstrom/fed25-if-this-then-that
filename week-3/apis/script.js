async function getData() {
  const url =
    "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29e06fd8ccmsh44c4a24e08fb5dfp1ff70fjsn945f5a944fa8",
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  let pEl = document.querySelector("#quote");
  pEl.innerText = result[0].text;
}

getData();
