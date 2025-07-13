function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
const button = document.getElementById('clickBtn');
const display = document.getElementById('clickCount');

button.addEventListener('click', function() {
  const currentCount = counter();
  display.textContent = `Clicks: ${currentCount}`;
});
