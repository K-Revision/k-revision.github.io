function saveDataToFile() {

    let fullDocument = [];

    let userInput = document.getElementById("myText").value;

    fullDocument.push('<?xml version="1.0" encoding="UTF-8"?>')
    fullDocument.push('<!--Generated by K-Revision-->')
    fullDocument.push('<?instance-generator id="K-Revision XBRL Generator" version="2020.01" creationdate="' + returnDate() + '"?>')
    //fullDocument.push('<xbrli:measure>' + userInput + '</xbrli:measure>')

    function documentToString() {
        let fullDocumentString = '';
        for(i = 0; i < fullDocument.length; i++) {
            fullDocumentString = fullDocumentString + fullDocument[i];
        }

        return fullDocumentString
    }

    let fullString = documentToString();

    let blob = new Blob([fullString], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.xml");
}