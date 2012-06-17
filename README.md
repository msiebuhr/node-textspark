Textspark
=========

Node.js/JavaScript implementation of [@holman](https://github.com/holman)'s
[spark](https://github.com/holman/spark).

Install
-------

From repository:

    git clone git://github.com/msiebuhr/node-textspark.git
    cd node-textspark
    npm link
    cd ../your-other-project
    npm link textspark

From NPM:

    npm install textspark

Usage
-----

    #!/usr/bin/env node
    var spark = require('textspark');
    console.log(spark([1,2,3,4,5,6,7,3]))

Prints:

    ▁▂▂▃▅▆▆▂

License
-------

Three-clause BSD; see
[LICENSE](https://github.com/msiebuhr/node-textspark/blob/master/LICENSE).
