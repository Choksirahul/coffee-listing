const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

export async function getCoffeeListing() {
  const res = await fetch(`${API_URL}`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting coffee listing");

  const data = await res.json();

  return data;
}
