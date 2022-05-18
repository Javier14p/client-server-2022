const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

let newpractice = express();
let cake = express();
let donuts = express();

let test = "git";

//This is for de first part of the practice
newpractice.get('/', (request, response)=>{
    response.send("The carpets are: `bin` - `node_modules` - `public` - `routes` - `views`");
});

app.use(['/newpractice'], newpractice);

//End of the first (the menu) part

//Bin carpet
app.get('/newpractice/bin', (request, response)=>{
    response.send("this is the bin carpet, here we have the ports and modules of Express");
});
//End of the bin carpet

//node_modules carpet
app.get('/newpractice/node_modules', (request, response)=>{
    response.send("This `node_modules` is a directory of folders that is made by use nmp (We have lots of folders)");
});

app.get('/newpractice/node_modules/bin', (request, response)=>{
    response.send("This is another bin carpet but for `node_modules`, in this carpet we have a lot of things I don't understand");
});

app.get('/newpractice/node_modules/@sindresornhus', (request, response)=>{
    response.send("In this carpet we have a license");
});

app.get('/newpractice/node_modules/@szmarczak', (request, response)=>{
    response.send("In this carpet we have another license");
});

app.get('/newpractice/node_modules/abbrev', (request, response)=>{
    response.send("In this carpet we have another license");
});

app.get('/newpractice/node_modules/accepts', (request, response)=>{
    response.send("In this carpet I think is another License :D ");
});


 //acorn carpet for modules
app.get('/newpractice/node_modules/acorn', (request, response)=>{
    response.send("In this carpet we have miscellaneous things :D ");
});

app.get('/newpractice/node_modules/acorn/bin', (request, response)=>{
    response.send("This is a bin carpet for `corn` ");
});

app.get('/newpractice/node_modules/acorn/dist', (request, response)=>{
    response.send("In this carpet of `acorn` we have miscellaneous things :D ");
});

app.get('/newpractice/node_modules/acorn/src', (request, response)=>{
    response.send("In this carpet we have a lot of .js files and 3 carpets, that are: `bin` - `loose` - `walk`");
});

app.get('/newpractice/node_modules/acorn/src/bin', (request, response)=>{
    response.send("this is a bin carpet for `src`");
});

app.get('/newpractice/node_modules/acorn/src/loose', (request, response)=>{
    response.send("in this carpet of `src`, we have many .js files");
});

app.get('/newpractice/node_modules/acorn/src/walk', (request, response)=>{
    response.send("in this carpet of `src`, we have a index.js file");
});

 //end of acorn carpet for modules

app.get('/newpractice/node_modules/acorn-globals', (request, response)=>{
    response.send("In this carpet is for a license I think :D ");
});

app.get('/newpractice/node_modules/align-text', (request, response)=>{
    response.send("In this carpet is for a license I think :D ");
});

app.get('/newpractice/node_modules/amdefine', (request, response)=>{
    response.send("In this carpet is for a license I think :D ");
});

app.get('/newpractice/node_modules/ansi-align', (request, response)=>{
    response.send("In this carpet is for aligning I think :D ");
});

app.get('/newpractice/node_modules/ansi-regex', (request, response)=>{
    response.send("In this carpet is for a license I think :D ");
});

app.get('/newpractice/node_modules/ansi-styles', (request, response)=>{
    response.send("In this carpet is for a license I think :D ");
});

app.get('/newpractice/node_modules/anymatch', (request, response)=>{
    response.send("In this carpet is for a license I think :D ");
});

app.get('/newpractice/node_modules/array-flatten', (request, response)=>{
    response.send("In this carpet is for arrays I think :D ");
});

app.get('/newpractice/node_modules/asap', (request, response)=>{
    response.send("In this carpet is for arrays I think :D ");
});

app.get('/newpractice/node_modules/balanced-match', (request, response)=>{
    response.send("In this carpet is for arrays I think :D, and we have the carpet: `.github` ");
});

app.get('/newpractice/node_modules/balanced-match/.github', (request, response)=>{
    response.send("this carpet `.github` is for an author ");
});

app.get('/newpractice/node_modules/binary-extensions', (request, response)=>{
    response.send("In this carpet is for a license I think :D ");
});

app.get('/newpractice/node_modules/body-parser', (request, response)=>{
    response.send("In this carpet is for a license I think :D, here we have the carpet: `lib`");
});

app.get('/newpractice/node_modules/body-parser/lib', (request, response)=>{
    response.send("In this carpet we have another carpet called `types` and a read.js file");
});

app.get('/newpractice/node_modules/body-parser/lib/types', (request, response)=>{
    response.send("in this carpet we have 4 .js files");
});

app.get('/newpractice/node_modules/boxen', (request, response)=>{
    response.send("In this carpet is for a license I think :D, here we have the carpet: `node_modules`");
});

app.get('/newpractice/node_modules/boxen/node_modules', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/brace-expansion', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/braces', (request, response)=>{
    response.send("In this carpet is for a license I think :D, here we have the carpet: `lib`");
});

app.get('/newpractice/node_modules/braces/lib', (request, response)=>{
    response.send("In this carpet we hace many .js files");
});

app.get('/newpractice/node_modules/bytes', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cacheable-request', (request, response)=>{
    response.send("In this carpet is for a license I think :D, here we have the carpet: `node_modules` and `src`");
});

app.get('/newpractice/node_modules/cacheable-request/node_modules', (request, response)=>{
    response.send("In this carpet we have the carpet: `get-stream` and `lowercase-key`");
});

app.get('/newpractice/node_modules/cacheable-request/node_modules/get-stream', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cacheable-request/node_modules/lowercase-keys', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cacheable-request/node_modules/src', (request, response)=>{
    response.send("In this carpet we have an index.js file :D");
});

app.get('/newpractice/node_modules/camelcase', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/center-align', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/chalk', (request, response)=>{
    response.send("In this carpet is for a license I think :D, and we have the carpets: `node_modules` and `source`");
});

app.get('/newpractice/node_modules/chalk/node_modules', (request, response)=>{
    response.send("In this carpet we have the carpets: `has-flag` and `supports-colors`");
});

app.get('/newpractice/node_modules/chalk/node_modules/has-flag', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/chalk/node_modules/supports-color', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/chalk/source', (request, response)=>{
    response.send("In this carpet we have 3 .js files :D");
});

app.get('/newpractice/node_modules/character-parser', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/chokidar', (request, response)=>{
    response.send("In this carpet is for a license I think :D, we have the carpets `lib` and `types`");
});

app.get('/newpractice/node_modules/chokidar/lib', (request, response)=>{
    response.send("in this carpet we have 3 .js files");
});

app.get('/newpractice/node_modules/chokidar/types', (request, response)=>{
    response.send("in this carpet we have a index file");
});

app.get('/newpractice/node_modules/ci.info', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/clean-css', (request, response)=>{
    response.send("In this carpet is for a license I think :D, we have 3 carpets: `bin` `lib` `node_modules`");
});

app.get('/newpractice/node_modules/clean-css/bin', (request, response)=>{
    response.send("here we have an file");
});

app.get('/newpractice/node_modules/clean-css/lib', (request, response)=>{
    response.send("here we have a lot of folders D:");
});

app.get('/newpractice/node_modules/clean-css/node_modules', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cli-boxes', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cliui', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `test`");
});

app.get('/newpractice/node_modules/cliui/test', (request, response)=>{
    response.send("In this carpet we have a file");
});

app.get('/newpractice/node_modules/clone-response', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `src`");
});

app.get('/newpractice/node_modules/clone-response/src', (request, response)=>{
    response.send("Here we have an index.js file");
});

app.get('/newpractice/node_modules/color-convert', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/color-name', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/commander', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/concat-map', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have 2 folders: `example` and `test`");
});

app.get('/newpractice/node_modules/concat-map/example', (request, response)=>{
    response.send("Here we have an .js file");
});

app.get('/newpractice/node_modules/concat-map/test', (request, response)=>{
    response.send("Here we have an .js file");
});

app.get('/newpractice/node_modules/configstore', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/constantinople', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a folder called `test`");
});

app.get('/newpractice/node_modules/constantinople/test', (request, response)=>{
    response.send("Here we have an .js file");
});

app.get('/newpractice/node_modules/content-disposition', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/content-type', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cookie', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cookie-parser', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/cookie-signature', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/crypto-random-string', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/css', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/css-parse', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/css-stringify', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/debug', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `src` carpet");
});

app.get('/newpractice/node_modules/debug/src', (request, response)=>{
    response.send("In this carpet we have 5 .js files");
});

app.get('/newpractice/node_modules/decamelize', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/decompress-response', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/deep-extend', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a carpet called `lib`");
});

app.get('/newpractice/node_modules/deep-extend/lib', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/defer-to-connect', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a carpet called `dist`");
});

app.get('/newpractice/node_modules/defer-to-connect/dist', (request, response)=>{
    response.send("In this carpet we have a file");
});

app.get('/newpractice/node_modules/depd', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a carpet called `lib`");
});

app.get('/newpractice/node_modules/depd/lib', (request, response)=>{
    response.send("In this carpet is we have 2 other carpets called: `browser` and `compat`");
});

app.get('/newpractice/node_modules/depd/lib/browser', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/depd/lib/compat', (request, response)=>{
    response.send("In this carpet we have 3 .js files");
});

app.get('/newpractice/node_modules/distroy', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/dot-prop', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/ee-first', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/emoji-regex', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called: `es2015`");
});

app.get('/newpractice/node_modules/emoji-regex/es2015', (request, response)=>{
    response.send("In this carpet we have 2 .js files");
});

app.get('/newpractice/node_modules/encodeurl', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/end-of-stream', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/escaé-goat', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/escape-html', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/etag', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/express', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 2 carpets: `lib` and `node_modules`");
});

app.get('/newpractice/node_modules/express/lib', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 2 other carpets: `middleware` and `router`");
});

app.get('/newpractice/node_modules/express/lib/middleware', (request, response)=>{
    response.send("In this carpet we have some .js files");
});

app.get('/newpractice/node_modules/express/lib/router', (request, response)=>{
    response.send("In this carpet we have some .js files");
});

app.get('/newpractice/node_modules/express/node_modules', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/fill-range', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});


app.get('/newpractice/node_modules/finalhandler', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});


app.get('/newpractice/node_modules/forwarded', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/fresh', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/get-stream', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/glob-parent', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/global-dirs', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/got', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `source`");
});

app.get('/newpractice/node_modules/got/source', (request, response)=>{
    response.send("In this carpet is we have a lot of .js files and a `utils` carpet");
});

app.get('/newpractice/node_modules/got/source/utils', (request, response)=>{
    response.send("In this carpet is we have a lot of .js files");
});

app.get('/newpractice/node_modules/graceful-fs', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/graceful-readlink', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/has-flag', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/has-yarn', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/http-cache-semantics', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/http-errors', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/iconv-lite', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 2 carpets: `encodings` and `lib`");
});

app.get('/newpractice/node_modules/iconv-lite/encodigns', (request, response)=>{
    response.send("In this carpet we have lot of .js files and a carpet called `tables`");
});

app.get('/newpractice/node_modules/iconv-lite/encodigns/tables', (request, response)=>{
    response.send("In this carpet we have lot of .json files");
});

app.get('/newpractice/node_modules/iconv-lite/lib', (request, response)=>{
    response.send("In this carpet we have a lot of files :D");
});

app.get('/newpractice/node_modules/ignore-by-default', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/import-lazy', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/imurmurhash', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/inherits', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/ini', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/ipaddr.js', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `lib` carpet");
});

app.get('/newpractice/node_modules/ipaddr.js/lib', (request, response)=>{
    response.send("in this we have 2 files");
});

app.get('/newpractice/node_modules/is-binary-path', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-buffer', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `test` carpet");
});

app.get('/newpractice/node_modules/is-buffer/test', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/is-ci', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-extglob', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-fullwidth-code-point', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-glob', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-installed-globally', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-npm', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-number', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-obj', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-path-inside', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-promise', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-typedarray', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/is-yarn-global', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/jade', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 2 carpets: `bin` and `lib`");
});

app.get('/newpractice/node_modules/jade/bin', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/jade/lib', (request, response)=>{
    response.send("In this carpet we have lot of .js files and a `nodes` carpet");
});

app.get('/newpractice/node_modules/jade/lib/nodes', (request, response)=>{
    response.send("In this carpet we have lot of .js files");
});

app.get('/newpractice/node_modules/json-buffer', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet: `test`");
});

app.get('/newpractice/node_modules/json-buffer/test', (request, response)=>{
    response.send("In this carpet we have a file");
});

app.get('/newpractice/node_modules/jstransformer', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/keyv', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet: `src`");
});

app.get('/newpractice/node_modules/keyv/src', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/kind-of', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/latest-version', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/lazy-cache', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/longest', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/lowercase-keys', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/lru-cache', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/make-dir', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `node_modules`");
});

app.get('/newpractice/node_modules/make-dir/node_modules', (request, response)=>{
    response.send("In this carpet we have 2 carpets: `.bin` and `semver`");
});

app.get('/newpractice/node_modules/make-dir/node_modules/.bin', (request, response)=>{
    response.send("in this carpet we have some files");
});

app.get('/newpractice/node_modules/make-dir/node_modules/semver', (request, response)=>{
    response.send("in this carpet we have some files and a carpet called `bin`");
});

app.get('/newpractice/node_modules/make-dir/node_modules/semver/bin', (request, response)=>{
    response.send("in this carpet we have a .js file");
});

app.get('/newpractice/node_modules/media-typer', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/merge-descriptors', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/methods', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/mime', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `build`");
});

app.get('/newpractice/node_modules/mime/build', (request, response)=>{
    response.send("In this carpet we have 2 .js files");
});

app.get('/newpractice/node_modules/mime-db', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/mime-types', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/mimic-response', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/minimatch', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/minimist', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 2 carpets: `example` and `test`");
});

app.get('/newpractice/node_modules/minimist/example', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/minimist/test', (request, response)=>{
    response.send("In this carpet we have lot of .js files");
});

app.get('/newpractice/node_modules/mkdirp', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `bin`");
});

app.get('/newpractice/node_modules/mkdirp/bin', (request, response)=>{
    response.send("In this carpet we have some files");
});

app.get('/newpractice/node_modules/morgan', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/ms', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/negotiator', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `lib`");
});

app.get('/newpractice/node_modules/negotiator/lib', (request, response)=>{
    response.send("In this carpet we have some .js files");
});

app.get('/newpractice/node_modules/nodemon', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 3 carpets called `bin`, `doc` and `lib`");
});

app.get('/newpractice/node_modules/nodemon/bin', (request, response)=>{
    response.send("In this carpet we have some files");
});

app.get('/newpractice/node_modules/nodemon/doc', (request, response)=>{
    response.send("In this carpet we have some files");
});

app.get('/newpractice/node_modules/nodemon/lib', (request, response)=>{
    response.send("In this carpet we have some files and carpets");
});

app.get('/newpractice/node_modules/nodemon/node_modules', (request, response)=>{
    response.send("In this carpet we have some files and carpets");
});

app.get('/newpractice/node_modules/nopt', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 3 carpets called `bin`, `examples` and `lib`");
});

app.get('/newpractice/node_modules/nopt/bin', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/nopt/examples', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/nopt/lib', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/normalize-path', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/normalize-url', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/on-finished', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/on-headers', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/once', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/optimist', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 2 carpets: `example` and `test`");
});

app.get('/newpractice/node_modules/optimist/example', (request, response)=>{
    response.send("In this carpet we have a lot of .js files");
});

app.get('/newpractice/node_modules/optimist/test', (request, response)=>{
    response.send("In this carpet we have some .js files");
});

app.get('/newpractice/node_modules/p-cancelable', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/package-json', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `node_modules` carpet");
});

app.get('/newpractice/node_modules/package-json/node_modules', (request, response)=>{
    response.send("In this carpet we have some carpets");
});

app.get('/newpractice/node_modules/parseurl', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/path-to-regexp', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/picomatch', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `lib` carpet");
});

app.get('/newpractice/node_modules/picomatch/lib', (srequest, response)=>{
    response.send("In this carpet we have some .js files");
});

app.get('/newpractice/node_modules/promise', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `lib` carpet");
});

app.get('/newpractice/node_modules/promise/lib', (request, response)=>{
    response.send("In this carpet we have some .js files");
});

app.get('/newpractice/node_modules/proxy-addr', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/pstree.remy', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/pump', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/pupa', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/qs', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/tange-parser', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/raw-body', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/rc', (request, response)=>{
    response.send("In this carpet is for a license I think and 3 carpets: `lib`, `node_modules` and `test`");
});

app.get('/newpractice/node_modules/rc/lib', (request, response)=>{
    response.send("Here we have a .js file");
});

app.get('/newpractice/node_modules/rc/node_modules', (request, response)=>{
    response.send("In this carpet is for a license :D");
});

app.get('/newpractice/node_modules/rc/test', (request, response)=>{
    response.send("Here we have 3 .js files");
});

app.get('/newpractice/node_modules/readdirp', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/resgistry-auth-token', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/resgistry-url', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/repeat-string', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/responselike', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `src` carpet");
});

app.get('/newpractice/node_modules/responselike/src', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/right-align', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/safe-buffer', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/safer-buffer', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/semver', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet `bin`");
});

app.get('/newpractice/node_modules/semver/bin', (request, response)=>{
    response.send("In this carpet we have a file named `semver`");
});

app.get('/newpractice/node_modules/semver-diff', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a `node_modules` carpet");
});

app.get('/newpractice/node_modules/semver-diff/node_modules', (request, response)=>{
    response.send("In this carpet we have 2 carpets: `.bin` and `semver`");
});

app.get('/newpractice/node_modules/semver-diff/node_modules/.bin', (request, response)=>{
    response.send("In this carpet we some files");
});

app.get('/newpractice/node_modules/semver-diff/node_modules/semver', (request, response)=>{
    response.send("In this carpet we some files and a carpet called `bin`");
});

app.get('/newpractice/node_modules/send', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/serve-static', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/setprototypeof', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/signal-exit', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/source-map', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have 2 carpets: `build` and `lib`");
});

app.get('/newpractice/node_modules/source-map/build', (request, response)=>{
    response.send("In this carpet we have many files");
});

app.get('/newpractice/node_modules/source-map/lib', (request, response)=>{
    response.send("In this carpet we 1 .js file and a carpet called `source-map`");
});

app.get('/newpractice/node_modules/source-map/lib/source-map', (request, response)=>{
    response.send("In this carpet we have a lot of .js files");
});

app.get('/newpractice/node_modules/statuses', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/string-width', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/strip-ansi', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/strip-json-comments', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/supports-color', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/strip-ansi', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/to-readable-stream', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/to-regex-range', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/touch', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet `bin`");
});

app.get('/newpractice/node_modules/touch/bin', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/transformers', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have 2 carpets: `lib` and `node_modules`");
});

app.get('/newpractice/node_modules/transformers/lib', (request, response)=>{
    response.send("In this carpet we have 2 .js files");
});

app.get('/newpractice/node_modules/transformers/node_modules', (request, response)=>{
    response.send("In this carpet we have a lot of carpets D:");
});

app.get('/newpractice/node_modules/type-fest', (request, response)=>{
    response.send("In this carpet is for a license I think :D and 2 carpets: `source` and `ts41`");
});

app.get('/newpractice/node_modules/type-fest/source', (request, response)=>{
    response.send("In this carpet we have a lot of files!!");
});

app.get('/newpractice/node_modules/type-fest/ts41', (request, response)=>{
    response.send("In this carpet we have a lot of files!!");
});

app.get('/newpractice/node_modules/type-is', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/typedarray-to-buffer', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a carpet called `test`");
});

app.get('/newpractice/node_modules/typedarray-to-buffer/test', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/uglify-js', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have 4 carpets");
});

app.get('/newpractice/node_modules/uglify-js', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have 4 carpets");
});

app.get('/newpractice/node_modules/uglify-to-browserify', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a carpet called `test`");
});

app.get('/newpractice/node_modules/uglify-to-browserify/test', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a carpet called `test`");
});

app.get('/newpractice/node_modules/undefsafe', (request, response)=>{
    response.send("In this carpet is for a license I think :D and we have a carpet called `.github` and `lib`");
});

app.get('/newpractice/node_modules/unique-string', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/unpipe', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/update-notifier', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/url-parse-law', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/utils-merge', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/vary', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/void-elements', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `test`");
});

app.get('/newpractice/node_modules/void-elements/lib', (request, response)=>{
    response.send("In this carpet we have a .js file");
});

app.get('/newpractice/node_modules/widest-line', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/window-size', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/with', (request, response)=>{
    response.send("In this carpet is for a license I think :D and a carpet called `node_modules`");
});

app.get('/newpractice/node_modules/with/node_modules', (request, response)=>{
    response.send("In this carpet we have another ones");
});

app.get('/newpractice/node_modules/wordwrap', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/wrap-ansi', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/wrappy', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/write-file-atomic', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/xdg-basedir', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/yallist', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

app.get('/newpractice/node_modules/yargs', (request, response)=>{
    response.send("In this carpet is for a license I think :D");
});

//End of the node_modules carpet

//public carpet

app.get('/newpractice/public', (request, response)=>{
    response.send("In this carpet we have another 3 more, that are: `images`, `javascripts`, `stylesheets`");
});

app.get('/newpractice/public/images', (request, response)=>{
    response.send("In this carpet we can put some images or resources about the pages that we will create.");
});

app.get('/newpractice/public/javascripts', (request, response)=>{
    response.send("In this carpet we can put some javascripts.");
});

app.get('/newpractice/public/css', (request, response)=>{
    response.send("In this carpet we have a .css file that contain the body style.");
});

//end of the carpet public

//routes carpet

app.get('/newpractice/routes', (request, response)=>{
    response.send("In this carpet we have 2 .js files, that contain code for the routes of the pages`");
});

//end of routes carpet

//views carpet
app.get('/newpractice/views', (request, response)=>{
    response.send("In this carpet we have 3 .jade files");
});

//end of the view carpet


// let secret = express();
// secret.get('/', (request,response)=>{
//     response.send("this is the secrect section");
// });

// admin.get('/secr*t', secret);
// app.use(['/adm*n', '/manager'], admin);

// app.get("/", (request, response) =>{
//     response.send("Hello Javier")
// });

// app.get("/javier+", (request, response) =>{
//     response.send("This rout is only for javier")
// })

// app.use(express.static("cats"));

// app.get("/render", (request, response) =>{
//     response.sendFile(path.join(__dirname+"/views/text.html"));
// });

app.listen(port, () =>{
    console.log("this app is running in the port 3000");
})