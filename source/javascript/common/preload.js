/**
 * return callback when image has loaded or failed
 * @param path
 * @param cb
 */
const getImage = function getImage(path, cb) {
  const img = new Image();
  img.src = path;

  img.addEventListener('load', cb);
  img.addEventListener('error', cb);
};

/**
 * returns a promise for each image path in array
 * @param arrayOfImagePaths
 * @returns {*}
 */
export default function preload(arrayOfImagePaths) {
  return arrayOfImagePaths.map(path => new Promise(resolve => getImage(path, resolve)));
}
