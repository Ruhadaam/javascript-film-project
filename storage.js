function storage(url, title, director) {

    let filmsData = localStorage.getItem("films");
    let films = [];


    if (filmsData) {
        films = JSON.parse(filmsData);
    }


    let newFilm = {
        url: url.value,
        title: title.value,
        director: director.value
    };

    films.push(newFilm);


    localStorage.setItem("films", JSON.stringify(films));
}


function loadFilms() {
    let filmList = document.querySelector("#films");
    let filmsData = localStorage.getItem("films");
    let films = [];

    if (filmsData) {
        films = JSON.parse(filmsData);


        films.forEach(function (film) {
            filmList.innerHTML += `
                <tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail" style ="width:200px; height:300px;"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
                </tr>
            `;
        });
    }

}