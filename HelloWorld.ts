class HelloWorld {
    constructor(private firstName: string, private lastName: String) {

    }

    sayHello() {
        console.log("Hello World!" + " My name is " + this.firstName + " " + this.lastName + ".");
    }
}

const helloWorld = new HelloWorld("Vee", "Her");
helloWorld.sayHello();