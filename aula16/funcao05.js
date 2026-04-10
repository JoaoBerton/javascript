function fatorial(y) {
    if(y == 1) {
        return 1
    }else {
        return y* fatorial(y-1)
    }
}
console.log(fatorial(5))