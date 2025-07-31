for (let i = 2; i <= 100; i++) {
    const sqrt = Math.sqrt(i);
    if (sqrt === Math.floor(sqrt)) {
        console.log(`Found square number: ${i}`);
        break;
    }
    console.log(i);
}

for (let j = 2; j <= 100; j++) {
    const sqrt = Math.sqrt(j);
    if (sqrt === Math.floor(sqrt)) {
        console.log(`Found square number: ${j}`);
        continue;
    }
    console.log(j);
}