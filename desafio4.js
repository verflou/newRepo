function burbuja(a){
    let num = 1;
    let i = 0;
    let j = i+1;
    let int = a.length+1;
    while (i < int) {
        console.log("intento == " + num)
        if (a[i] > a[j]){
            console.log("i == " + a[i])
            let o = a[i];
            a[i] = a[j];
            a[j] = o;
            console.log("i2 == " + a[j])
        }
        i++;
        j++;
        num++;
        
    }
    return a;
}

console.log(burbuja([10,2,0,-1,7]));