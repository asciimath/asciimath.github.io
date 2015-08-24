window.MathJax = {
  AuthorInit: function() {
    MathJax.Hub.Register.StartupHook("End", function() {
      MathJax.Hub.processSectionDelay = 0;
      var demoSource = document.getElementById('demoSource');
      var demoRendering = document.getElementById('demoRendering');
      var math = MathJax.Hub.getAllJax("demoRendering")[0];
      demoSource.addEventListener('input', function() {
        //console.log(demoSource.value);
        MathJax.Hub.Queue(["Text", math, demoSource.value]);
      });
    });
  }
};
