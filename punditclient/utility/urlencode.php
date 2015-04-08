<?php
/**
 * Created by PhpStorm.
 * User: felixlange
 * Date: 24.02.14
 * Time: 16:03
 */
echo ("hello World.");
$encoded=urlencode("SELECT * WHERE { ?s ?p ?o }");
//http://as.thepund.it:8080/annotationserver/api/annotations/metadata/search?scope=all&query=%7B%22resources%22%3A%5B%22http%3A%2F%2Fwww.marxists.org%2Freference%2Farchive%2Fbenjamin%2F1940%2Fhistory.htm%22%5D%7D
//$encoded=urldecode("%7B%22resources%22%3A%5B%22http%3A%2F%2Fwww.marxists.org%2Freference%2Farchive%2Fbenjamin%2F1940%2Fhistory.htm%22%5D%7D");
//$encoded=urldecode("%7B%22resources%22%3A%5B%22http%3A%2F%2Fwww.marxists.org%2Freference%2Farchive%2Fbenjamin%2F1940%2Fhistory.htm%22%5D%7D");
//echo ($encoded.'     ');
//$encoded=urlencode('{"resources":["http://143.93.114.133/ibr/rest/oberwesel/features/134"]}');
$encoded=urlencode('select * where { graph ?g {?s ?p ?o. }');

echo ($encoded);
/*
http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/open/notebooks/5b2ac337/sparql?query={SELECT+*+WHERE+{+%3Fs+%3Fp+%3Fo+}}
MALFORMED QUERY: Encountered " "{" "{ "" at line 1, column 1.
Was expecting one of:
    "base" ...
    "prefix" ...
    "select" ...
    "construct" ...
    "describe" ...
    "ask" ...
*/
