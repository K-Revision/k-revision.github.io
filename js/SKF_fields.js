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

    array = [];
    array.push('Virksomheds postnr.')
    array.push({
        id: 'AddressOfReportingEntityPostCodeIdentifier',
        name: '',
        ready: '',
        content: '<gsd:AddressOfReportingEntityPostCodeIdentifier contextRef="duration_only">',
        contentend: '</gsd:AddressOfReportingEntityPostCodeIdentifier>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Virksomheds bygd')
    array.push({
        id: 'AddressOfReportingEntityDistrictName',
        name: '',
        ready: '',
        content: '<gsd:AddressOfReportingEntityDistrictName contextRef="duration_only">',
        contentend: '</gsd:AddressOfReportingEntityDistrictName>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Virksomheds land')
    array.push({
        id: 'AddressOfReportingEntityCountry',
        name: '',
        ready: 'Føroyar',
        content: '<gsd:AddressOfReportingEntityCountry contextRef="duration_only">',
        contentend: '</gsd:AddressOfReportingEntityCountry>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Virksomheds landekode')
    array.push({
        id: 'AddressOfReportingEntityCountryIdentificationCode',
        name: '',
        ready: 'FO',
        content: '<gsd:AddressOfReportingEntityCountryIdentificationCode contextRef="duration_only">',
        contentend: '</gsd:AddressOfReportingEntityCountryIdentificationCode>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Medlem af bestyrelsen nr. 1')
    array.push({
        id: 'NameAndSurnameOfMemberOfExecutiveBoard',
        name: '',
        ready: '',
        content: '<cmn:NameAndSurnameOfMemberOfExecutiveBoard contextRef="duration_IdentificationOfMemberOfExecutiveBoardDimension_cmn_memberOfBoardIdentifier_only_1">',
        contentend: '</cmn:NameAndSurnameOfMemberOfExecutiveBoard>',
        context: 'duration_IdentificationOfMemberOfExecutiveBoardDimension_cmn_memberOfBoardIdentifier_only_1'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Medlem af bestyrelsen nr. 1s stilling')
    array.push({
        id: 'TitleOfMemberOfExecutiveBoard',
        name: '',
        ready: 'Stjóri',
        content: '<cmn:TitleOfMemberOfExecutiveBoard contextRef="duration_IdentificationOfMemberOfExecutiveBoardDimension_cmn_memberOfBoardIdentifier_only_1">',
        contentend: '</cmn:TitleOfMemberOfExecutiveBoard>',
        context: 'duration_IdentificationOfMemberOfExecutiveBoardDimension_cmn_memberOfBoardIdentifier_only_1'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Ledelsespåtegning')
    array.push({
        id: 'StatementByExecutiveAndSupervisoryBoards',
        name: '',
        ready: '(kopier ledelsespåtegninen)',
        content: '<sob:StatementByExecutiveAndSupervisoryBoards contextRef="duration_only">',
        contentend: '</sob:StatementByExecutiveAndSupervisoryBoards>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Anvendt regnskabspraksis')
    array.push({
        id: 'DisclosureOfAccountingPolicies',
        name: '',
        ready: '',
        content: '<fsa:DisclosureOfAccountingPolicies contextRef="duration_only">',
        contentend: '</fsa:DisclosureOfAccountingPolicies>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Generelt om indregning og måling')
    array.push({
        id: 'DescriptionOfGeneralMattersRelatedToRecognitionMeasurementAndChangesInAccountingPolicies',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfGeneralMattersRelatedToRecognitionMeasurementAndChangesInAccountingPolicies contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfGeneralMattersRelatedToRecognitionMeasurementAndChangesInAccountingPolicies>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Bruttofortjeneste')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfGrossProfitLoss',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfGrossProfitLoss contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfGrossProfitLoss>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Af- og nedskrivninger')
    array.push({
        id: 'DescriptionOfMethodsOfImpairmentLossesAndDepreciation',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfImpairmentLossesAndDepreciation contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfImpairmentLossesAndDepreciation>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Finansielle poster')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncomeAndExpenses',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncomeAndExpenses contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncomeAndExpenses>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Skat af årets resultat')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxExpenses',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxExpenses contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxExpenses>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Materielle anlægsaktiver')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfPropertyPlantAndEquipment',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfPropertyPlantAndEquipment contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfPropertyPlantAndEquipment>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Tilgodehavender')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfReceivables',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfReceivables contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfReceivables>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Likvide beholdninger')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCashAndCashEquivalents',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCashAndCashEquivalents contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCashAndCashEquivalents>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Skyldig skat')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxPayablesAndDeferredTax',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxPayablesAndDeferredTax contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxPayablesAndDeferredTax>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Gæld')
    array.push({
        id: 'DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLiabilitiesOtherThanProvisions',
        name: '',
        ready: '',
        content: '<fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLiabilitiesOtherThanProvisions contextRef="duration_only">',
        contentend: '</fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLiabilitiesOtherThanProvisions>',
        context: 'duration_only'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Bruttofortjeneste')
    array.push({
        id: 'GrossProfitLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:GrossProfitLoss contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:GrossProfitLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'GrossProfitLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:GrossProfitLoss contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:GrossProfitLoss>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Personaleomkostninger')
    array.push({
        id: 'EmployeeBenefitsExpense',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:EmployeeBenefitsExpense contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:EmployeeBenefitsExpense>',
        context: 'duration_only'
    });
    array.push({
        id: 'EmployeeBenefitsExpensePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:EmployeeBenefitsExpense contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:EmployeeBenefitsExpense>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Afskrivninger anlægsaktiver')
    array.push({
        id: 'DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Resultat før finansielle poster')
    array.push({
        id: 'ProfitLossFromOrdinaryOperatingActivities',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryOperatingActivities contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLossFromOrdinaryOperatingActivities>',
        context: 'duration_only'
    });
    array.push({
        id: 'ProfitLossFromOrdinaryOperatingActivitiesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryOperatingActivities contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLossFromOrdinaryOperatingActivities>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Finansielle omkostninger')
    array.push({
        id: 'OtherFinanceExpenses',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:OtherFinanceExpenses contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:OtherFinanceExpenses>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherFinanceExpensesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:OtherFinanceExpenses contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:OtherFinanceExpenses>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Resultat før skat')
    array.push({
        id: 'ProfitLossFromOrdinaryActivitiesBeforeTax',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryActivitiesBeforeTax contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLossFromOrdinaryActivitiesBeforeTax>',
        context: 'duration_only'
    });
    array.push({
        id: 'ProfitLossFromOrdinaryActivitiesBeforeTaxPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryActivitiesBeforeTax contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLossFromOrdinaryActivitiesBeforeTax>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Skat af årets resultat')
    array.push({
        id: 'TaxExpense',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:TaxExpense contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:TaxExpense>',
        context: 'duration_only'
    });
    array.push({
        id: 'TaxExpensePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:TaxExpense contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:TaxExpense>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Årets resultat')
    array.push({
        id: 'ProfitLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ProfitLoss contextRef="duration_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'ProfitLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ProfitLoss contextRef="duration_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLoss>',
        context: 'duration_only_previous'
    });
    SKF_LIST.push(array);

    array = [];
    array.push('Overført resultat')
    array.push({
        id: 'ProfitLossOverf',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ProfitLoss contextRef="duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLoss>',
        context: 'duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only'
    });
    array.push({
        id: 'ProfitLossOverfPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ProfitLoss contextRef="duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only_previous" unitRef="DKK" decimals="0">',
        contentend: '</fsa:ProfitLoss>',
        context: 'duration_ResultDistributionDimension_fsa_RetainedEarningsMember_only_previous'
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