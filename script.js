var cinema = {
    name: "Doges cinema",
    language: ["ქართული", "ინგლისური"],
    adress: { st doge },
    films: [ 
        {name: "Black Adam", imdb rating :4.5 },
        {name: "Halloween ends", imdb rating :4.5},
        {name: "The invitation", imdb rating :4.5}
    ]
}
document.write("<h3> Doges cinema-ს ოფიციალური ენაა </h>")
for (var i=0; i<= cinema.language.lenght; i++) {
    document.write(cinema.language[i] + "</br>" )
}
document.write("<h3> Doges cinema-ს ფილმები</h>")
for(var i= 0; i<cinema.films.lenght; i++){
    document.write(cinema.films.[i].name + "</br>")
    document.write(cinema.films.[i]. imdb rating + "</br>")
}