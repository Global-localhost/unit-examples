'use strict';

class Image {
    constructor(name, mimeType, path) {
       this.name = name;
       this.mimeType = mimeType;
       this.path = path;
    }
}
const images = {
   'image001': new Image("EarthImage", "image/png", "/var/www/html/image/EarthImage.png"),
   'image002': new Image(),
   'image003': new Image(),
   'image004': new Image(),
   'image005': new Image(),
   'image006': new Image(),
};

exports.findByName = (name) => {
    return images[name];
};

exports.getAll = () => {
    return images;
};