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

<<<<<<< HEAD
let p = busquedalineal([1,2,3,4,5]);
console.log(p)

function particion(a, b){
    let num = 1;
    let i = 0;
    let j = a.length;
    let p = false;
    while (p == false) {
        console.log("intento == " + num)
        let center = Math.floor((i+j)/2);
        console.log("mid " + center)
        if (center == b) {
            p = true;
        }
        else if (b > center){
            console.log("i1 == " + i)
            i = center;
            console.log("i2 == " + i)
        }
        else if (b < center){
            console.log("j1 == " + j)
            j = center;
            console.log("j2 == " + j)
        }
        num++;
    }
    if (p == true) {
        return true
    }
}

console.log(particion([1,2,3,4,5,6,7,8,9,10], 9));
=======
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
>>>>>>> bdc09a49e0682031c727a53b6ffce7e9cd2a3012
