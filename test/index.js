var opts = require('../'),
  assert = require('assert');

// `node test` --> asserts

// `node test --some thing` --> { some: 'thing' }

var args = process.argv.slice(2);
if(args.length) console.log(opts(args)); return;

var o = opts(['--foo', 'foo', '--bar', 'bar', '-b', 'baz', '-o', 'woot', '--blah']);

console.log(o);

assert.deepEqual(o, {
  foo: 'foo',
  bar: 'bar',
  b: 'baz',
  o: 'woot',
  blah: true
});
