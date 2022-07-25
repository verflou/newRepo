function busquedalineal(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b) {
            return true
        }
    }
    return false
}

let p = busquedalineal([1, 2, 3, 4], 6);
console.log(p)