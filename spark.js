/*
 * ASCII sparklines.
 */

(function(root) {
    var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];

    var spark = function (ints) {
        // Ignore impossible numbers when making graphs
        var pureNumbers = ints.filter(function (num) {
            return (!isNaN(num)) && (!(num === Infinity || num === -Infinity));
        });

        // Find min and max
        var max = Math.max.apply(null, pureNumbers),
            min = Math.min.apply(null, pureNumbers);

        // Convert to chars
        var steps = ints.map(function (tick) {
            if (isNaN(tick)) { return " "; }
            if (tick === Infinity || tick === -Infinity) { return "∞"; }

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
