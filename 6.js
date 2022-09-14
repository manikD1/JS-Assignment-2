// - Create a closure which has one inner function


// function greet(){
//     let greeting = 'Hey!';
//     function me(name){
//         console.log(`${greeting} ${name}`);
//     }
//     return me;
// }


// let meet = greet();
// meet('Manik');


// - Create a closure which has three inner functions


function addFirst(){
    let first = 10;

    function addSecond(num1){
        let second = first + num1;

        function addThird(num2){
            let third = second + num2;

            function addFourth(num3){
                console.log(third + num3);
            }

            return addFourth;
        }

        return addThird;
    }

    return addSecond;
}

let myAdd = addFirst();
myAdd(50)(100)(200); //10 + 50 + 100 + 200



