//import { startExpress } from './express';
import App from './express';

//startExpress();

/// GENERICS ///
const cars: string[] = ['a', 'b'];
const cars2: Array<string> = ['a', 'b'];

const promise: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000);
});

promise.then(data => console.log(data))


function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b);
}

const merged = mergeObjects({name: 'grisha'}, {age: '24'});
console.log(merged.age, merged.name)
const merged2 = mergeObjects({model: 'BMW'}, {year: 2022});
console.log(merged2.model, merged2.year);

//const merged3 = mergeObjects('aaa', 'bbb');
//console.log(merged3)
// ====
interface ILenght {
    length: number
}

function withCount<T extends ILenght>(value: T): {value: T, count: string} {
    return {
        value,
        count: `In the object ${value.length} symbols`
    }
}

console.log(withCount('asd'))
console.log(withCount(['Hello', 'world']))
// ===

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];

}

const person = {
    name: 'Grisha',
    age: '24'
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
//console.log(getObjectValue(person, 'job'))

// ===

class Collection<T extends number | string | boolean> {
    //private _items: T[] = []

    constructor(private _items: T[]= []) {}

    add(item: T) {
        this._items.push(item);
    }

    delete(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['a', 'b', 'c']);
strings.add('!')
strings.delete('b')
console.log(strings.items)
const numbers = new Collection<number>([1,2,3]);
numbers.add(4);
numbers.delete(2);
console.log(numbers);
//const objs = new Collection ([{name: 'Griha'}, {age: 24}])
//objs.delete({name: 'Griha'})
//console.log(objs)

/// =====

interface ICar {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): ICar {
    const car: Partial<ICar> = {};

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as ICar;
}

/// ===

const newCars: Readonly<Array<string>> = ['Ford', 'Audi'];
//newCars.shift()
const ford: Readonly<ICar> = {
    model: 'Ford',
    year: 2020
}

/// DECORATORS ///




/*const app = new App();
app.listen();*/
