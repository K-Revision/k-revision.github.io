function saveDataToFile() {

    let fullDocument = [];
    let fullDocumentArray = [];
    let fullDocumentArrayContext = [];

    setGlobalVals();

    applyInArraySKF_CONTEXT_fields();

    fullDocument.push('<?xml version="1.0" encoding="UTF-8"?>')
    fullDocument.push('<!--Generated by K-Revision-->')
    fullDocument.push('<?instance-generator id="K-Revision XBRL Generator" version="2020.01" creationdate="' + returnDate() + '"?>')
    fullDocument.push('<xbrli:xbrl xml:lang="fo" xmlns:iso4217="http://www.xbrl.org/2003/iso4217" xmlns:cmn="http://xbrl.dcca.dk/cmn" xmlns:sob="http://xbrl.dcca.dk/sob" xmlns:fo-tax="http://www.xbrl.gov.fo/tax" xmlns:gsd="http://xbrl.dcca.dk/gsd" xmlns:fsa="http://xbrl.dcca.dk/fsa" xmlns:fo-cro="http://www.xbrl.gov.fo/cro" xmlns:xbrli="http://www.xbrl.org/2003/instance" xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xbrldi="http://xbrl.org/2006/xbrldi" xmlns:xlink="http://www.w3.org/1999/xlink">')
    fullDocument.push('<link:schemaRef xlink:type="simple" xlink:href="https://www.vinnugluggin.fo/taxonomy/20180301/entryFODanishGAAPBalanceSheetAccountFormIncomeStatementByNatureIncludingManagementsReview20161001.xsd"/>')
    fullDocument.push('<xbrli:unit id="DKK"><xbrli:measure>iso4217:DKK</xbrli:measure></xbrli:unit>')
    
    //fullDocument.push('<xbrli:measure>' + userInput + '</xbrli:measure>')

    function fieldsToArray () {
        let array = [];
        if (SKForTAKS == 1) array = SKF_LIST;

        for(i = 0; i < array.length; i++) {
            let array2 = array[i];

            for(a = 1; a < array2.length; a++) {
                if (document.getElementById(array2[a].id).value != '') {
                    let arrayString = array2[a].content + document.getElementById(array2[a].id).value + array2[a].contentend;
                    fullDocumentArray.push(arrayString);
                    let alreadyExists = false;
                    let tempString = array2[a].context;
                    for(b = 0; b < fullDocumentArrayContext.length; b++) {
                        if (fullDocumentArrayContext[b] == tempString) alreadyExists = true;
                    }
                    if (alreadyExists == false) fullDocumentArrayContext.push(tempString);
                }
            }
        }
    }

    function contextArrayToFullDocument() {
        for(i = 0; i < fullDocumentArrayContext.length; i++) {
            for(a = 0; a < SKF_LIST_CONTEXT.length; a++) {
                if (fullDocumentArrayContext[i] == SKF_LIST_CONTEXT[a].id) fullDocument.push(SKF_LIST_CONTEXT[a].content);
            }
        }
    }

    function arrayToFullDocument () {
        for(i = 0; i < fullDocumentArray.length; i++) {
            fullDocument.push(fullDocumentArray[i]);
        }
    }

    fieldsToArray();
    contextArrayToFullDocument();
    arrayToFullDocument();

    fullDocument.push('</xbrli:xbrl>');

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