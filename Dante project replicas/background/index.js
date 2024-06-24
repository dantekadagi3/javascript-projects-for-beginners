let press = document.getElementById('press');
let colour = document.getElementById('contain');

function output() {
    let num = Math.floor(Math.random() * 6) + 1;
    switch (num) {
        case 1:
            colour.style.backgroundColor = 'red';
            break;
        case 2:
            colour.style.backgroundColor = 'purple';
            break;
        case 3:
            colour.style.backgroundColor = 'pink';
            break;
        case 4:
            colour.style.backgroundColor = 'orange';
            break;
        case 5:
            colour.style.backgroundColor = 'blue';
            break;
        case 6:
            colour.style.backgroundColor = 'green';
            break;
        default:
            colour.style.backgroundColor = 'black'; // Or any desired default color
            console.warn("Invalid number. Setting background color to black.");
            break;
    }
}

press.addEventListener('click', output);
