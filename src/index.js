const DEFAULT_OPTIONS = {
  el: null,
  frequency: 5,
  interval: 3000
};

const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function tranformText(options) {
  options = Object.assign(DEFAULT_OPTIONS, options);

  if (typeof options.el === 'undefined') return;

  let innerInterval;

  setInterval(() => {
    let count = 0;
    innerInterval = setInterval(() => {
      if (count > options.frequency) {
        clearInterval(innerInterval);
      }
      const randomStr = new Array(randomLength())
        .fill('')
        .map(() => ALPHABET[randomLetterIdx()])
        .join('');

      options.el.innerText = randomStr;
      count++;
    }, 30);
  }, options.interval);
}

function randomGenerator(min, max) {
  return () => Math.floor(Math.random() * (max - min + 1) + min);
}

const randomLength = randomGenerator(3, 5);

const randomLetterIdx = randomGenerator(0, 25);

export default tranformText;
