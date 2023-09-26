"use strict";
let count = 1;
const interval = setInterval(() => {
    console.log('Count:', count);
    count++;
    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);
