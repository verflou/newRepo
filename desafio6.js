ar = [4,7,3,8,9,1,5,6,3];

function ñhift(b){
    b.shift();
    return b;
}

function frecursiva(a){
    if (a.length == 0){
        return 0;
    }
    else if(a[0] % 2){
        console.log("suma " + a[0])
        return a[0] + frecursiva(ñhift(a))
    }
    else {
        console.log("nose " + a[0])
        return frecursiva(ñhift(a))
    }
}

console.log(frecursiva(ar));