import {Carte} from '../../curs1/js/carte.js';

// import {Carte} from '../js/Carte.js';
 import {Carte as MyCarte} from '../module/carte.js';



let carte = new Carte('Poezii','Mihai Eminescu', 'Polirom',2007, 25);
carte.deschidCartea();
let mycarte = new MyCarte('Poezii','Mihai Eminescu', 'Polirom',2007, 25);
mycarte.deschidCartea();