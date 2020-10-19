'use strict';

class Event {
    constructor(name, date, text, imageUrl) {
       this.name = name;
       this.data = date;
       this.text = text;
       this.imageUrl = imageUrl;
    }
}
const events = {
    '1': new Event("Mars behind the moon", "2020-02-01",
    "As the waning crescent moon rises in the small hours of this morning, telescope and binocular users will be preparing for an unusual event: The moon will glide in front of reddish, starlike Mars for viewers across North America, Central America, extreme northern South America, Cuba and Haiti.",
    "/api/space/images/image009.jpeg"),
    '2': new Event("Biggest full moon of the year", "2020-04-07", "On April 7 at 2 p.m. EDT (1900 GMT), the moon will arrive at its closest point to the Earth in 2020: an extreme perigee distance of 221,772 miles (356,907 kilometers) away. Eight hours and 35 minutes later, the moon will officially turn full. In addition, the near coincidence of this full moon with perigee will result in a dramatically large range of high and low ocean tides. copyright(https://www.space.com/)", ""),
    '3': new Event(""),
    '4': new Event(""),
    '5': new Event(""),
};

exports.findById = (id) => {
    return events[id];
};

exports.getAll = () => {
    return events;
};