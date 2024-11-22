function setup(){
    const dog = new Animal("Dog");
    dog.sayName();

    createCanvas(400,400);
}
function draw(){
    background(220);

}

window.setup = setup;
window.draw = draw;