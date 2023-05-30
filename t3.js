// Pillars

function pillars(numPill, dist, width) {
    if (numPill == 1) {
        return 0;
      } else {
        return (numPill - 2) * width + (numPill - 1) * dist * 100
}
}
console.log(pillars(11, 15, 30));