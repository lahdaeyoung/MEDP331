var t = 0,
    material = ['SAND',
    'DUST',
    '<span style="color:transparent">L</span>EAVES',
    'PAPER',
    'TIN',
    'ROOTS',
    'BRICK',
    '<span style="color:transparent">ST</span>ONE',
    '<span style="color:transparent">DI</span>SCAR<span style="color:transparent">DED </span>CLOT<span style="color:transparent">HING</span>',
    'GLASS',
    '<span style="color:transparent">ST</span>EEL',
    '<span style="color:transparent">P</span>LAST<span style="color:transparent">IC</span>',
    'MUD',
    '<span style="color:transparent">BR</span>OK<span style="color:transparent">EN DISHES</span>',
    'WOOD',
    '<span style="color:transparent">ST</span>RAW',
    'WEED<span style="color:transparent">S</span>'],
    place = ['IN <span style="color:transparent">A GREEN, MOSSY</span> TERRA<span style="color:transparent">IN</span>',
    'IN A<span style="color:transparent">N OVERPOPU</span>LATE<span style="color:transparent">D</span> AREA',
    'BY THE SEA',
    'BY A<span style="color:transparent">N A</span>BAND<span style="color:transparent">ONED LAKE</span>',
    'IN <span style="color:transparent">A DESERTED </span>FACT<span style="color:transparent">ORY</span>',
    'IN DENS<span style="color:transparent">E WOODS</span>',
    'IN JAPAN',
    'AMONG <span style="color:transparent">SM</span>ALL <span style="color:transparent">H</span>ILLS',
    '<span style="color:transparent">IN S</span>OUT<span style="color:transparent">HERN F</span>RAN<span style="color:transparent">CE</span>',
    'AM<span style="color:transparent">ONG H</span>I<span style="color:transparent">GH MOUNTAINS</span>',
    'ON <span style="color:transparent">AN IS</span>LAND',
    'IN <span style="color:transparent">A C</span>OLD<span style="color:transparent">,</span> WIND<span style="color:transparent">Y CLIMATE</span>',
    'IN <span style="color:transparent">A P</span>LACE <span style="color:transparent">W</span>I<span style="color:transparent">TH BOTH HEAVY RAIN AND B</span>RIG<span style="color:transparent">HT SUN</span>',
    'IN <span style="color:transparent">A </span>DESERT<span style="color:transparent">ED</span> AIR<span style="color:transparent">PORT</span>',
    'I<span style="color:transparent">N A HOT CLIM</span>ATE',
    'I<span style="color:transparent">NSIDE A </span>MOUNT<span style="color:transparent">AIN</span>',
    'ON THE SEA',
    'IN <span style="color:transparent">MI</span>CHI<span style="color:transparent">GAN</span>',
    'IN <span style="color:transparent">HEAVY JUNGLE UNDER</span>GROWTH',
    'BY A RIVER',
    'AMONG OTHER <span style="color:transparent">HO</span>USES',
    'IN A DESERT<span style="color:transparent">ED</span> CHURCH',
    'IN A METRO<span style="color:transparent">POLIS</span>',
    'UNDERWATER'],
    light_source = ['<span style="color:transparent">CANDLES</span>',
    'ALL<span style="color:transparent"> AVAILABLE LIGHTING</span>',
    '<span style="color:transparent">ELECTRI</span>CITY',
    '<span style="color:transparent">N</span>A<span style="color:transparent">TURAL </span>LIGHT'],
    inhabitants = ['PEOPLE WHO SLEEP <span style="color:transparent">VERY LITTLE</span>', 'VEGETARIANS', 'HORSES AND BIRDS', '<span style="color:transparent">PEOPLE SPEAKING MANY</span> LANGUAGES WEARING <span style="color:transparent">LITTLE OR NO</span> CLOTHING', 'ALL RACES <span style="color:transparent">OF MEN</span> REPRESENTED <span style="color:transparent">WEARING PREDOMINANTLY RED CLOTHING</span>', 'CHILDREN AND OLD PEOPLE', 'VARIOUS BIRDS AND FISH', 'LOVERS', 'FISHERMEN AND FAMILIES', 'PEOPLE WHO ENJOY EATING <span style="color:transparent">together</span>', 'PEOPLE WHO EAT A GREAT DEAL', 'COLLECTORS OF ALL TYPES', 'FRIENDS AND ENEMIES', 'PEOPLE WHO <span style="color:transparent">SLEEP ALMOST ALL THE</span> TIME', 'VERY TALL PEOPLE', '<span style="color:transparent">AM</span>ER<span style="color:transparent">ICAN</span> INDIANS', 'LITTLE BOYS', 'PEOPLE <span style="color:transparent">FROM MANY WALKS</span> OF LIFE', '<span style="color:transparent">NEGROS WEARING</span> ALL COLORS', 'FRIENDS', '<span style="color:transparent">FRENCH AND GERMAN</span> SPEAKING PEOPLE', 'PEOPLE WHO LOVE <span style="color:transparent">TO READ</span>'];
    
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
        return '<span style="color:transparent">A HO</span>USE OF ' + choose(material) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(place) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:transparent">U</span>SING ' + choose(light_source) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:transparent">INHABITED</span> BY ' + choose(inhabitants);
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
