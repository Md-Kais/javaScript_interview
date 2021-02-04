let fucjers = [
    { id: 14, name: 'Rohit' },
    { id: 24, name: 'Rohita' },
    { id: 34, name: 'Rohits' },
    { id: 44, name: 'Rohitz' },
]
let name = fucjers.map((element) => element.name);
console.log(name);//using by map and arrow function.//[ 'Rohit', 'Rohita', 'Rohits', 'Rohitz' ]
let ids = fucjers.map((element) => element.id);
let mofo = fucjers.filter((x) => x.id > 30);console.log(mofo);//hello mofo
let mofo1 = fucjers.find((x) => x.id > 30);
console.log(mofo1);

