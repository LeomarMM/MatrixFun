var currentM = 1;
var currentN = 1;

divMatrixBody = document.getElementById("div-matrix-body");

function cellId(m, n)
{
    return "input-number-cell-" + m + "-" + n;
}

function numberInCell(m, n)
{
    return document.getElementById(cellId(m, n));
}

function updateMatrixInputElements(m, n)
{
    divMatrixBody.innerHTML = "";
    for(i = 0 ; i < m ; ++i) {
        for(j = 0 ; j < n ; ++j) {
            divMatrixBody.innerHTML += "<input type='number' step=0.01 value='' id='" + cellId(i, j) + "' />";
        }
        divMatrixBody.innerHTML += "<br />";
    }
}

updateMatrixInputElements(8, 8);

numberInCell(4, 2).value = 3.141592

console.log(divMatrixBody);