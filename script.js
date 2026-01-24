const input = document.getElementById('input');
// input.value = '0';
const operators = ['+','-','*','/','%','=','.'];
function press(val){

    if(input.value === '' && operators.includes(val)){
        return;
    }

    const lastChar = input.value.slice(-1);

    if(operators.includes(lastChar) && operators.includes(val)) {
        return;
    }
    else if(val === '.' && input.value.includes(val)){
        return;
    }
    else if(input.value === '0' && val === '0')
    {
        return;
    }
    else if(input.value === '0' && !operators.includes(val))
    {
        input.value = val;
        return;
    }
    else{
        input.value+= val;
    }
}

function equal(val) {
    if(val === 'AC')
    {
        input.value = '';

    }
    else if(val === 'backspace')
    {
        input.value = input.value.slice(0,-1);
    }
    else if(val === 'equal'){
            input.value = eval(input.value);
    }
    else if (val === '-' && input.value[0] !== '-'){
        input.value = '-'+input.value;
    }
}

