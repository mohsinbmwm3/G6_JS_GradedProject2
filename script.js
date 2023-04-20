function f1() {
    console.log("inside f1");

    function f2() {
        return "Hello, from f2!";
    }

    return f2;
}

var f = f1();
console.log(f());