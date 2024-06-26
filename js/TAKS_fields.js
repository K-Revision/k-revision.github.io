let TAKS_LIST = [];
let TAKS_LIST_CONTEXT = [];

function applyInArrayTAKS_fields() {

    //INFO

    array = [];
    array.push('V-tal')
    array.push({
        id: 'IdentificationNumberCvrOfReportingEntity',
        name: '',
        ready: VATNumber,
        content: '<gsd:IdentificationNumberCvrOfReportingEntity contextRef="duration_only">',
        contentend: '</gsd:IdentificationNumberCvrOfReportingEntity>',
        context: 'duration_only'
    });
    TAKS_LIST.push(array);

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
    TAKS_LIST.push(array);


    //RAKSTRARROKNSKAPUR
    //NETTOSØLA		

    array = [];
    array.push('Nettoumsetingur')
    array.push({
        id: 'NetSales',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_only'
    });
    array.push({
        id: 'NetSalesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Nettoumsetningur MVG-skyldug')
    array.push({
        id: 'NetSalesVATorNot',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only'
    });
    array.push({
        id: 'NetSalesVATorNotPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only_previous">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Nettoumsetningur fevnd av § 12 í MVG lógini (ikki avgjaldsskyldug søla)')
    array.push({
        id: 'NetSalesVATorNotGoods',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only'
    });
    array.push({
        id: 'NetSalesVATorNotGoodsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only_previous">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Nettoumsetningur fevnd av § 2 stk. 3 í MVG lógini (tænastur undantiknar avgjaldsskyldu)')
    array.push({
        id: 'NetSalesVATorNotServices',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only'
    });
    array.push({
        id: 'NetSalesVATorNotServicesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NetSales unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only_previous">',
        contentend: '</fo-tax:NetSales>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Vøkstur/minking í arbeiði í gerð')
    array.push({
        id: 'ChangeInWorkInProgress',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:ChangeInWorkInProgress unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:ChangeInWorkInProgress>',
        context: 'duration_only'
    });
    array.push({
        id: 'ChangeInWorkInProgressPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:ChangeInWorkInProgress unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:ChangeInWorkInProgress>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Broyting í goymslum av lidnum og vørum í gerð')
    array.push({
        id: 'ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResale',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResale unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResale>',
        context: 'duration_only'
    });
    array.push({
        id: 'ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResalePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResale unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResale>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Arbeiði gjørt fyri egna rokning bókað sum ogn')
    array.push({
        id: 'WorkPerformedByEntityAndCapitalised',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:WorkPerformedByEntityAndCapitalised unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:WorkPerformedByEntityAndCapitalised>',
        context: 'duration_only'
    });
    array.push({
        id: 'WorkPerformedByEntityAndCapitalisedPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:WorkPerformedByEntityAndCapitalised unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:WorkPerformedByEntityAndCapitalised>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar rakstrarinntøkur (ið ikki hoyra til primera raksturin)')
    array.push({
        id: 'OtherOperatingIncome',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherOperatingIncomePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar rakstrarinntøkur MVG-skyldug')
    array.push({
        id: 'OtherOperatingIncomeVATorNot',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only'
    });
    array.push({
        id: 'OtherOperatingIncomeVATorNotPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only_previous">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar rakstrarinntøkur fevnd av § 12 í MVG lógini (ikki avgjaldsskyldug søla)')
    array.push({
        id: 'OtherOperatingIncomeVATorNotGoods',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only'
    });
    array.push({
        id: 'OtherOperatingIncomeVATorNotGoodsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only_previous">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar rakstrarinntøkur fevnd av § 2 stk. 3 í MVG lógini (tænastur undantiknar avgjaldsskyldu)')
    array.push({
        id: 'OtherOperatingIncomeVATorNotServices',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only'
    });
    array.push({
        id: 'OtherOperatingIncomeVATorNotServicesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:OtherOperatingIncome unitRef="DKK" decimals="0" contextRef="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only_previous">',
        contentend: '</fsa:OtherOperatingIncome>',
        context: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only_previous'
    });
    TAKS_LIST.push(array);

    //UTTANHÝSIS KOSTNAðUR		

    array = [];
    array.push('UTTANHÝSIS KOSTNAðUR')
    array.push({
        id: 'ExternalExpenses',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ExternalExpenses unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:ExternalExpenses>',
        context: 'duration_only'
    });
    array.push({
        id: 'ExternalExpensesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ExternalExpenses unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:ExternalExpenses>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Vørukeyp')
    array.push({
        id: 'PurchaseOfMerchandiseAndRawMaterials',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:PurchaseOfMerchandiseAndRawMaterials unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:PurchaseOfMerchandiseAndRawMaterials>',
        context: 'duration_only'
    });
    array.push({
        id: 'PurchaseOfMerchandiseAndRawMaterialsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:PurchaseOfMerchandiseAndRawMaterials unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:PurchaseOfMerchandiseAndRawMaterials>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Keyp av handilsvørum')
    array.push({
        id: 'PurchaseOfMerchandise',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:PurchaseOfMerchandise unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:PurchaseOfMerchandise>',
        context: 'duration_only'
    });
    array.push({
        id: 'PurchaseOfMerchandisePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:PurchaseOfMerchandise unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:PurchaseOfMerchandise>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Keyp av rávørum og framleiðslutilfari')
    array.push({
        id: 'PurchaseOfRawMaterialsAndConsumables',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:PurchaseOfRawMaterialsAndConsumables unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:PurchaseOfRawMaterialsAndConsumables>',
        context: 'duration_only'
    });
    array.push({
        id: 'PurchaseOfRawMaterialsAndConsumablesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:PurchaseOfRawMaterialsAndConsumables unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:PurchaseOfRawMaterialsAndConsumables>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Annar uttanhýsis kostnaður')
    array.push({
        id: 'OtherExternalExpenses',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:OtherExternalExpenses unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:OtherExternalExpenses>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherExternalExpensesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:OtherExternalExpenses unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:OtherExternalExpenses>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Orka (El/olja)')
    array.push({
        id: 'CostOfEnergy',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:CostOfEnergy unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:CostOfEnergy>',
        context: 'duration_only'
    });
    array.push({
        id: 'CostOfEnergyPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:CostOfEnergy unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:CostOfEnergy>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Húsaleiga, burtursæð frá hita (bara útreiðslur í leigumálum)')
    array.push({
        id: 'RentCostsExcludingHeatingCosts',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:RentCostsExcludingHeatingCosts unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:RentCostsExcludingHeatingCosts>',
        context: 'duration_only'
    });
    array.push({
        id: 'RentCostsExcludingHeatingCostsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:RentCostsExcludingHeatingCosts unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:RentCostsExcludingHeatingCosts>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Trygging')
    array.push({
        id: 'Insurance',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:Insurance unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:Insurance>',
        context: 'duration_only'
    });
    array.push({
        id: 'InsurancePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:Insurance unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:Insurance>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Ferðaútreiðslur')
    array.push({
        id: 'TravelCosts',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TravelCosts unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:TravelCosts>',
        context: 'duration_only'
    });
    array.push({
        id: 'TravelCostsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TravelCosts unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:TravelCosts>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Bilútreiðslur')
    array.push({
        id: 'CostsOfRegisteredMotorVehicles',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:CostsOfRegisteredMotorVehicles unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:CostsOfRegisteredMotorVehicles>',
        context: 'duration_only'
    });
    array.push({
        id: 'CostsOfRegisteredMotorVehiclesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:CostsOfRegisteredMotorVehicles unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:CostsOfRegisteredMotorVehicles>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Telesamskifti (Telefonútreiðslur)')
    array.push({
        id: 'TelecommunicationCosts',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TelecommunicationCosts unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:TelecommunicationCosts>',
        context: 'duration_only'
    });
    array.push({
        id: 'TelecommunicationCostsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TelecommunicationCosts unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:TelecommunicationCosts>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Smáinnbúgvi/amboð við stuttari livitíð')
    array.push({
        id: 'CostOfMinorEquipmentAndFixturesNotCapitalized',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:CostOfMinorEquipmentAndFixturesNotCapitalized unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:CostOfMinorEquipmentAndFixturesNotCapitalized>',
        context: 'duration_only'
    });
    array.push({
        id: 'CostOfMinorEquipmentAndFixturesNotCapitalizedPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:CostOfMinorEquipmentAndFixturesNotCapitalized unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:CostOfMinorEquipmentAndFixturesNotCapitalized>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Langtíðarleigu og operationel leasing')
    array.push({
        id: 'LongTermRentalAndOperationalLeasing',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:LongTermRentalAndOperationalLeasing unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:LongTermRentalAndOperationalLeasing>',
        context: 'duration_only'
    });
    array.push({
        id: 'LongTermRentalAndOperationalLeasingPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:LongTermRentalAndOperationalLeasing unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:LongTermRentalAndOperationalLeasing>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Útreiðslur til loyvir, avgjøld o.l. hjá fiskivinnuni')
    array.push({
        id: 'LicenseDuesAndSimilarExpensesForTheFishingIndustry',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:LicenseDuesAndSimilarExpensesForTheFishingIndustry unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:LicenseDuesAndSimilarExpensesForTheFishingIndustry>',
        context: 'duration_only'
    });
    array.push({
        id: 'LicenseDuesAndSimilarExpensesForTheFishingIndustryPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:LicenseDuesAndSimilarExpensesForTheFishingIndustry unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:LicenseDuesAndSimilarExpensesForTheFishingIndustry>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Keyp av undirentreprisum og lønarbeiði (bara ikki-starvsfólk)')
    array.push({
        id: 'PurchaseOfSubEnterprisesAndPaidWorkersOnlyNonEmployees',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:PurchaseOfSubEnterprisesAndPaidWorkersOnlyNonEmployees unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:PurchaseOfSubEnterprisesAndPaidWorkersOnlyNonEmployees>',
        context: 'duration_only'
    });
    array.push({
        id: 'PurchaseOfSubEnterprisesAndPaidWorkersOnlyNonEmployeesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:PurchaseOfSubEnterprisesAndPaidWorkersOnlyNonEmployees unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:PurchaseOfSubEnterprisesAndPaidWorkersOnlyNonEmployees>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Broyting í avsetingum til skuldarum í ársroknskapinum')
    array.push({
        id: 'ChangesInProvisionsForTradeReceivablesInAnnualAccount',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:ChangesInProvisionsForTradeReceivablesInAnnualAccount unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:ChangesInProvisionsForTradeReceivablesInAnnualAccount>',
        context: 'duration_only'
    });
    array.push({
        id: 'ChangesInProvisionsForTradeReceivablesInAnnualAccountPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:ChangesInProvisionsForTradeReceivablesInAnnualAccount unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:ChangesInProvisionsForTradeReceivablesInAnnualAccount>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Staðfest tap uppá skuldarar')
    array.push({
        id: 'ConfirmedWriteoffsInRespectOfDebtors',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:ConfirmedWriteoffsInRespectOfDebtors unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:ConfirmedWriteoffsInRespectOfDebtors>',
        context: 'duration_only'
    });
    array.push({
        id: 'ConfirmedWriteoffsInRespectOfDebtorsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:ConfirmedWriteoffsInRespectOfDebtors unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:ConfirmedWriteoffsInRespectOfDebtors>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Annar uttanhýsis kostnaður (rest bólkur)')
    array.push({
        id: 'OtherDeductibleExpenses',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:OtherDeductibleExpenses unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:OtherDeductibleExpenses>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherDeductibleExpensesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:OtherDeductibleExpenses unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:OtherDeductibleExpenses>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    //BRUTTOÚRSLIT		

    array = [];
    array.push('BRUTTOVINNINGUR/BRUTTOHALL')
    array.push({
        id: 'GrossProfitLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:GrossProfitLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:GrossProfitLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'GrossProfitLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:GrossProfitLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:GrossProfitLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    //LØNIR		

    array = [];
    array.push('Løn sambært roknskap')
    array.push({
        id: 'WagesAndSalaries',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:WagesAndSalaries unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:WagesAndSalaries>',
        context: 'duration_only'
    });
    array.push({
        id: 'WagesAndSalariesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:WagesAndSalaries unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:WagesAndSalaries>',
        context: 'duration_only_previous'
    });
    array.push({
        id: 'WagesAndSalariesFlutt',
        name: 'Egnar lønir fluttar um afturhaldsskipanina',
        ready: '',
        content: '<fsa:WagesAndSalaries unitRef="DKK" decimals="0" contextRef="duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only">',
        contentend: '</fsa:WagesAndSalaries>',
        context: 'duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Eftirløn sambært roknskap')
    array.push({
        id: 'PensionContribution',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:PensionContribution unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:PensionContribution>',
        context: 'duration_only'
    });
    array.push({
        id: 'PensionContributionPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:PensionContribution unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:PensionContribution>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar lønartengdar útreiðslur')
    array.push({
        id: 'StaffSocialCosts',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:StaffSocialCosts unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:StaffSocialCosts>',
        context: 'duration_only'
    });
    array.push({
        id: 'StaffSocialCostsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:StaffSocialCosts unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:StaffSocialCosts>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Als, Bas, AM og VSG')
    array.push({
        id: 'ContributionToFaroeseSocialFunds',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:ContributionToFaroeseSocialFunds unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:ContributionToFaroeseSocialFunds>',
        context: 'duration_only'
    });
    array.push({
        id: 'ContributionToFaroeseSocialFundsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:ContributionToFaroeseSocialFunds unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:ContributionToFaroeseSocialFunds>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar lønartengdar útreiðslur (rest bólkur)')
    array.push({
        id: 'OtherSocialCosts',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:OtherSocialCosts unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:OtherSocialCosts>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherSocialCostsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:OtherSocialCosts unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:OtherSocialCosts>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Starvsfólkakostnaðir (Total)')
    array.push({
        id: 'EmployeeBenefitsExpense',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:EmployeeBenefitsExpense unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:EmployeeBenefitsExpense>',
        context: 'duration_only'
    });
    array.push({
        id: 'EmployeeBenefitsExpensePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:EmployeeBenefitsExpense unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:EmployeeBenefitsExpense>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    //AÐRIR POSTAR		

    array = [];
    array.push('Av- og niðurskrivingar av materiellari og immateriellari støðisogn')
    array.push({
        id: 'DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    //ÚRSLIT FRÁ PRIMERUM RAKSTRI		

    array = [];
    array.push('ÚRSLIT FRÁ PRIMERUM RAKSTRI')
    array.push({
        id: 'ProfitLossFromOrdinaryOperatingActivities',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryOperatingActivities unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:ProfitLossFromOrdinaryOperatingActivities>',
        context: 'duration_only'
    });
    array.push({
        id: 'ProfitLossFromOrdinaryOperatingActivitiesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryOperatingActivities unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:ProfitLossFromOrdinaryOperatingActivities>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    //UPPGERÐ AV SKATTSKYLDUGARI INNTØKU		

    array = [];
    array.push('Úrslit áðrenn skatt sambært ársroknskapi')
    array.push({
        id: 'ProfitLossFromOrdinaryActivitiesBeforeTax',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryActivitiesBeforeTax unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fsa:ProfitLossFromOrdinaryActivitiesBeforeTax>',
        context: 'duration_only'
    });
    array.push({
        id: 'ProfitLossFromOrdinaryActivitiesBeforeTaxPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:ProfitLossFromOrdinaryActivitiesBeforeTax unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fsa:ProfitLossFromOrdinaryActivitiesBeforeTax>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattafrítt vinningsbýti')
    array.push({
        id: 'TaxExemptedDividend',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxExemptedDividend unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:TaxExemptedDividend>',
        context: 'duration_only'
    });
    array.push({
        id: 'TaxExemptedDividendPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxExemptedDividend unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:TaxExemptedDividend>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Ikki frádráttarloyvdar rentur')
    array.push({
        id: 'NonDeductableInterest',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NonDeductableInterest unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:NonDeductableInterest>',
        context: 'duration_only'
    });
    array.push({
        id: 'NonDeductableInterestPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NonDeductableInterest unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:NonDeductableInterest>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Ikki frádráttarloyvdar gávur og stuðul')
    array.push({
        id: 'NonDeductableGiftsAndSubsidies',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NonDeductableGiftsAndSubsidies unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:NonDeductableGiftsAndSubsidies>',
        context: 'duration_only'
    });
    array.push({
        id: 'NonDeductableGiftsAndSubsidiesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NonDeductableGiftsAndSubsidies unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:NonDeductableGiftsAndSubsidies>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Ikki frádráttarloyvdar bøtur og sektir')
    array.push({
        id: 'NonDeductableFines',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NonDeductableFines unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:NonDeductableFines>',
        context: 'duration_only'
    });
    array.push({
        id: 'NonDeductableFinesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NonDeductableFines unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:NonDeductableFines>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Ikki frádráttarloyvdur stovningarkostnaður')
    array.push({
        id: 'NonDeductableEstablisingExpenses',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:NonDeductableEstablisingExpenses unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:NonDeductableEstablisingExpenses>',
        context: 'duration_only'
    });
    array.push({
        id: 'NonDeductableEstablisingExpensesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:NonDeductableEstablisingExpenses unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:NonDeductableEstablisingExpenses>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar varandi reguleringar (ikki frádráttarloyvdur kostnaður)')
    array.push({
        id: 'OtherPermanentAdjustmentsNonDeductableExpenses',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:OtherPermanentAdjustmentsNonDeductableExpenses unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:OtherPermanentAdjustmentsNonDeductableExpenses>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherPermanentAdjustmentsNonDeductableExpensesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:OtherPermanentAdjustmentsNonDeductableExpenses unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:OtherPermanentAdjustmentsNonDeductableExpenses>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar varandi reguleringar (ikki skattskyldug inntøka)')
    array.push({
        id: 'OtherPermanentAdjustmentsNonTaxableIncome',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:OtherPermanentAdjustmentsNonTaxableIncome unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:OtherPermanentAdjustmentsNonTaxableIncome>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherPermanentAdjustmentsNonTaxableIncomePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:OtherPermanentAdjustmentsNonTaxableIncome unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:OtherPermanentAdjustmentsNonTaxableIncome>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Av- og niðurskrivingar sambært ársroknskapi')
    array.push({
        id: 'DepreciationAmortisationExpenseInAnnualAccount',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationAmortisationExpenseInAnnualAccount unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationAmortisationExpenseInAnnualAccount>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationAmortisationExpenseInAnnualAccountPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationAmortisationExpenseInAnnualAccount unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationAmortisationExpenseInAnnualAccount>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Staðfestur roknskaparligur vinningur av virðisbrøvum vm. afturførdur')
    array.push({
        id: 'SubtractionOfConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:SubtractionOfConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:SubtractionOfConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'SubtractionOfConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:SubtractionOfConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:SubtractionOfConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Óstaðfestur roknskaparligur vinningur av virðisbrøvum vm. afturførdur')
    array.push({
        id: 'SubtractionOfNonConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:SubtractionOfNonConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:SubtractionOfNonConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'SubtractionOfNonConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:SubtractionOfNonConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:SubtractionOfNonConfirmedProfitFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Staðfest roknskaparligt tap av virðisbrøvum vm. afturført')
    array.push({
        id: 'AdditionOfConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:AdditionOfConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:AdditionOfConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'AdditionOfConfirmedLossFromSharesAndBondsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:AdditionOfConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:AdditionOfConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Óstaðfest roknskaparligt tap av virðisbrøvum vm. afturført')
    array.push({
        id: 'AdditionOfNonConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:AdditionOfNonConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:AdditionOfNonConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'AdditionOfNonConfirmedLossFromSharesAndBondsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:AdditionOfNonConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:AdditionOfNonConfirmedLossFromSharesAndBondsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligar avskrivingar av rakstrartólum')
    array.push({
        id: 'DepreciationOfToolsAndEquipment',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationOfToolsAndEquipment unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationOfToolsAndEquipment>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationOfToolsAndEquipmentPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationOfToolsAndEquipment unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationOfToolsAndEquipment>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligar avskrivingar persónbilum')
    array.push({
        id: 'DepreciationOfPassengerCars',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationOfPassengerCars unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationOfPassengerCars>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationOfPassengerCarsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationOfPassengerCars unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationOfPassengerCars>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligar avskrivingar av innrætting av leigaðum hølum')
    array.push({
        id: 'DepreciationOfFixtureAndFittingsInRentedAccommodation',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationOfFixtureAndFittingsInRentedAccommodation unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationOfFixtureAndFittingsInRentedAccommodation>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationOfFixtureAndFittingsInRentedAccommodationPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationOfFixtureAndFittingsInRentedAccommodation unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationOfFixtureAndFittingsInRentedAccommodation>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligar avskrivingar av skipum')
    array.push({
        id: 'DepreciationOfCommercialVessels',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationOfCommercialVessels unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationOfCommercialVessels>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationOfCommercialVesselsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationOfCommercialVessels unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationOfCommercialVessels>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligar avskrivingar av bygningum til handverk og ídnað')
    array.push({
        id: 'DepreciationOfBuildingsForIndustryAndTrade',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationOfBuildingsForIndustryAndTrade unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationOfBuildingsForIndustryAndTrade>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationOfBuildingsForIndustryAndTradePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationOfBuildingsForIndustryAndTrade unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationOfBuildingsForIndustryAndTrade>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligar avskrivingar av øðrum bygningum')
    array.push({
        id: 'DepreciationOfOtherCommercialBuildings',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationOfOtherCommercialBuildings unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationOfOtherCommercialBuildings>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationOfOtherCommercialBuildingsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationOfOtherCommercialBuildings unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationOfOtherCommercialBuildings>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligar avskrivingar av immateriellari ogn og goodwill')
    array.push({
        id: 'DepreciationOfIntangibleAssetsAndGoodwill',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DepreciationOfIntangibleAssetsAndGoodwill unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:DepreciationOfIntangibleAssetsAndGoodwill>',
        context: 'duration_only'
    });
    array.push({
        id: 'DepreciationOfIntangibleAssetsAndGoodwillPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DepreciationOfIntangibleAssetsAndGoodwill unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:DepreciationOfIntangibleAssetsAndGoodwill>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Afturføring roknskaparligt tap við sølu av immateriellari og materiellari støðisogn')
    array.push({
        id: 'AdditionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:AdditionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:AdditionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'AdditionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:AdditionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:AdditionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Afturføring roknskaparligur vinningur við sølu av immateriellari og materiellari støðisogn')
    array.push({
        id: 'SubtractionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:SubtractionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:SubtractionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only'
    });
    array.push({
        id: 'SubtractionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:SubtractionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:SubtractionOfLossBySalesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligur vinningur við sølu av materiellari støðisogn')
    array.push({
        id: 'TaxableProfitFromSalesOfTangibleAssets',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxableProfitFromSalesOfTangibleAssets unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:TaxableProfitFromSalesOfTangibleAssets>',
        context: 'duration_only'
    });
    array.push({
        id: 'TaxableProfitFromSalesOfTangibleAssetsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxableProfitFromSalesOfTangibleAssets unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:TaxableProfitFromSalesOfTangibleAssets>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattligt tap við sølu av materiellari støðisogn')
    array.push({
        id: 'TaxableLossFromSalesOfTangibleAssets',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxableLossFromSalesOfTangibleAssets unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:TaxableLossFromSalesOfTangibleAssets>',
        context: 'duration_only'
    });
    array.push({
        id: 'TaxableLossFromSalesOfTangibleAssetsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxableLossFromSalesOfTangibleAssets unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:TaxableLossFromSalesOfTangibleAssets>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Roknskaparlig niðurskriving av skuldarum við ársbyrjan útreiðsluførd')
    array.push({
        id: 'ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLossStart',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="instant_only_start">',
        contentend: '</fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss>',
        context: 'instant_only_start'
    });
    array.push({
        id: 'ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLossStartPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="instant_only_previous_start">',
        contentend: '</fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss>',
        context: 'instant_only_previous_start'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Roknskaparlig niðurskriving av skuldarum við ársenda inntøkuførd')
    array.push({
        id: 'ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="instant_only">',
        contentend: '</fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss>',
        context: 'instant_only'
    });
    array.push({
        id: 'ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLossPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss unitRef="DKK" decimals="0" contextRef="instant_only_previous">',
        contentend: '</fo-tax:ProvisionsForWriteoffsInRespectOfTradeReceivablesRecognisedInProfitOrLoss>',
        context: 'instant_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Ársins úrslit (Skattskyldug inntøka áðrenn framflyting av hallið, at flyta til sjálvuppgávu)')
    array.push({
        id: 'TaxableIncomeBeforeLossesCarriedForward',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxableIncomeBeforeLossesCarriedForward unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:TaxableIncomeBeforeLossesCarriedForward>',
        context: 'duration_only'
    });
    array.push({
        id: 'TaxableIncomeBeforeLossesCarriedForwardPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxableIncomeBeforeLossesCarriedForward unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:TaxableIncomeBeforeLossesCarriedForward>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    //FÍGGJARSTØÐA		

    array = [];
    array.push('Skattlig saldo við ársenda (IMMATERIELL STØÐISOGN)')
    array.push({
        id: 'FixedAssetsIntangible',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'FixedAssetsIntangiblePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Frágongd í árinum')
    array.push({
        id: 'DecreaseInFixedAssetsIntangible',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'DecreaseInFixedAssetsIntangiblePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Tilgongd í árinum')
    array.push({
        id: 'IncreaseInFixedAssetsIntangible',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'IncreaseInFixedAssetsIntangiblePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Avskrivað í árinum')
    array.push({
        id: 'TaxDepreciationOfFixedAssetsIntangible',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'TaxDepreciationOfFixedAssetsIntangiblePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Afturvunnar avskrivingar')
    array.push({
        id: 'RegainedFiscalWriteoffIntangible',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoff unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:RegainedFiscalWriteoff>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'RegainedFiscalWriteoffIntangiblePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoffIntangible unitRef="DKK" decimals="0" contextRef="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:RegainedFiscalWriteoffIntangible>',
        context: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattlig saldo við ársenda fyri rakstrartól sambært kap. 1 í avskrivingarlógini')
    array.push({
        id: 'FixedAssets',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'FixedAssetsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Frágongd í árinum')
    array.push({
        id: 'DecreaseInFixedAssets',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'DecreaseInFixedAssetsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Tilgongd í árinum')
    array.push({
        id: 'IncreaseInFixedAssets',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'IncreaseInFixedAssetsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Avskrivað í árinum')
    array.push({
        id: 'TaxDepreciationOfFixedAssets',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'TaxDepreciationOfFixedAssetsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Afturvunnar avskrivingar')
    array.push({
        id: 'RegainedFiscalWriteoff',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoff unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:RegainedFiscalWriteoff>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'RegainedFiscalWriteoffPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoff unitRef="DKK" decimals="0" contextRef="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:RegainedFiscalWriteoff>',
        context: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattlig saldo við ársenda fyri skip sambært kap. 3 í avskrivingarlógini')
    array.push({
        id: 'FixedAssetsChap3',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'FixedAssetsChap3Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Frágongd í árinum')
    array.push({
        id: 'DecreaseInFixedAssetsChap3',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'DecreaseInFixedAssetsChap3Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Tilgongd í árinum')
    array.push({
        id: 'IncreaseInFixedAssetsChap3',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'IncreaseInFixedAssetsChap3Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Avskrivað í árinum')
    array.push({
        id: 'TaxDepreciationOfFixedAssetsChap3',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'TaxDepreciationOfFixedAssetsChap3Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Afturvunnar avskrivingar')
    array.push({
        id: 'RegainedFiscalWriteoffChap3',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoff unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:RegainedFiscalWriteoff>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'RegainedFiscalWriteoffChap3Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoff unitRef="DKK" decimals="0" contextRef="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:RegainedFiscalWriteoff>',
        context: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skattlig saldo við ársenda fyri bygningar sambært kap. 4 í avskrivingarlógini')
    array.push({
        id: 'FixedAssetsChap4',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'FixedAssetsChap4Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Frágongd í árinum')
    array.push({
        id: 'DecreaseInFixedAssetsChap4',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'DecreaseInFixedAssetsChap4Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:DecreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:DecreaseInFixedAssets>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Tilgongd í árinum')
    array.push({
        id: 'IncreaseInFixedAssetsChap4',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'IncreaseInFixedAssetsChap4Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Avskrivað í árinum')
    array.push({
        id: 'TaxDepreciationOfFixedAssetsChap4',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'TaxDepreciationOfFixedAssetsChap4Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:TaxDepreciationOfFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:TaxDepreciationOfFixedAssets>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Afturvunnar avskrivingar')
    array.push({
        id: 'RegainedFiscalWriteoffChap4',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoff unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:RegainedFiscalWriteoff>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'RegainedFiscalWriteoffChap4Prev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:RegainedFiscalWriteoff unitRef="DKK" decimals="0" contextRef="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:RegainedFiscalWriteoff>',
        context: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Ikki avskrivingarbar ogn')
    array.push({
        id: 'FixedAssetsIkkiAvskriv',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'FixedAssetsIkkiAvskrivPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:FixedAssets unitRef="DKK" decimals="0" contextRef="instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:FixedAssets>',
        context: 'instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Tilgongd í árinum')
    array.push({
        id: 'FixedAssetsIkkiAvskrivTilgang',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only'
    });
    array.push({
        id: 'FixedAssetsIkkiAvskrivTilgangPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:IncreaseInFixedAssets unitRef="DKK" decimals="0" contextRef="duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous">',
        contentend: '</fo-tax:IncreaseInFixedAssets>',
        context: 'duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous'
    });
    TAKS_LIST.push(array);

    //ONNUR ÁOGN

    array = [];
    array.push('Áogn MVG')
    array.push({
        id: 'VATRefundDueButNotPaid',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:VATRefundDueButNotPaid unitRef="DKK" decimals="0" contextRef="instant_only">',
        contentend: '</fo-tax:VATRefundDueButNotPaid>',
        context: 'instant_only'
    });
    array.push({
        id: 'VATRefundDueButNotPaidPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:VATRefundDueButNotPaid unitRef="DKK" decimals="0" contextRef="instant_only_previous">',
        contentend: '</fo-tax:VATRefundDueButNotPaid>',
        context: 'instant_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Onnur áogn til samans')
    array.push({
        id: 'OtherShorttermReceivables',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:OtherShorttermReceivables unitRef="DKK" decimals="0" contextRef="instant_only">',
        contentend: '</fo-tax:OtherShorttermReceivables>',
        context: 'instant_only'
    });
    array.push({
        id: 'OtherShorttermReceivablesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:OtherShorttermReceivables unitRef="DKK" decimals="0" contextRef="instant_only_previous">',
        contentend: '</fo-tax:OtherShorttermReceivables>',
        context: 'instant_only_previous'
    });
    TAKS_LIST.push(array);

    //ONNUR SKULD		

    array = [];
    array.push('Skuld MVG')
    array.push({
        id: 'LiabilityRelatedToOutstandingVATPayment',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:LiabilityRelatedToOutstandingVATPayment unitRef="DKK" decimals="0" contextRef="instant_only">',
        contentend: '</fo-tax:LiabilityRelatedToOutstandingVATPayment>',
        context: 'instant_only'
    });
    array.push({
        id: 'LiabilityRelatedToOutstandingVATPaymentPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:LiabilityRelatedToOutstandingVATPayment unitRef="DKK" decimals="0" contextRef="instant_only_previous">',
        contentend: '</fo-tax:LiabilityRelatedToOutstandingVATPayment>',
        context: 'instant_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Onnur skuld til samans')
    array.push({
        id: 'OtherLiabilityAndProvisions',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:OtherLiabilityAndProvisions unitRef="DKK" decimals="0" contextRef="instant_only">',
        contentend: '</fo-tax:OtherLiabilityAndProvisions>',
        context: 'instant_only'
    });
    array.push({
        id: 'OtherLiabilityAndProvisionsPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:OtherLiabilityAndProvisions unitRef="DKK" decimals="0" contextRef="instant_only_previous">',
        contentend: '</fo-tax:OtherLiabilityAndProvisions>',
        context: 'instant_only_previous'
    });
    TAKS_LIST.push(array);

    //LØNARAVSTEMMAN		

    array = [];
    array.push('løn flutt um aftuhaldsskipanina')
    array.push({
        id: 'WagesAndSalariesTaxWithheld',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:WagesAndSalariesTaxWithheld unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:WagesAndSalariesTaxWithheld>',
        context: 'duration_only'
    });
    array.push({
        id: 'WagesAndSalariesTaxWithheldPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:WagesAndSalariesTaxWithheld unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:WagesAndSalariesTaxWithheld>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Aðrar lønir/fremmand hjálp')
    array.push({
        id: 'OtherWagesAndSalariesNotTaxWithheld',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:OtherWagesAndSalariesNotTaxWithheld unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:OtherWagesAndSalariesNotTaxWithheld>',
        context: 'duration_only'
    });
    array.push({
        id: 'OtherWagesAndSalariesNotTaxWithheldPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:OtherWagesAndSalariesNotTaxWithheld unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:OtherWagesAndSalariesNotTaxWithheld>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skyldug løn primo')
    array.push({
        id: 'WagesAndSalariesDueStart',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:WagesAndSalariesDue unitRef="DKK" decimals="0" contextRef="duration_only_start">',
        contentend: '</fo-tax:WagesAndSalariesDue>',
        context: 'duration_only_start'
    });
    array.push({
        id: 'WagesAndSalariesDueStartPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:WagesAndSalariesDue unitRef="DKK" decimals="0" contextRef="duration_only_previous_start">',
        contentend: '</fo-tax:WagesAndSalariesDue>',
        context: 'duration_only_previous_start'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Skyldug løn ultimo')
    array.push({
        id: 'WagesAndSalariesDue',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:WagesAndSalariesDue unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:WagesAndSalariesDue>',
        context: 'duration_only'
    });
    array.push({
        id: 'WagesAndSalariesDuePrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:WagesAndSalariesDue unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:WagesAndSalariesDue>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Eftirløn smb roknskap')
    array.push({
        id: 'PensionContributionIncludedInAccounting',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:PensionContributionIncludedInAccounting unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:PensionContributionIncludedInAccounting>',
        context: 'duration_only'
    });
    array.push({
        id: 'PensionContributionIncludedInAccountingPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:PensionContributionIncludedInAccounting unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:PensionContributionIncludedInAccounting>',
        context: 'duration_only_previous'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Eftirløn flutt um afturhaldsskipanina')
    array.push({
        id: 'PensionContributionTaxWithheld',
        name: 'Nuværende år',
        ready: '',
        content: '<fo-tax:PensionContributionTaxWithheld unitRef="DKK" decimals="0" contextRef="duration_only">',
        contentend: '</fo-tax:PensionContributionTaxWithheld>',
        context: 'duration_only'
    });
    array.push({
        id: 'PensionContributionTaxWithheldPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fo-tax:PensionContributionTaxWithheld unitRef="DKK" decimals="0" contextRef="duration_only_previous">',
        contentend: '</fo-tax:PensionContributionTaxWithheld>',
        context: 'duration_only_previous'
    });
    array.push({
        id: 'PensionContributionTaxWithheldFlutt',
        name: 'Egnar eftirlønir fluttar um afturhaldsskipanina',
        ready: '',
        content: '<fo-tax:PensionContributionTaxWithheld unitRef="DKK" decimals="0" contextRef="duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only">',
        contentend: '</fo-tax:PensionContributionTaxWithheld>',
        context: 'duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only'
    });
    TAKS_LIST.push(array);

    array = [];
    array.push('Tal av starvsfólkið')
    array.push({
        id: 'NumberOfEmployees',
        name: 'Nuværende år',
        ready: '',
        content: '<fsa:NumberOfEmployees unitRef="pure" decimals="0" contextRef="instant_only">',
        contentend: '</fsa:NumberOfEmployees>',
        context: 'instant_only'
    });
    array.push({
        id: 'NumberOfEmployeesPrev',
        name: 'Sidste år',
        ready: '',
        content: '<fsa:NumberOfEmployees unitRef="pure" decimals="0" contextRef="instant_only_previous">',
        contentend: '</fsa:NumberOfEmployees>',
        context: 'instant_only_previous'
    });
    TAKS_LIST.push(array);

}

function applyInArrayTAKS_CONTEXT_fields() {

    TAKS_LIST_CONTEXT.push({
        id: 'duration_only',
        content: '<xbrli:context id="duration_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_only_previous',
        content: '<xbrli:context id="duration_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only',
        content: '<xbrli:context id="duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:VATApplicableNotApplicableDimension">fo-tax:VATApplicable</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only_previous',
        content: '<xbrli:context id="duration_VATApplicableNotApplicableDimension_fo-tax_VATApplicable_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:VATApplicableNotApplicableDimension">fo-tax:VATApplicable</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only',
        content: '<xbrli:context id="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:VATApplicableNotApplicableDimension">fo-tax:VATNotApplicableGoods</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only_previous',
        content: '<xbrli:context id="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableGoods_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:VATApplicableNotApplicableDimension">fo-tax:VATNotApplicableGoods</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only',
        content: '<xbrli:context id="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:VATApplicableNotApplicableDimension">fo-tax:VATNotApplicableServices</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only_previous',
        content: '<xbrli:context id="duration_VATApplicableNotApplicableDimension_fo-tax_VATNotApplicableServices_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:VATApplicableNotApplicableDimension">fo-tax:VATNotApplicableServices</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only',
        content: '<xbrli:context id="duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:typedMember dimension="fo-tax:WagesSalariesVATNumberDimension"><fo-tax:VATNumber>' + VATNumberShort + '</fo-tax:VATNumber></xbrldi:typedMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only_previous',
        content: '<xbrli:context id="duration_WagesSalariesVATNumberDimension_fo-tax_VATNumber_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:typedMember dimension="fo-tax:WagesSalariesVATNumberDimension"><fo-tax:VATNumber>' + VATNumberShort + '</fo-tax:VATNumber></xbrldi:typedMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateThisYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:IntangibleFixedAssetsDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="instant_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateLastYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:IntangibleFixedAssetsDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:IntangibleFixedAssetsDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="duration_IntangibleFixedAssetsDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:IntangibleFixedAssetsDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateThisYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:EquipmentsChapterOneDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="instant_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateLastYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:EquipmentsChapterOneDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:EquipmentsChapterOneDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="duration_EquipmentsChapterOneDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:EquipmentsChapterOneDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateThisYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:WesselsForCommercialUseChapterThreeDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="instant_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateLastYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:WesselsForCommercialUseChapterThreeDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:WesselsForCommercialUseChapterThreeDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="duration_WesselsForCommercialUseChapterThreeDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:WesselsForCommercialUseChapterThreeDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateThisYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyAndPlantsChapterFourDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="instant_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateLastYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyAndPlantsChapterFourDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyAndPlantsChapterFourDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="duration_PropertyAndPlantsChapterFourDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyAndPlantsChapterFourDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_only',
        content: '<xbrli:context id="instant_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateThisYear + '</xbrli:instant></xbrli:period></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_only_previous',
        content: '<xbrli:context id="instant_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateLastYear + '</xbrli:instant></xbrli:period></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateThisYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyNonDepreciableDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="instant_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + lastDateLastYear + '</xbrli:instant></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyNonDepreciableDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only',
        content: '<xbrli:context id="duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyNonDepreciableDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous',
        content: '<xbrli:context id="duration_PropertyNonDepreciableDimension_fo-tax_CarryingAmount_only_previous"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period><xbrli:scenario><xbrldi:explicitMember dimension="fo-tax:PropertyNonDepreciableDimension">fo-tax:CarryingAmount</xbrldi:explicitMember></xbrli:scenario></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_only_start',
        content: '<xbrli:context id="instant_only_start"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + firstDateThisYear + '</xbrli:instant></xbrli:period></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'instant_only_previous_start',
        content: '<xbrli:context id="instant_only_previous_start"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:instant>' + firstDateLastYear + '</xbrli:instant></xbrli:period></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_only_start',
        content: '<xbrli:context id="duration_only_start"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateThisYear + '</xbrli:startDate><xbrli:endDate>' + lastDateThisYear + '</xbrli:endDate></xbrli:period></xbrli:context>'
    })

    TAKS_LIST_CONTEXT.push({
        id: 'duration_only_previous_start',
        content: '<xbrli:context id="duration_only_previous_start"><xbrli:entity><xbrli:identifier scheme="http://www.taks.fo/VATNumber">' + VATNumber + '</xbrli:identifier></xbrli:entity><xbrli:period><xbrli:startDate>' + firstDateLastYear + '</xbrli:startDate><xbrli:endDate>' + lastDateLastYear + '</xbrli:endDate></xbrli:period></xbrli:context>'
    })

}