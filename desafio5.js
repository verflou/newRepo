ar = [1,2,3,4,5,6];

function ñhift(b){
  b.shift();
  return b;
}

function frecursiva(a){
    if (a.length == 0){
      return 0;
    }
    else {
      return a[0] + frecursiva(ñhift(a))
    }
}

console.log(frecursiva(ar));