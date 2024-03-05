This library helps you run task till successful\
First install the library
```
npm i run-loop
```
Import the library
```
const {loopTask} = require('run-loop')
```
Call the loop function
```
loopTask(ajax(xxx));
loopTask(ajax(xxx), failFunction);
loopTask(ajax(xxx), failFunction, maxRetries);
loopTask(ajax(xxx), failFunction, maxRetries, delayBetweenFail);
```
