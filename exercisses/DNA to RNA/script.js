function DNAtoRNA(dna) {
    var arr = dna.split("")
    var print = '';
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == "T") {
            arr[i] = "U";
        }
       
    }
    console.log(arr)
    var result = arr.join("");
    return result;
}
console.log(DNAtoRNA("TRRRRTEEEEET"))
