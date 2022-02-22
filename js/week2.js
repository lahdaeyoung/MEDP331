var t = 0,
    adjectives =
        ['TIDY',
            'TALL',
            'TERRIFIC',
            'DEEP',
            'CYNICAL',
            'ROYAL',
            'DARK',
            'ASPIRING',
            'ILL',
            'JAZZY',
            'SAFE',
            'BRASH',
            'COURAGEOUS',
            'QUIET',
            'RUTHLESS',
            'RAW',
            'CONFUSED'],
    animals =
        ['hatchlings',
            'pups',
            'babies',
            'calfs',
            'infants',
            'cubs',
            'kittens',
            'bobcats',
            'butterflies',
            'camels',
            'cats',
            'chickens',
            'clams',
            'cockroaches',
            'codfish',
            'crows',
            'deer',
            'dogs',
            'donkeys',
            'doves',
            'eagles',
            'elephants',
            'elk',
            'falcon'],
    food =
        ['jam',
            'butter chicken',
            'soup',
            'avocados',
            'eggs',
            'cheese',
            'chocolate',
            'fish',
            'mushrooms',
            'apples',
            'tomatos',
            'sushi',
            'kimchi',
            'peppers',
            'bacon'],
    feeling =
        ['Happy',
            'Scared',
            'Hopeful',
            'Interested',
            'Ambitious',
            'Nervous',
            'Optimistic',
            'Weary',
            'Pleased',
            'Bitter',
            'Concerned',
            'Cautious',
            'Suspicious',
            'Cheerful',
            'Grumpy'],

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
    return ' HE RISES FROM HIS ' + choose(adjectives) + 'BED' + 
    '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WITH THOUGHTS OF' + choose(animals) + 'IN HIS HEAD' + 
    '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HE EATS HIS ' + choose(food) + 'WITH LOTS OF BREAD' + 
    '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(feeling) + 'FOR THE DAY AHEAD';
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