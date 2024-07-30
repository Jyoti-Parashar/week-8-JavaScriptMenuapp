/** 
***************this is a test Script*****************************************

console.log("hello!");

class Shape {
    constructor(name, sideA, sideB) {
        this.name = name;
        this.sideA = sideA;
        this.sideB = sideB;

    }

    describe() {
        return `${this.name} `;
        //has ${this.side}
    }

    calculateArea(){
        return this.sideA * this.sideB
    }

}

class Shapes {
    constructor(name) {
        this.name = name;
        this.Shapes = [];
    }

    addShape(shape) {
        if (shape instanceof Shape) {
            this.Shapes.push(shape);
        } else {
            throw new Error(`You can only add instance of Shape 
                argument is not a shape:${shape}`);
        }
    }
    describe() {
        return `${this.name} has ${this.Shapes.length} shapes.`;
    }



}

class Menu { // what drives the application and our choices
    constructor() {
        this.shapes = [];
        this.selectedShape = null; // manage one Shape at a time
    }
    start() { // entry point to application
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createShape();
                    break;
                case '2':
                    this.viewShape();
                    break;
                case '3':
                    this.deleteShape();
                    break;
                case '4':
                    this.displayShapes();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    displayShapes() {
        let shapeString = '';
        for (let i = 0; i < this.shapes.length; i++) {
            shapeString += i + ') ' + this.shapes[i].name  + " area: " + this.shapes[i].calculateArea() + '\n';
            //+ ' has ' + this.shapes[i].side + ' sides '
        }
        alert(shapeString);
    }1

    deleteShape(){
        let index = prompt("Enter the index of the shape that you want to delete");
        if (index > -1 && index < this.shapes.length) {
           this.shapes.splice(index,1)
        }

    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create a new Shape
            2) view a Shape
            3) delete a Shape
            4) display all Shapes
            `);
    }

    showShapeMenuOptions(shapeInfo) {
        return prompt(`
        0) back
        1) add a new shape
        2) delete a shape
        -----------------
        ${shapeInfo}
        `);
        }

    1
    createShape() {
        let name = prompt('Enter name for new Shape: ');
        let sideA = prompt('Enter Side A Length: ');
        let sideB = prompt('Enter Side B length: ');
        //this.shapes.push(new Shape(name));1
      //  let side = prompt('Enter side for new Shape: ');
        this.shapes.push(new Shape(name, sideA, sideB));
        //this.shapes.push(new Shape(name, side));
    }
    
    1

    viewShape() {
        let index = prompt("Enter the index of the shape that you want to view:");
        if (index > -1 && index < this.shapes.length) {
        this.selectedShape = this.shapes[index];1
        let description = 'Team Name: ' + this.selectedShape.name + '\n';
        description += ' ' + this.selectedShape.describe() + '\n ';
        for (let i = 0; i < this.selectedShape.length; i++) {1
        // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
        // + this.selectedTeam.players[i].position + '\n';
        description += i + ') ' + this.selectedShape.shapes[i].describe() + '\n';
        }
        let selection1 = this.showShapeMenuOptions(description);
        switch (selection1) {
        case '1' :1
        this.createShape();1
        break;
        case '2' :
        this.deleteShape();
        }
        } // validate user input
        }

    

    
}

let menu = new Menu();
menu.start();


*/

