function saveFields() {
    let saveArray = [];

    let array = [];
    if (SKForTAKS == 1) {
        array = SKF_LIST;
        saveArray.push(1);
    }
    if (SKForTAKS == 2) {
        array = TAKS_LIST;
        saveArray.push(2);
    }

    let newA = [];
    newA.push('Virkisnavn');
    newA.push(document.getElementById("Virkisnavn").value);
    saveArray.push(newA);

    newA = [];
    newA.push('VATNumber');
    newA.push(document.getElementById("VATNumber").value);
    saveArray.push(newA);

    newA = [];
    newA.push('firstDateThisYear');
    newA.push(document.getElementById("firstDateThisYear").value);
    saveArray.push(newA);

    newA = [];
    newA.push('lastDateThisYear');
    newA.push(document.getElementById("lastDateThisYear").value);
    saveArray.push(newA);

    newA = [];
    newA.push('firstDateLastYear');
    newA.push(document.getElementById("firstDateLastYear").value);
    saveArray.push(newA);

    newA = [];
    newA.push('lastDateLastYear');
    newA.push(document.getElementById("lastDateLastYear").value);
    saveArray.push(newA);

    for(i = 0; i < array.length; i++) {
        let u = array[i];
        for(a = 1; a < u.length; a++) {
            let newArray = [];
            newArray.push(u[a].id);
            newArray.push(document.getElementById(u[a].id).value);
            saveArray.push(newArray);
        }
    }

    let saveString = JSON.stringify(saveArray);

    setFileName('.json');

    let blob = new Blob([saveString], { type: "text/plain;charset=utf-8" });
    saveAs(blob, fileName);
}