# 140-opts

> Command line arguments parser

This one doesn't do much. But it feets in a tweet.

You'll probably laugh when you'll see the actual code...

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
var opts = require('140-opts');

var o = opts(['--foo', 'foo', '--bar', 'bar', '-b', 'baz', '-o', 'woot', '--blah']);

console.log(o);

assert.deepEqual(o, {
  foo: 'foo',
  bar: 'bar',
  b: 'baz',
  o: 'woot',
  blah: true
});
```

Takes a single argument, an array of String to parse, usually it'll be
`process.argv.slice(2)`.

```js
var opts = require('140-opts')(process.argv.slice(2));
console.log(opts);
```

---

*educational and experimental, doing [140bytes] snippet of node code
is kinda silly... But it's fun! And it's a good opportunity to learn some
super-interesting [byte saving techniques](https://github.com/jed/140bytes/wiki/Byte-saving-techniques)*

[140bytes]: http://140byt.es/
