let SKF_LIST = [];
let SKF_LIST_CONTEXT = [];

function applyInArraySKF_fields() {
    SKForTAKS = 1;

    let array = [];
    array.push({
        id: 'InformationOnTypeOfSubmittedReport',
        name: 'Type af rapport',
        ready: 'Annual Report',
        content: '<fo-cro:InformationOnTypeOfSubmittedReport contextRef="duration_only">',
        contentend: '</fo-cro:InformationOnTypeOfSubmittedReport>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push({
        id: 'TypeOfAuditorAssistance',
        name: 'Hvilken slags hjælp?',
        ready: 'No assistance',
        content: '<fo-cro:TypeOfAuditorAssistance contextRef="duration_only">',
        contentend: '</fo-cro:TypeOfAuditorAssistance>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);
}

function applyInArraySKF_CONTEXT_fields() {
    SKF_LIST_CONTEXT.push({
        id: 'duration_only',
        content: '<xbrli:context id="duration_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period></xbrli:context>'
    })
    SKF_LIST_CONTEXT.push({
        id: 'instant_only',
        content: '<xbrli:context id="instant_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateThisYear + '</xbrli:instant></xbrli:period></xbrli:context>'
    })
}

function createSKF_fieldsElements() {
    for(i = 0; i < SKF_LIST.length; i++) {
        let u = SKF_LIST[i];
        for(a = 0; a < u.length; a++) {
            let q = document.createElement('p');
            let w = document.createTextNode(u[a].name);
            q.appendChild(w);
            document.body.appendChild(q);
            let x = document.createElement("TEXTAREA");
            let t = document.createTextNode(u[a].ready);
            x.appendChild(t);
            x.id = u[a].id;
            document.body.appendChild(x);
        }
    }
}

function SKF_fields() {
    applyInArraySKF_fields();
    applyInArraySKF_CONTEXT_fields();
    createSKF_fieldsElements();
}