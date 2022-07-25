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

let p = busquedalineal([1, 6, 9, 2]);
console.log(p)