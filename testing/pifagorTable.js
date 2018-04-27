function pifagorTable() {
    let arr = [];
    for(let i=1; i<10; i++) {
        arr[i] = [];
        for(ii=1; ii<10; ii++){
            arr[i][ii] = i*ii;
        }
    }
    return arr;
}
let arr = pifagorTable();

function pifagorTableHTML() {
    let i, ii;
    const n = 10;
    for(i=1; i<n; i++) {
        for(ii=1; ii<n; ii++){
            document.write(i*ii, ' ');
        }
        document.write('<br>');
    }
}
pifagorTableHTML();
console.log(arr);