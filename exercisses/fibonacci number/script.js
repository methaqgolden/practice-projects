function genFibNum() {
    var fibNum = [0, 1];
    for(i = 2; i < 100; i++){
        var num = fibNum [i - 2] + fibNum [i - 1];
        fibNum.push(num);
    }
    return fibNum;
}
console.log(genFibNum())











