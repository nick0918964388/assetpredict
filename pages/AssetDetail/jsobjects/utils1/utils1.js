export default {
  getLowHealth: async () => {
    // const stockFilter = sel_productStockFilter.selectedOptionValue;
    const assetLowHealths = await getLowHealth.run();
    let filteredLowHealths = assetLowHealths;
    return filteredLowHealths.map(p => ({
      Assetnum: p.assetnum,
      Type: p.type,
			Site: p.siteid,
			HealthScore: p.healthScore,
			Predictedfailuredate: p.predictedfailuredate,
			Installdate:p.installdate,
			Age:p.age,
			TotalCost:p.totalcost
    }));
  },
	getHealthbreakdown: async () => {
    // const stockFilter = sel_productStockFilter.selectedOptionValue;
    const healthbreakdowns = await getHealthBreakdown.run();
    let filteredHealthbreakdowns = healthbreakdowns;

    return filteredHealthbreakdowns.map(p => ({
      Assetnum: p.assetnum,
      Score: p.score,
			Contributor: p.contributor,
			Weight: p.weight
    }));
  },
	getFactorsFailure: async () => {
    // const stockFilter = sel_productStockFilter.selectedOptionValue;
    const getFactorsFailures = await getFactorsFailure.run();
    let filteredgetFactorsFailures = getFactorsFailures;

    return filteredgetFactorsFailures.map(p => ({
      Leadfactors: p.leadfactors,
      Importance: p.importance,
			Importancescore: p.importancescore			
    }));
  },
	getSelTimeRange: async () => {
    // const stockFilter = sel_productStockFilter.selectedOptionValue;
    const getSelTimeRanges = await getSelTimeRange.run();
    let filteredgetSelTimeRanges = getSelTimeRanges;

    return filteredgetSelTimeRanges.map(p => ({
      Timerange: p.timerange,
      Description: p.description,
			Unit: p.unit			
    }));
  },
}