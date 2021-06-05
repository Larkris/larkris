/*
[rewrite_local]
^https?://testflight\.apple\.com/v\d/accounts/.+?/install$ url script-request-body https://raw.githubusercontent.com/Larkris/larkris/main/script/testflight.js

[mitm]
hostname = testflight.apple.com
*/
$done({ 
body: $request.body
.replace(/storefrontId\" ?: ?\".+?\"/,'storefrontId" : "143441-1,29"')
})