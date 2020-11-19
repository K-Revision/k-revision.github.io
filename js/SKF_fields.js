let SKF_LIST = [];
let SKF_LIST_CONTEXT = [];

function applyInArraySKF_fields() {
    let array = [];
    array.push('Type af rapport')
    array.push({
        id: 'InformationOnTypeOfSubmittedReport',
        name: '',
        ready: 'Annual Report',
        content: '<fo-cro:InformationOnTypeOfSubmittedReport contextRef="duration_only">',
        contentend: '</fo-cro:InformationOnTypeOfSubmittedReport>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Hvilken slags hjælp?')
    array.push({
        id: 'TypeOfAuditorAssistance',
        name: '',
        ready: 'No assistance',
        content: '<fo-cro:TypeOfAuditorAssistance contextRef="duration_only">',
        contentend: '</fo-cro:TypeOfAuditorAssistance>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Regnskabspraksis uændret siden sidst?')
    array.push({
        id: 'AccountingPoliciesAreUnchangedFromPreviousPeriod',
        name: '',
        ready: 'true',
        content: '<fsa:AccountingPoliciesAreUnchangedFromPreviousPeriod contextRef="duration_only">',
        contentend: '</fsa:AccountingPoliciesAreUnchangedFromPreviousPeriod>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Startdato i år')
    array.push({
        id: 'ReportingPeriodStartDate',
        name: '',
        ready: firstDateThisYear,
        content: '<gsd:ReportingPeriodStartDate contextRef="duration_only">',
        contentend: '</gsd:ReportingPeriodStartDate>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Slutdato i år')
    array.push({
        id: 'ReportingPeriodEndDate',
        name: '',
        ready: lastDateThisYear,
        content: '<gsd:ReportingPeriodEndDate contextRef="duration_only">',
        contentend: '</gsd:ReportingPeriodEndDate>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Dato for generalforsamling')
    array.push({
        id: 'DateOfAnnualGeneralMeeting',
        name: '',
        ready: 'yyyy-mm-dd',
        content: '<fo-tax:DateOfAnnualGeneralMeeting contextRef="instant_only">',
        contentend: '</fo-tax:DateOfAnnualGeneralMeeting>',
        context: 'instant_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Dato for godkendelse af rapporten')
    array.push({
        id: 'DateOfApprovalOfReport',
        name: '',
        ready: 'yyyy-mm-dd',
        content: '<gsd:DateOfApprovalOfReport contextRef="duration_only">',
        contentend: '</gsd:DateOfApprovalOfReport>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Dato for godkendelse af årsrapporten')
    array.push({
        id: 'DateOfApprovalOfAnnualReport',
        name: '',
        ready: 'yyyy-mm-dd',
        content: '<sob:DateOfApprovalOfAnnualReport contextRef="duration_only">',
        contentend: '</sob:DateOfApprovalOfAnnualReport>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Dirigent ved generalforsamlingen')
    array.push({
        id: 'NameAndSurnameOfChairmanOfGeneralMeeting',
        name: '',
        ready: '',
        content: '<gsd:NameAndSurnameOfChairmanOfGeneralMeeting contextRef="duration_only">',
        contentend: '</gsd:NameAndSurnameOfChairmanOfGeneralMeeting>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Regnskabsklasse')
    array.push({
        id: 'ClassOfReportingEntity',
        name: '',
        ready: 'Regnskabsklasse B',
        content: '<fsa:ClassOfReportingEntity contextRef="duration_only">',
        contentend: '</fsa:ClassOfReportingEntity>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Elementer fra klasse C?')
    array.push({
        id: 'SelectedElementsFromReportingClassC',
        name: '',
        ready: 'false',
        content: '<fsa:SelectedElementsFromReportingClassC contextRef="duration_only">',
        contentend: '</fsa:SelectedElementsFromReportingClassC>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Elementer fra klasse D?')
    array.push({
        id: 'SelectedElementsFromReportingClassD',
        name: '',
        ready: 'false',
        content: '<fsa:SelectedElementsFromReportingClassD contextRef="duration_only">',
        contentend: '</fsa:SelectedElementsFromReportingClassD>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Virksomhedsnavn')
    array.push({
        id: 'NameOfReportingEntity',
        name: '',
        ready: Virkisnavn,
        content: '<gsd:NameOfReportingEntity contextRef="duration_only">',
        contentend: '</gsd:NameOfReportingEntity>',
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

    SKF_LIST_CONTEXT.push({
        id: 'duration_IdentificationOfMemberOfExecutiveBoardDimension_cmn_memberOfBoardIdentifier_only_1',
        content: '<xbrli:context id="duration_IdentificationOfMemberOfExecutiveBoardDimension_cmn_memberOfBoardIdentifier_only_1"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:typedMember dimension="cmn:IdentificationOfMemberOfExecutiveBoardDimension"><cmn:memberOfBoardIdentifier>1</cmn:memberOfBoardIdentifier></xbrldi:typedMember></xbrli:scenario></xbrli:context>'
    })

    SKF_LIST_CONTEXT.push({
        id: 'duration_only_previous',
        content: '<xbrli:context id="duration_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period></xbrli:context>'
    })

    SKF_LIST_CONTEXT.push({
        id: 'duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only',
        content: '<xbrli:context id="duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fsa:ResultDistributionDimension">fsa:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    SKF_LIST_CONTEXT.push({
        id: 'duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only_previous',
        content: '<xbrli:context id="duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fsa:ResultDistributionDimension">fsa:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    SKF_LIST_CONTEXT.push({
        id: 'instant_only_previous',
        content: '<xbrli:context id="instant_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateLastYear + '</xbrli:instant></xbrli:period></xbrli:context>'
    })
}

function createSKF_fieldsElements() {
    SKForTAKS = 1;

    for(i = 0; i < SKF_LIST.length; i++) {
        let u = SKF_LIST[i];
        let q = document.createElement('p');
        let w = document.createTextNode(u[0]);
        q.appendChild(w);
        document.body.appendChild(q);

        let blockC = document.createElement('div');
        blockC.id = 'block_container';

        for(a = 1; a < u.length; a++) {
            let block = document.createElement('div');
            block.id = 'block';
            if (u[a].name != ''){
                let q = document.createElement('p');
                let w = document.createTextNode(u[a].name);
                q.appendChild(w);
                block.appendChild(q);
            }
            let x = document.createElement("TEXTAREA");
            let t = document.createTextNode(u[a].ready);
            x.appendChild(t);
            x.id = u[a].id;
            block.appendChild(x);
            blockC.appendChild(block);
        }
        let br = document.createElement('br');
        document.body.appendChild(blockC);
        document.body.appendChild(br);
        document.body.appendChild(br);
    }
}

function SKF_fields() {
    setGlobalVals();
    applyInArraySKF_fields();
    if (SKForTAKS == 0) createSKF_fieldsElements();
}