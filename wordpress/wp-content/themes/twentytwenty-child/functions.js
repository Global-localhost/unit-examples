jQuery(function ($) {

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
        'mercury': new Planet("Mercury",
            "Terrestrial Planet",
            "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
            88,
            "Earth Days"),
        'venus': new Planet("Venus",
            "Terrestrial Planet",
            "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
            225,
            "Earth Days"),
        'earth': new Planet("Earth",
            "Terrestrial Planet",
            "Earth—our home planet—is the only place we know of so far that's inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
            365.25,
            "Days"),
        'mars': new Planet("Mars",
            "Terrestial Planet",
            "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather, plus canyons and extinct volacnoes - evidence it once had an even more active past.",
            687,
            "Earth Days"),
        'jupiter': new Planet("Jupiter",
            "Gas Giant",
            "Twice as massive as all the other planets combined. Back in 1610 when Galileo Galilei found the first moons beyond Earth that changed the way we see the universe. It's familiar stripes and swirls are actualy cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The Great Red Spot you see is a giant storm bigger than Earth which has been raging for hundreds of years.",
            13.25,
            "Earth Years"),
        'saturn': new Planet("Saturn",
            "Gas Giant",
            "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's. Saturn is a massive ball made mostly of hydrogen and helium.",
            29.45,
            "Earth Years"),
        'uranus': new Planet("Uranus",
            "Ice Giant",
            "The first planet discovered with a telescope, Uranus found by Wiiliam Herschel in 1781. It's an icy giant nearly four times the size of Earth. Uranus has 27 known moons named after literary characters, and 13 rings - just like Saturn, Jupiter and Neptune. ",
            84.07,
            "Earth Years"),
        'pluto': new Planet("Pluto",
            "Terrestrial Planet",
            "Pluto is the smallest of the planets, measuring just about half the width of the United States. It's about 3.6 billion miles from the Sun and has five moons. Pluto and its largest moon, Charon, are so close in size that they orbit each other like a double planet system. Pluto's temperature averages -387°F, making it too cold to sustain life.",
            248.03,
            "Earth Years")
    };


    let innerHtml = (resp) => {
      return '<h2>'+resp.name+'</h2><p class="ngxspace-planet-kind">'+resp.kind+'</p>' +
          '<p class="ngxspace-planet-text">'+resp.text+'</p><p>Length of Year: <span class="ngxspace-planet-years">'+resp.lengthOfYear+'</span>' +
          '<span class="ngxspace-planet-unit">'+resp.lengthOfYearUnit+'</span></p><p>(c) by NASA\'s Eye</p>';
    };

    let innerHtmlError = () => {
        return '<h2>Huston, we have a problem!</h2>';
    };

    console.log('transition ended');
    $('.elementor-swiper-button').on('click', function (event) {
    });

    $('.elementor-swiper-button-next').on('click', function (event) {
        let activePlanet = $('.elementor-image-carousel-wrapper > .elementor-image-carousel > .swiper-slide-next');
        $.ajax({
            url: 'http://space.nginx.org:8086/api/planets/'+activePlanet[0].lastChild?.firstChild.attributes.alt.nodeValue
        }).done(function (resp) {
                console.log(resp);
                const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
                console.log(resp.name);
                wrapper.innerHTML = innerHtml(resp);
        }).error(function(xhr,resp) {
            console.log(resp);
            const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
            console.log(`fallback: ${activePlanet[0].lastChild?.firstChild.attributes.alt.nodeValue}`);
            wrapper.innerHTML = innerHtmlError();
        });
    });

    $('.elementor-swiper-button-prev').on('click', function (event) {
        let activePlanet = $('.elementor-image-carousel-wrapper > .elementor-image-carousel > .swiper-slide-prev');
        $.ajax({
            url: 'http://space.nginx.org:8086/api/planets/'+activePlanet[0].lastChild?.firstChild.attributes.alt.nodeValue
        }).done(function (resp) {
            console.log(resp);
            const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
            console.log(resp.name);
            wrapper.innerHTML = innerHtml(resp);
        }).error(function(xhr,resp) {
            console.log(resp);
            const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
            console.log(resp.name);
            console.log(`fallback: ${activePlanet[0].lastChild?.firstChild.attributes.alt.nodeValue}`);
            wrapper.innerHTML = innerHtmlError();
        });
    });
});