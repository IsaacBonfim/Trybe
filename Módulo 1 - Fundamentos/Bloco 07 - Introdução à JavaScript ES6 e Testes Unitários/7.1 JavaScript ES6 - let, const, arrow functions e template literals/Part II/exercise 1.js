const fatorial = (num) => num > 1 ? num * fatorial(num - 1) : 1;

console.log(fatorial(5));
