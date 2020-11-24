function returnDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let ho = String(today.getHours()).padStart(2, '0');
    let mi = String(today.getMinutes()).padStart(2, '0');
    let se = String(today.getSeconds()).padStart(2, '0');
    let gm = today.getTimezoneOffset();

    today = yyyy + '-' + mm + '-' + dd + 'T' + ho + ':' + mi + ':' + se + '+00:00';

    return today;
}

function setGlobalVals() {
    Virkisnavn = document.getElementById("Virkisnavn").value;
    VATNumber = document.getElementById("VATNumber").value;
    VATNumberShort = VATNumber.slice(2, 8);
    firstDateThisYear = document.getElementById("firstDateThisYear").value;
    lastDateThisYear = document.getElementById("lastDateThisYear").value;
    firstDateLastYear = document.getElementById("firstDateLastYear").value;
    lastDateLastYear = document.getElementById("lastDateLastYear").value;
}

function setFileName(type) {
    let firm1 = Virkisnavn.split(' ').join('');
    let firm2 = firm1.split('/').join('');
    let firm3 = firm2.split('-').join('');
    let firmReal = firm3.split('.').join('');

    let firmType = '';
    if (SKForTAKS == 1) firmType = 'SKF';
    if (SKForTAKS == 2) firmType = 'TAKS';

    let firmYear = firstDateThisYear.slice(2, 4);

    fileName = (firmReal + firmType + firmYear + type);
}

function TEST() {
    let array = [];
    if (SKForTAKS == 1) array = SKF_LIST;
    if (SKForTAKS == 2) array = TAKS_LIST;

    let testCounter = 1;

    for(i = 0; i < array.length; i++) {
        let u = array[i];
        for(a = 1; a < u.length; a++) {
            let textA = u[a].id;
            testString = '' + testCounter;
            document.getElementById(textA).value = testString;
            testCounter++;
        }
    }
}