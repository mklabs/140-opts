var opts   = require('../');
var assert = require('assert');

var args = process.argv.slice(2);
if(args.length) return console.log(opts(args));

var args = ['--foo', 'foo', '--bar', 'bar', '-b', 'baz', '-o', 'woot', '--blah'];
var argv = opts(args);

assert.deepEqual(argv, {
  foo: 'foo',
  bar: 'bar',
  b: 'baz',
  o: 'woot',
  blah: true
});

console.log(`

    Success!

    $ ${args.join(' ')}

    ${require('util').inspect(argv, { colors: true })}

    \\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/                        \\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/                        \\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/       We did it!       \\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/                        \\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/                        \\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/
    \\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/\\o/
`);
