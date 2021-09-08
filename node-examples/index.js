var rect = require("./rectangle");

function solveRectangle(l, b) {
    console.log("Solving for rectangle with length l = " + l + " and breadth b = " + b);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message);
        } else {
            console.log("Area of the rectangle with length = " + l + " and breadth b = " +
                b + " is = " + rectangle.area());
            console.log("Perimeter of the rectangle with length = " + l + " and breadth b = " +
                b + " is = " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
}

solveRectangle(2, 3);
solveRectangle(0, 3);
solveRectangle(-1, 5);
solveRectangle(5, -3);