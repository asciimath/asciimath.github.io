!function () {
	var demoSource = document.querySelector('#demoSource'),
	    demoRendering = document.querySelector('#demoRendering'),
	    math

	MathJax.Hub.Queue(function () {
		math = MathJax.Hub.getAllJax("demoRendering")[0]


		demoSource.addEventListener('input', function () {

			console.log(demoSource.value)

			MathJax.Hub.Queue(["Text", math, demoSource.value])
		})
	})
}()
