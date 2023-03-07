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

// Itererer gjennom hvert element i movies-arrayet og utfører en funksjon for hvert element med hver film og dens index som et parameter
movies.forEach(function (movie, index) {
	// Initialiserer en variabel castMembers med en tom streng
	let castMembers = "";

	// Itererer gjennom hvert element i cast-arrayet til hver film og utfører en funksjon for hvert element
	movie.cast.forEach(function (castMember) {
		// Legger til en <p>-tag med navnet til hver skuespiller til castMembers-variabelen
		castMembers += `<p>${castMember}</p>`;
	});

	// Legger til HTML-kode til innholdet i "content" elementet
	content.innerHTML += `
	<a href="${window.location.origin}/film.html?index=${index}&title=${movie.title}" class="no-link">
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

// Legger til en "input" event-lytter på input-elementet "searchBox"
searchBox.addEventListener("input", filterTitleMovies);

// Funksjon som filtrerer filmer basert på tittel når brukeren søker
function filterTitleMovies() {
	// Henter søkeverdien fra input-elementet og endrer den til små bokstaver og fjerner eventuelle mellomrom i starten og slutten
	const searchValue = searchBox.value.toLowerCase().trim();

	// Filtrer filmer basert på søkeverdien
	const filteredMovies = movies.filter(function (movie) {
		// Henter tittelen på filmen og endrer den til små bokstaver
		const title = movie.title.toLowerCase();

		// Hvis søkeverdien ikke er tom og tittelen ikke inneholder søkeverdien, returnerer false (filmen blir filtrert ut)
		if (searchValue && !title.includes(searchValue)) {
			return false;
		}

		// Hvis søkeverdien er tom eller tittelen inneholder søkeverdien, returnerer true (filmen blir inkludert i det filtrerte resultatet)
		return true;
	});

	// Tømmer innholdet i "content" elementet
	content.innerHTML = "";

	// Itererer gjennom hvert element i movies-arrayet og utfører en funksjon for hvert element med hver film og dens index som et parameter
	filteredMovies.forEach(function (movie, index) {
		let castMembers = "";

		// Itererer gjennom hvert element i cast-arrayet til hver film og utfører en funksjon for hvert element
		movie.cast.forEach(function (castMember) {
			// Legger til en <p>-tag med navnet til hver skuespiller til castMembers-variabelen
			castMembers += `<p>${castMember}</p>`;
		});

		// Legger til HTML-kode til innholdet i "content" elementet
		content.innerHTML += `
		<a href="${window.location.origin}/film.html?index=${index}&title=${movie.title}" class="no-link">
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

// Legger til en "input" event-lytter på input-elementet "searchBox"
filterYear.addEventListener("input", filterYearMovies);

// Funksjon som filtrerer filmer basert på utgivelsesåret når brukeren endrer på range slideren
function filterYearMovies() {
	// Henter verdien (year) fra range-slideren
	const searchValue = filterYear.value;
	const filterYearRange = document.getElementById("filterYearRange");
	// Oppdaterer året ved range-slideren
	filterYearRange.innerHTML = searchValue;

	// Filtrer filmer basert på release_year, returnerer false hvis søkeverdien er høyere enn release_year (filmen blir filtrert ut)
	const filteredMovies = movies.filter(function (movie) {
		if (searchValue > movie.release_year) {
			return false;
		}

		return true;
	});

	content.innerHTML = "";

	// Itererer gjennom hvert element i movies-arrayet og utfører en funksjon for hvert element med hver film og dens index som et parameter
	filteredMovies.forEach(function (movie, index) {
		let castMembers = "";

		// Itererer gjennom hvert element i cast-arrayet til hver film og utfører en funksjon for hvert element
		movie.cast.forEach(function (castMember) {
			// Legger til en <p>-tag med navnet til hver skuespiller til castMembers-variabelen
			castMembers += `<p>${castMember}</p>`;
		});

		// Legger til HTML-kode til innholdet i "content" elementet
		content.innerHTML += `
		<a href="${window.location.origin}/film.html?index=${index}&title=${movie.title}" class="no-link">
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
