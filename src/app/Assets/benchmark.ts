

export class Benchmark {
  public viewName = null;
  public startTime = null;
  public benchmark = {};
  public docChangedTimeout = null;

  constructor() {
    document.addEventListener('DOMSubtreeModified', function () {
      if (this.viewName) {
          if (this.docChangedTimeout) { clearTimeout(this.docChangedTimeout); }
          this.docChangedTimeout = setTimeout(function () {
              // measure elapsed time when DOM stops changing for a while
              const endTime = new Date();
              const elapsed = (endTime.getTime() - this.startTime.getTime()) / 1000;
               console.log('done loading ' + this.viewName + ': ' + elapsed.toFixed(3) + ' seconds');

              // save/update elapsed time for this view
              this.benchmark[this.viewName] = elapsed.toFixed(3) + ' s';
              if (!this.$$phase) {
                  this.$apply('benchmark');
              }

              this.viewName = null;
        }, 250);
      }
    });
  }

  public Start(name) {
    this.startTime = new Date();
    this.viewName = name;
  }

}
