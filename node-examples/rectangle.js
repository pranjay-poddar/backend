module.exports = (x, y, callback) => {
    if (x < 0 || y < 0) {
        setTimeout(() => {
            callback(new Error("Dimensions of l " + x + " and " + y + " should be greater than zero."), null), 2000
        })
    } else {
        setTimeout(() => {
            callback(null, {
                area: () => (x * y),
                perimeter: () => (2 * (x + y))
            }), 2000
        })
    }
}