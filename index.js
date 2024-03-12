async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Couldn't retrieve data");
    }

    const data = await response.json();

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 6) {
      var pokemonSprite = data.sprites.other["official-artwork"].front_shiny;
    } else {
      var pokemonSprite = data.sprites.other["official-artwork"].front_default;
    }

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    // Show success icon
    document.getElementById("apiStatus").classList.remove("hidden");
    document.getElementById("apiError").classList.add("hidden");
  } catch (error) {
    console.error(error);

    // Show error icon
    document.getElementById("apiStatus").classList.add("hidden");
    document.getElementById("apiError").classList.remove("hidden");
  }
}
