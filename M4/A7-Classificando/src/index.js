class Artist {
    constructor(name, stylesMusic, country) {
        this.name = name;
        this.stylesMusic = stylesMusic;
        this.country = country;
    }

    sing(){
        console.log("The artist is singing");
    }
}

class Grammy extends Artist {
    constructor(name, stylesMusic, country, year, category) {
        super(name);
        super(stylesMusic);
        super(country);
        this.year = year;
        this.category = category;
}

    award(){
        console.log("The artist is receiving a Grammy award");
    }



}

const artist1 = new Artist("Shakira", "Pop", "Colombia");
const artist2 = new Artist("Justin Bieber", "Pop", "Canada");
const grammy1 = new Grammy("Taylor Swift", "Pop", "USA", 2023, "Album of the Year");
const grammy2 = new Grammy("Billie Eilish", "Pop", "USA", 2023, "Record of the Year");