const el = document.querySelector('.grid');
const images = getImages(1000);

// Append nodes.
for (const node of createNodes(images)) {
  el.appendChild(node);
}

// Creates an array of random images.
function getImages(length) {
  return Array.from({ length }).map((v, i) => {
    const { width, height } = getRandomDimensions();

    return `https://loremflickr.com/${width}/${height}?random=${i}`;
  });
}

// Creates an array of divs with images.
function createNodes(images) {
  return images.map(src => {
    const img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';

    const div = document.createElement('div');
    div.appendChild(img);

    return div;
  });
}

// Returns an object with random with and height.
function getRandomDimensions() {
  return {
    width: getRandomInt(400, 800),
    height: getRandomInt(400, 800),
  };
}

// Returns a random integer between min (inclusive) and max (inclusive).
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
