var cinema = {
    name: "Doges cinema",
    language: ["ქართული", "ინგლისური"],
    adress:  "stdoge" ,
    films: [ 
        {name: "Black Adam", imdbrating :4.5 },
        {name: "Halloween ends", imdbrating :4.5},
        {name: "The invitation", imdbrating :4.5}
    ]
}
document.write("<h3> Doges cinema-ს ოფიციალური ენაა </h>")
for (var i=0; i<= cinema.language.length; i++) {
    document.write(cinema.language[i] + "</br>" )
}
document.write("<h3> Doges cinema-ს ფილმები</h>")
for(var i= 0; i<cinema.films.length; i++){
    document.write(cinema.films[i].name + "</br>")
    document.write(cinema.films[i].imdbrating + "</br>")
}




var user={}
user.name="Doge"
user.age=18,
user.display= function () {
    console.log(user.name);
    console.log(user.age);
}
var hasNameProp = "name" in user;
console.log(hasNameProp)

ეს გადაამოწმებს ეს სახელი არსებობს თუ არა უკვე იუზერში




ფუნქციის გაერთიანება ობიექტში-
function createUser (pName, pAge) {
    return{
        name: pName,
        age: pAge,
        displayInfo : function() {
            document.write("name"+ this.name + "age" + this.age);
        }
    }
}
var doge = createUser("Doge", 18);
doge.displayInfo();