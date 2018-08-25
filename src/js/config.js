require.config({

	// 配置短路径（别名）
	paths:{
		'shop':'shop.js',
		'btncar':'btncar.js',
		'xiangqing':'xiangqing.js',
		'details':'details.js'
	},

	shim:{
		// 配置模块间依赖关系
		// 讲明：lxzoom依赖jquery（加载过程中自动处理先后顺序）
		'details':['xiangqing'],
		'btncar':['shop']

	}
});