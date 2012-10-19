SOCIAL Bootstrap
-----------

NOTE: This code is hosted at davidandsuzi.com/social-bootstrap

This is a fork of Twitter Bootstrap, but with the Facebook JSSDK included and some basic functionality contained in fb.js.

I took code from the following:

Twitter Bootstrap: https://github.com/twitter/bootstrap

Nicholas Gallagher: https://github.com/necolas/css3-social-signin-buttons

Jonathan Vanasco: http://www.destructuring.net/2011/12/08/facebook-developer-notes-javascript-sdk-and-asynchronous-woes/



Quick start
-----------

Clone the repo, `git clone git://github.com/davidchang/bootstrap.git`

At the top of fb.js, you'll need to provide the following:

Your Facebook AppID

Whether your domain supports php

Your domain

```
var root = 'http://localhost/social-bootstrap/bootstrap/';
var appID = '353110578113913';
var php = true;
```

Contributing
------------

Please don't hesitate to contribute! I would learn so much if you would take the time to improve this code. You don't even have to include unit tests. Thanks!


[Copied from Twitter Bootstrap] Developers
----------

We have included a makefile with convenience methods for working with the Bootstrap library.

+ **dependencies**
Our makefile depends on you having recess, connect, uglify.js, and jshint installed. To install, just run the following command in npm:

```
$ npm install recess connect uglify-js jshint -g
```

+ **build** - `make`
Runs the recess compiler to rebuild the `/less` files and compiles the docs pages. Requires recess and uglify-js. <a href="http://twitter.github.com/bootstrap/less.html#compiling">Read more in our docs &raquo;</a>

+ **test** - `make test`
Runs jshint and qunit tests headlessly in [phantomjs](http://code.google.com/p/phantomjs/) (used for ci). Depends on having phantomjs installed.

+ **watch** - `make watch`
This is a convenience method for watching just Less files and automatically building them whenever you save. Requires the Watchr gem.



Authors
-------

**David Chang**

+ http://twitter.com/davidchizzle
+ http://github.com/davidchang

And the Bootstrap guys:

**Mark Otto**

+ http://twitter.com/mdo
+ http://github.com/markdotto

**Jacob Thornton**

+ http://twitter.com/fat
+ http://github.com/fat