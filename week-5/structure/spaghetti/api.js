export async function getQuestions() {
  let url = "data.json";
  let response = await fetch(url);
  let data = await response.json();

  return data.results;
}
