'use strict';

class Planet {
    constructor(name, kind, text, lengthOfYear, lengthOfYearUnit) {
        this.name = name;
        this.kind = kind;
        this.text = text;
        this.lengthOfYear = lengthOfYear;
        this.lengthOfYearUnit = lengthOfYearUnit;
    }
}

const planets = {
    'earth': new Planet("Earth",
        "Terrestrial Planet",
        "Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
        365.25,
        "Days"),
    'mercury': new Planet("Mercury",
        "Terrestrial Planet",
        "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
        88,
        "Earth Days"),
    'mars': new Planet("Mars",
        "Terrestrial Planet",
        "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
        1.88,
        "Earth Years"),
    'venus': new Planet("Venus",
        "Terrestrial Planet",
        "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
        225,
        "Earth Days"),
    'saturn': new Planet("Saturn",
        "Gas Giant",
        "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
        29.45,
        "Earth Years")
};


exports.findByName = (name) => {
    return planets[name];
};

exports.getAll = () => {
    return planets;
};