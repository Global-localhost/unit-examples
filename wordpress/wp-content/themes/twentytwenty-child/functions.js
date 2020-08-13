jQuery(function ($) {


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
            url: 'http://localhost:8045/api/planets/'+activePlanet[0].lastChild?.firstChild.attributes.alt.nodeValue
        }).done(function (resp) {
                console.log(resp);
                const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
                console.log(resp.name);
                wrapper.innerHTML = innerHtml(resp);
        }).error(function(xhr,resp) {
            console.log(resp);
            const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
            console.log(resp.name);
            wrapper.innerHTML = innerHtmlError();
        });
    });

    $('.elementor-swiper-button-prev').on('click', function (event) {
        let activePlanet = $('.elementor-image-carousel-wrapper > .elementor-image-carousel > .swiper-slide-prev');
        $.ajax({
            url: 'http://localhost:8045/api/planets/'+activePlanet[0].lastChild?.firstChild.attributes.alt.nodeValue
        }).done(function (resp) {
            console.log(resp);
            const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
            console.log(resp.name);
            wrapper.innerHTML = innerHtml(resp);
        }).error(function(xhr,resp) {
            console.log(resp);
            const wrapper = $('#ngxspace-main-infobox > .elementor-widget-container')[0];
            console.log(resp.name);
            wrapper.innerHTML = innerHtmlError();
        });
    });
});