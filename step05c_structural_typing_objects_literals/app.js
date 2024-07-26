var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var pet;
// OK, because of structural typing
pet = new Dog();
var ball = { diameter: 10 };
var sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
console.log(ball);
console.log(sphere);
// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.
