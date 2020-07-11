
$client = new-object System.Net.WebClient
$client.DownloadFile("https://cdn.iamport.kr/js/iamport.payment-1.1.5.js","C:\workExt\tst\pays\dmp.js")

$client.DownloadFile("https://code.jquery.com/jquery-1.12.4.min.js","C:\workExt\tst\pays\jquery-1.12.4.min.js")

move dmp.js iamport.payment-1.1.5.js
