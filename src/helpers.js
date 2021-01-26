function d(size, count = 1) {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += Math.floor(Math.random() * (size + 1));
    }

    return sum;
}

module.exports = {
    d,
}