let op;

function func() {

    let output = document.getElementById('result')

    let result;

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    console.log(num1, num2)

    switch(op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    output.value = result

}