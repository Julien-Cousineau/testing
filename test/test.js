'use strict';

/*eslint key-spacing: 0, comma-spacing: 0 */

const testadd = require('..'),
    t = require('tape');

t('#testing', function (t) {
    const TD = new testadd({});
    
    t.same(TD.add(1,1),2);
    t.same(TD.substract(1,1),0);
    t.end();
});