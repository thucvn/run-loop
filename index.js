const {isEmty} = require('infinity-utils')
module.exports = {
    sleep: function (delay) {
        new Promise((resolve) => setTimeout(resolve, delay))
    },
    loopTask: function(task, fail, maxTry, delay) {
        let tried = 0;
        (async () => {
            while (true) {
                try {
                    var x = await task;
                    return x;
                } catch (err) {
                    tried ++;
                    if (!isEmty(maxTry) && tried > maxTry) 
                        return null;
                    if (isEmty(fail))
                        console.log(err.message);
                    else fail(err);
                    if (!isEmty(delay)) {
                        await sleep(delay);
                    }
                }
            }
        }) ();
    }
}