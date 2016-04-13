const getImage = function getImage(path, cb) {
  const img = new Image();
  img.src = path;
  img.addEventListener('load', cb);
  img.addEventListener('error', cb);
};

export default function preload(arrayOfImagePaths) {
  return arrayOfImagePaths.map(path => {
    return new Promise(resolve => getImage(path, resolve));
  });
}
