/*
 * ASCII sparklines.
 */

(function(root) {
    var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];

    var spark = function (ints) {
        var max = Math.max.apply(null, ints),
            min = Math.min.apply(null, ints);

        var steps = ints.map(function (tick) {
            var index = Math.round((tick - min) / max * (ticks.length -1));
            return ticks[index];
        });

        return steps.join("");
    }

    if(typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = spark;
        }
        exports.spark = spark;
    } else {
        root.spark = spark;
    }

})(this || window); 
