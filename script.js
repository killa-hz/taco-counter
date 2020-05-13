const theTaco = document.getElementById('theTaco');

var tacoCount = 0;

theTaco.addEventListener('click', function (event) {
  console.log(event);
  tacoCount++;
  console.log(tacoCount);
  document.getElementById('tacoCount').innerHTML = tacoCount;
  if (tacoCount === 1) {
    document.getElementById('tacoPlural').innerHTML = ' taco';
  } else if (tacoCount > 1 && tacoCount <= 9) {
    document.getElementById('tacoPlural').innerHTML = ' tacos';
  } else if (tacoCount > 9) {
    document.getElementById('tacoPlural').innerHTML = ' tacos🔥';
  }
});
