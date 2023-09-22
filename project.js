const form = document.querySelector("#film-form");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const url = document.querySelector("#url");
const filmsTable = document.querySelector("#films");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");


eventListeners();
function eventListeners() {
    form.addEventListener("submit", add);
    document.addEventListener("DOMContentLoaded", loadFilms);
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearFilms);

}



function add(e) {
    if (title.value == "" || director.value == "" || url.value == "") {
        Swal.fire(
            'Dikkat!',
            'Lütfen tüm alanları doldurun ',
            'warning'
        )
        e.preventDefault();
    }
    else {
        e.preventDefault();
        const addStorage = new storage(url, title, director);

        const film = new Film(title, director, url);
        const titleValue = title.value;
        const directorValue = director.value;
        const urlValue = url.value;

        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerHTML = `<img src="${urlValue}" class="img-fluid img-thumbnail" style ="width:200px; height:300px;"> `;

        const td2 = document.createElement("td");
        td2.textContent = titleValue;

        const td3 = document.createElement("td");
        td3.textContent = directorValue;
        const td4 = document.createElement("td");
        td4.innerHTML = '<td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>';
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        filmsTable.appendChild(tr);
        Swal.fire(
            'Başarılı!',
            'Film başarıyla eklendi.',
            'success'
        )
    }


}


function deleteFilm(e) {
    let tr = e.target.parentElement.parentElement;
   if (tr.tagName === "TR") {
    tr.remove();
   }
    



    let films = JSON.parse(localStorage.getItem("films"));

    let deleteFilm = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
   

    films.forEach((element, index) => {

        if (element.title === deleteFilm) {
            console.log(`eşleşen bir değer bulundu. => ${element.title} `);
            films.splice(index, 1);

        }
    });
    localStorage.setItem("films", JSON.stringify(films));
    Swal.fire(
        'Başarılı!',
        'Film başarıyla silindi.',
        'success'
    )
}

function clearFilms(e) {
    let storage  = localStorage("films");
    localStorage.removeItem("films");
    Swal.fire(
        'Başarılı!',
        'Tüm filmler başarıyla silindi.',
        'success'
    )
    
    
}