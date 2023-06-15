// Counting Duplicates

function duplicateCount(text){
  
    try{ return text.toLowerCase()  // "Indivisibilities" -> "indivisibilities"
    .split("")    // "indivisibilities" -> 'i', 'n', 'd', 'i', 'v', 'i', 's', 'i', 'b', 'i', 'l', 'i', 't', 'i', 'e', 's'
    .sort()    // 'i', 'n', 'd', 'i', 'v', 'i', 's', 'i', 'b', 'i', 'l', 'i', 't', 'i', 'e', 's' -> 'b', 'd', 'e', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'l', 'n', 's', 's', 't', 'v'
    .join("") // 'b', 'd', 'e', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'l', 'n', 's', 's', 't', 'v' ->  b,d,e,i,i,i,i,i,i,i,l,n,s,s,t,v
    .match(/(.)\1+/g) // b,d,e,i,i,i,i,i,i,i,l,n,s,s,t,v -> [ 'iiiiiii', 'ss' ]
    .length; } // [ 'iiiiiii', 'ss' ] -> 2
  catch(e){ return 0; }
}

  console.log(duplicateCount("Indivisibilities"));