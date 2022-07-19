//generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); //-1, 1, 2, 3
const stringsArray = insertAtBeginning(['a', 'b', 'c'], 'd'); //'d', 'a', 'b', 'c'

// updateArray[0].split('');
