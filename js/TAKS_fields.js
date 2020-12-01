let TAKS_LIST = [];
let TAKS_LIST_CONTEXT = [];

function applyInArrayTAKS_fields() {

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