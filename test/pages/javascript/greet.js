hmvc.component('greet', function (element) {
	return {
		template: "<h1>{{ greeting }}</h1>",
		run: function () {
			return {
				greeting: element.text()
			}
		}
	};
});

hmvc.run();