const PI = 3.14;

document.getElementById('btn').onclick = function(){
    let radius = document.getElementById('radius').value;
    radius = Number(radius);

    let circumference = 2 * PI * radius;

    document.getElementById('result').textContent = `RESULT: ${circumference}`;
    document.getElementById('result').style.color = 'black';
    document.getElementById('result').style.fontWeight = 'bolder'; 
};