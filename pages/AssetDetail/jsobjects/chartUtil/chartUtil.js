export default {
	
	async getChartValue () {
		const healthsrore = await getAssetByAssetnum.run();
		return healthsrore.map(d => {
      return {
        value:d.healthscore
      }
    })
	},
	option:{
		tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Health',
      type: 'gauge',
      progress: {
        show: true
      },
			color: [
        '#dd6b66',
        '#759aa0',
        '#e69d87',
        '#8dc1a9',
        '#ea7e53',
        '#eedd78',
        '#73a373',
        '#73b9bc',
        '#7289ab',
        '#91ca8c',
        '#f49f42'
      ],
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
			axisLabel:{
				show:false
			},title:{
				fontsize:5
			},
      data:[{value:getAssetByAssetnum.data[0].healthscore}]
    }
  ]
		
	}
}