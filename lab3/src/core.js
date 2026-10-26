/**
 * Проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
    // Побитовое ИЛИ с нулём отбрасывает дробную часть.
    // Если число не изменилось и это конечное число, то оно целое.
    return typeof n === 'number' && isFinite(n) && (n | 0) === n;
}

/**
 * Возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

/**
 * Считает сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Считает сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
    if (n === 0) return 0;
    return n + recSumTo(n - 1);
}

/**
 * Считает факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
    // Степень двойки больше 0 имеет только один единичный бит.
    return n > 0 && (n & (n - 1)) === 0;
} 

/**
 * Находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
    // Учитывая тесты: F(1) = 1, F(2) = 1
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

/**
 * Принимает начальное значение и функцию операции, возвращает функцию-вычислитель
 */
function getOperationFn(initialValue, operatorFn) {
    let currentValue = initialValue;
    
    return function (newValue) {
        // Если operatorFn не задана - всегда возвращаем начальное значение
        if (typeof operatorFn === 'function') {
            currentValue = operatorFn(currentValue, newValue);
        }
        return currentValue;
    };
}

/**
 * Создает генератор арифметической последовательности
 */
function sequence(start = 0, step = 1) {
    let current = start;
    
    return function() {
        const valueToReturn = current;
        current += step;
        return valueToReturn;
    };
}

/**
 * Глубокое сравнение объектов
 */
function deepEqual(firstObject, secondObject) {
    // 1. Проверка на строгое равенство (включая ссылки на функции)
    if (firstObject === secondObject) return true;
    
    // 2. Обработка NaN (так как NaN !== NaN)
    if (typeof firstObject === 'number' && typeof secondObject === 'number' && 
        isNaN(firstObject) && isNaN(secondObject)) {
        return true;
    }
    
    // 3. Если хотя бы один не объект (или null) - значит они не равны
    if (firstObject === null || secondObject === null || 
        typeof firstObject !== 'object' || typeof secondObject !== 'object') {
        return false;
    }
    
    // 4. Сравнение массивов
    const isFirstArray = Array.isArray(firstObject);
    const isSecondArray = Array.isArray(secondObject);
    
    if (isFirstArray !== isSecondArray) return false;
    
    if (isFirstArray && isSecondArray) {
        if (firstObject.length !== secondObject.length) return false;
        for (let i = 0; i < firstObject.length; i++) {
            if (!deepEqual(firstObject[i], secondObject[i])) return false;
        }
        return true;
    }
    
    // 5. Сравнение объектов
    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        // Проверяем, что ключ есть во втором объекте и значения равны
        if (!keys2.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }
    
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};