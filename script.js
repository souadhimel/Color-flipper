const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)})`;
});
Math.random will give you a floating point number between 0 (inclusive) and 1 (exclusive).

Multiplying that by 256 will give you a number in the range 0 (inclusive) through 256 (exclusive), but still floating point.

Taking the floor of that number will give you an integer between 0 and 255 (both inclusive).

It's the integer from 0 to 255 that you need to construct RGB values like rgb(72,25,183).
