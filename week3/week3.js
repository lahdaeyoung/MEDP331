
var t = 0,
adjective = ['TIDY',
    'TERRIFIC',
    '<span style="color:transparent">T</span>ALL',
    'STRIPED',
    'ROYAL',
    'DARK',
    'ASPIRING',
    '<span style="color:transparent">J</span>AZZY',
    '<span style="color:transparent">COU</span>RAGE<span style="color:transparent">OUS </span>',
    'TAN',
    '<span style="color:transparent">DE</span>CENT',
    '<span style="color:transparent">W</span>ARM',
    'FUZZY',
    '<span style="color:transparent">PAIN</span>FUL',
    'JUMPY',
    '<span style="color:transparent">TY</span>PICAL',
    'SO<span style="color:transparent">LID</span>'],
animals = ['HATCH<span style="color:transparent">LINGS</span>',
    'BUTTER<span style="color:transparent">FLIES',
    'CROWS',
    'DON<span style="color:transparent">KEYS',
    'COD<span style="color:transparent">FISH<span style="color:transparent">ES</span>',
    'BABY <span style="color:transparent">ELEPHANTS</span>',
    'EAGLES',
    'COCK<span style="color:transparent">ROACHES</span>',
    '<span style="color:transparent">CA</span>MELS ',
    'ELK',
    'CHICK<span style="color:transparent">ENS </span>',
    'DEER',
    'DOGS',
    'FAL<span style="color:transparent">CON</span>',
    'BOB<span style="color:transparent">CATS</span>',
    'CLAMS',
    'DO<span style="color:transparent">VES</span>',
    'ELK'],
food = ['<span style="color:transparent">JAM</span>',
    'BUTTER<span style="color:transparent"> CHICKEN</span>',
    '<span style="color:transparent">TOMA</span>TOES',
    '<span style="color:transparent">CHOCO</span>LATE',
    'BACON',
    '<span style="color:transparent">MUSH</span>ROOMS',
    'AVOCADOS',
    'SUSHI',
    'SOUP',
    'APP<span style="color:transparent">LES</span>',
    'KIM<span style="color:transparent">CHI</span>',
    'PEPPERS'],
feelings = ['HAPPY',
    '<span style="color:transparent">SCA</span>RED',
    'HOPE<span style="color:transparent">FUL</span>',
    'INTEREST<span style="color:transparent">ED</span>',
    'AM<span style="color:transparent">BITIOUS</span>',
    'NERVOUS',
    'OPTIMISTIC',
    '<span style="color:transparent">W</span>EARY',
    '<span style="color:transparent">PL</span>EASED',
    'BITTER',
    'CONCERNED',
    'CAUTIOUS',
    'SUS<span style="color:transparent">PICIOUS</span>',
    'CHEER<span style="color:transparent">FUL</span>',
    'GRUMP<span style="color:transparent">Y</span>'];

function rand_range(maximum) {
"use strict";
return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
"use strict";
return array[rand_range(array.length - 1)];
}
function stanza() {
"use strict";
return '<span style="color:transparent">THE KING </span>RISES FROM HIS  ' + 
choose(adjective) + 
' BED' + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'WITH <span style="color:transparent">THOUGHTS</span> OF ' + 
choose(animals) + ' IN HIS HEAD' + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HE <span style="color:transparent">EATS</span> HIS ' + 
choose(food) + ' WITH <span style="color:transparent">LOTS OF BREAD</span>' + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
choose(feelings) + ' FOR THE DAY AHEAD...';
}
function litany() {
"use strict";
var last, text, main = document.getElementById('main');
if (8 > t) {
    t += 1;
} else {
    main.removeChild(document.getElementById('main').firstChild);
}
last = document.createElement('div');
last.innerHTML = stanza();
main.appendChild(last);
}
function produce_litany() {
"use strict";
litany();
setInterval(litany, 5000);
}

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});