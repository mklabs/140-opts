# 140-opts

> Command line arguments parser. This one doesn't do much. But it feets in a tweet.


## Installation

    $ npm install 140-opts
    
Alternately, to just copy the file into your repo and avoid an additional `package.json` dependency:

    $ curl https://cdn.rawgit.com/mklabs/140-opts/master/opts.js > 140-opts.js
 
```js
module.exports = function(a){return a.map(function(c,d){return{n:c.match(/^--?(.+)/),v:a[d+1]||!0}}).reduce(function(a,b){b.n&&(a[b.n[1]]=b.v);return a},{})}
```

in a sligtly more readable way (very slightly)

```js
module.exports = function (a) {
  return a
    .map(function (c, d) {
      return {
        n: c.match(/^--?(.+)/),
        v: a[d+1]||!0
      };
    })
    .reduce(function (a, b) {
      b.n&&(a[b.n[1]]=b.v);
      return a;
    }, {})
};

```

## Usage

```js
var opts = require('140-opts')(process.argv.slice(2));
console.log(opts);
```

Takes a single argument, an array of String to parse, usually `process.argv.slice(2)`.

```js
var opts = require('140-opts');
var argv = opts(['--foo', 'foo', '--bar', 'bar', '-b', 'baz', '-o', 'woot', '--blah']);
assert.deepEqual(argv, {
  foo: 'foo',
  bar: 'bar',
  b: 'baz',
  o: 'woot',
  blah: true
});
```

---

*educational and experimental, doing [140bytes] snippet of node code
is kinda silly... But it's fun! And it's a good opportunity to learn some
super-interesting [byte saving techniques](https://github.com/jed/140bytes/wiki/Byte-saving-techniques)*

[140bytes]: http://140byt.es/
