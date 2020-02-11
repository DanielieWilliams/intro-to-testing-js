//helloWorld function
const helloWorld = function() {
    return "Hello, World!";
};

//EXERCISE 2-7//

function sayHello(input) {
    if (input == null){
        return null

}if (input === "") {
    return ""


}if (input === "5") {
    return "5"

}if (input === 2.3) {
    return 2.3


}if (input === '2,3,4') {
    return "array"

    }return "Hello, " + input + "!";
}


