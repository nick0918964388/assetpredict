export default {
  getLowHealth: async () => {
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
}