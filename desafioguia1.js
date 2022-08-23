let a = [2,4,3,7,6];
let p = 0;

function recursivao(a, p){
    if(a.length == 0){
        console.log("termino.");
        return a;
    }  
    else if(a[p] > a[p+1]){
        console.log("mayor")
        return recursivao(a, p++)
    }
    else if(a[p] < a[p+1]){
        console.log("menor")
        return recursivao(a, p++)
    }
}

console.log(recursivao(a, p))