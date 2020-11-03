
// ARRAY OPERATIONS //
console.log("---------ARRAY OPERATIONS---------")
// 1.Head
const datos = {
    name:"ana",
    surname:"berove",
    age:34,
}

const head = ({name}) => name;
console.log(head(datos))

// 2.Tail



const Fruits = ["manzana","pera","platano"];
const [firstItem, ...restItems] = Fruits;

const tail = () => console.log(restItems);

tail()


// 3.Init

var autos = ["audi","mercedes","seat"];
var autosAlemania =   autos.slice(0, 2);


const init = () => console.log(autosAlemania)

init()

// 4.Last

var nombres= ["ana", "sofia", "antonio"];

var last = nombres.pop()

console.log(last)




// CONCAT  //
console.log("---------CONCAT---------")
const concat = <T, G>(a: T[], b: G[]) => [...a, ...b];
console.log(concat([1,2,3], ["hola " , "que", "tal"]))


// CLONE MERGE //
// 1.Clone
console.log("---------CLONE---------")
const source = { name: "Maria", surname: "Ibañez", country: "SPA" };

const shallowClone = {...source};
const deepClone = JSON.parse(JSON.stringify(source));
console.log ("shallowClone" ,shallowClone);
console.log( "deepClone",deepClone)

// 
// 2.Merge
console.log("---------MERGE---------")
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
const merge = (target, source) =>{
    return {...target, ...source}
}

console.log(merge(a,b))

// READ BOOKS //
console.log("---------READ BOOKS---------")
const  books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books) {
    for (let i = 0; i < books.length; i++) {
        
        if (books[i].isRead === true) {
            console.log( books[i].title + "  " + "-- este libro se ha leido")
        } else {
            console.log( books[i].title + "  " + "-- este  libro no se ha leido")
        }
        
    }

}
isBookRead(books)


// SLOT MACHINE //
console.log("---------SLOT MACHINE---------");

const generateNumber = () => Math.round(Math.random()*10);


const generateBoolean = () => generateNumber()>5;

class SlotMachine {
    constructor() {
        this.coins = 0;
    }
    play() {
        this.coins++;
        const result1 = generateBoolean();
        const result2 = generateBoolean();
        const result3 = generateBoolean();
        console.log(`${result1} | ${result2} | ${result3}`);
        if (result1 && result2 && result3){
            console.log(`Felicidades !!!.Has ganado ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log("prueba otra vez");
        }
    }
}

function startPlay() {
    const machine1 = new SlotMachine();
    for (let i=0;i<5;i++){
        machine1.play();
    }
}

startPlay()