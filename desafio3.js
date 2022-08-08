function busquedalineal(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (a[i] > a[j]) {
                let o = a[i];
                a[i] = a[j];
                a[j] = o;
            }
        }
    }
    return a
}

function binario(a, b){
    for (let i = a.length/2; i <= a.length;) {
        if (a[i] == b){
            return true;
        }
        else if (b < a[i]){
            i--
        }
        else if (b > a[i]){
            i++
        }
        else {
            
            return false
        }
    }
}

console.log(binario([1,2,3,4], 2))