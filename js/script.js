const movies = [
	{
		title: "The Shawshank Redemption",
		coverimage:
			"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
		release_year: 1994,
		genre: "Drama",
	},
	{
		title: "The Godfather",
		coverimage:
			"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		cast: ["Marlon Brando", "Al Pacino", "James Caan"],
		release_year: 1972,
		genre: "Crime",
	},
	{
		title: "The Dark Knight",
		coverimage: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
		release_year: 2008,
		genre: "Action",
	},
	{
		title: "Pulp Fiction",
		coverimage:
			"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
		release_year: 1994,
		genre: "Crime",
	},
	{
		title: "Forrest Gump",
		coverimage:
			"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
		release_year: 1994,
		genre: "Drama",
	},
	{
		title: "The Lord of the Rings: The Return of the King",
		coverimage:
			"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
		release_year: 2003,
		genre: "Fantasy",
	},
	{
		title: "Inception",
		coverimage: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
		release_year: 2010,
		genre: "Action",
	},
	{
		title: "Star Wars: Episode IV - A New Hope",
		coverimage:
			"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
		cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
		release_year: 1977,
		genre: "Sci-Fi",
	},
	{
		title: "Jurassic Park",
		coverimage: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
		cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
		release_year: 1993,
		genre: "Sci-Fi",
	},
	{
		title: "Titanic",
		coverimage:
			"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
		cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
		release_year: 1997,
		genre: "Romance",
	},
];

const content = document.querySelector(".content");

// Itererer gjennom hvert element i movies-arrayet og utf??rer en funksjon for hvert element med hver film og dens index som et parameter
movies.forEach(function (movie, index) {
	// Initialiserer en variabel castMembers med en tom streng
	let castMembers = "";

	// Itererer gjennom hvert element i cast-arrayet til hver film og utf??rer en funksjon for hvert element
	movie.cast.forEach(function (castMember) {
		// Legger til en <p>-tag med navnet til hver skuespiller til castMembers-variabelen
		castMembers += `<p>${castMember}</p>`;
	});

	// Legger til HTML-kode til innholdet i "content" elementet
	content.innerHTML += `
	<a href="${window.location.href}/film.html?index=${index}&title=${movie.title}" class="no-link">
	<div class="content-movie">
			<div class="content-movie__image">
				<img src=${movie.coverimage} height="200" width="auto" alt="" />
			</div>
			<div class="content-movie__info">
				<h2>${movie.title}</h2>
				<p>${movie.genre}</p>
				<span>${movie.release_year}</span>
				<div>${castMembers}</div>
			</div>
		</div>
	</a>
	`;
});

const searchBox = document.getElementById("searchbar");

// Legger til en "input" event-lytter p?? input-elementet "searchBox"
searchBox.addEventListener("input", filterTitleMovies);

// Funksjon som filtrerer filmer basert p?? tittel n??r brukeren s??ker
function filterTitleMovies() {
	// Henter s??keverdien fra input-elementet og endrer den til sm?? bokstaver og fjerner eventuelle mellomrom i starten og slutten
	const searchValue = searchBox.value.toLowerCase().trim();

	// Filtrer filmer basert p?? s??keverdien
	const filteredMovies = movies.filter(function (movie) {
		// Henter tittelen p?? filmen og endrer den til sm?? bokstaver
		const title = movie.title.toLowerCase();

		// Hvis s??keverdien ikke er tom og tittelen ikke inneholder s??keverdien, returnerer false (filmen blir filtrert ut)
		if (searchValue && !title.includes(searchValue)) {
			return false;
		}

		// Hvis s??keverdien er tom eller tittelen inneholder s??keverdien, returnerer true (filmen blir inkludert i det filtrerte resultatet)
		return true;
	});

	// T??mmer innholdet i "content" elementet
	content.innerHTML = "";

	// Itererer gjennom hvert element i movies-arrayet og utf??rer en funksjon for hvert element med hver film og dens index som et parameter
	filteredMovies.forEach(function (movie, index) {
		let castMembers = "";

		// Itererer gjennom hvert element i cast-arrayet til hver film og utf??rer en funksjon for hvert element
		movie.cast.forEach(function (castMember) {
			// Legger til en <p>-tag med navnet til hver skuespiller til castMembers-variabelen
			castMembers += `<p>${castMember}</p>`;
		});

		// Legger til HTML-kode til innholdet i "content" elementet
		content.innerHTML += `
		<a href="${window.location.href}/film.html?index=${index}&title=${movie.title}" class="no-link">
			<div class="content-movie">
				<div class="content-movie__image">
					<img src=${movie.coverimage} height="200" width="auto" alt="" />
				</div>
				<div class="content-movie__info">
					<h2>${movie.title}</h2>
					<p>${movie.genre}</p>
					<span>${movie.release_year}</span>
					<div>${castMembers}</div>
				</div>
			</div>
		</a>
		`;
	});
}

const filterYear = document.getElementById("filterYear");

// Legger til en "input" event-lytter p?? input-elementet "searchBox"
filterYear.addEventListener("input", filterYearMovies);

// Funksjon som filtrerer filmer basert p?? utgivelses??ret n??r brukeren endrer p?? range slideren
function filterYearMovies() {
	// Henter verdien (year) fra range-slideren
	const searchValue = filterYear.value;
	const filterYearRange = document.getElementById("filterYearRange");
	// Oppdaterer ??ret ved range-slideren
	filterYearRange.innerHTML = searchValue;

	// Filtrer filmer basert p?? release_year, returnerer false hvis s??keverdien er h??yere enn release_year (filmen blir filtrert ut)
	const filteredMovies = movies.filter(function (movie) {
		if (searchValue > movie.release_year) {
			return false;
		}

		return true;
	});

	content.innerHTML = "";

	// Itererer gjennom hvert element i movies-arrayet og utf??rer en funksjon for hvert element med hver film og dens index som et parameter
	filteredMovies.forEach(function (movie, index) {
		let castMembers = "";

		// Itererer gjennom hvert element i cast-arrayet til hver film og utf??rer en funksjon for hvert element
		movie.cast.forEach(function (castMember) {
			// Legger til en <p>-tag med navnet til hver skuespiller til castMembers-variabelen
			castMembers += `<p>${castMember}</p>`;
		});

		// Legger til HTML-kode til innholdet i "content" elementet
		content.innerHTML += `
		<a href="${window.location.href}/film.html?index=${index}&title=${movie.title}" class="no-link">
		<div class="content-movie">
			<div class="content-movie__image">
				<img src=${movie.coverimage} height="200" width="auto" alt="" />
			</div>
			<div class="content-movie__info">
				<h2>${movie.title}</h2>
				<p>${movie.genre}</p>
				<span>${movie.release_year}</span>
				<div>${castMembers}</div>
			</div>
		</div>
	</a>
	`;
	});
}
