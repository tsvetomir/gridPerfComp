// start benchmarking this view
this.benchmark = {};
var viewName = null;
var startTime = null;
var docChangedTimeout = null;
this.benchmarkView = function (name) {
    startTime = new Date();
    viewName = name;
    flexSheet = null;
}
document.addEventListener('DOMSubtreeModified', function () {
    if (viewName) {
        if (docChangedTimeout) clearTimeout(docChangedTimeout);
        docChangedTimeout = setTimeout(function () {

            // measure elapsed time when DOM stops changing for a while
            var endTime = new Date();
            var elapsed = (endTime.getTime() - startTime.getTime()) / 1000;
            //console.log('done loading ' + viewName + ': ' + elapsed.toFixed(2) + ' seconds');

            // save/update elapsed time for this view
            this.benchmark[viewName] = elapsed.toFixed(1) + ' s';
            if (!this.$$phase) {
                this.$apply('benchmark');
            }
            viewName = null;
      }, 250);
    }
});
