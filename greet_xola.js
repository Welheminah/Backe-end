const greet = require('./greet');

var figlet = require('figlet');

figlet(greet('Xola'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    const chalk = require('chalk');

    const greet = require('./greet');
    
    const msg = chalk.bgBlue.black(greet('Xola'));
    console.log(msg);
});