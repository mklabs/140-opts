module.exports =

   function(a){return a.map(function(c,d){return{n:c.match(/^--?(.+)/),v:a[d+1]||!0}}).reduce(function(a,b){b.n&&(a[b.n[1]]=b.v);return a},{})}

// function(a){return a.map(function(b,c){return{n:b.match(/^--?(.+)/),v:a[c+1]||!0}}).reduce(function(a,b){if(b.n)a[b.n[1]]=b.v;return a},{})}

// function(a){return a.map(function(c,d){return{n:c.match(/^--?(.+)/),v:a[d+1]||!0}}).reduce(function(a,b){b.n&&(a[b.n[1]]=b.v);return a},{})}

// function(a){return a.map(function(c,d){return{n:c.match(/^--?(.+)/),v:a[d+1]||!!a}}).reduce(function(a,b){b.n&&(a[b.n[1]]=b.v);return a},{})}

// function(a){return a.map(function(c,d){c=c.match(/^--?(.+)/);return c&&{n:c[1],v:a[d+1]||!!a}}).reduce(function(a,b){b&&(a[b.n]=b.v);return a},{})}

// function(a){return a.map(function(c,d){c=c.match(/^--?([\w]+)/);return c&&{n:c[1],v:a[d+1]||!!a}}).reduce(function(a,b){b&&(a[b.n]=b.v);return a},{})}

// function(a,l){l=/^--?([\w]+)/;return a.map(function(a,b,c,d){d=a.match(l);return d&&{n:d[1],v:c[b+1]||!!d}}).reduce(function(a,b){b&&(a[b.n]=b.v);return a;},{})}


