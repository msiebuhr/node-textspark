/*
 * ASCII sparklines.
 */

var ticks = ['▁', '▂', '▃', '▅', '▆', '▇'];

function spark(ints) {
    var max = Math.max.apply(null, ints),
        min = Math.min.apply(null, ints);

    var steps = ints.map(function (tick) {
        var index = Math.round((tick - min) / max * (ticks.length -1));
        return ticks[index];
    });

    return steps.join("");

}

module.exports = spark;
