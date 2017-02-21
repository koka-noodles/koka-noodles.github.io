var page = require('webpage').create();
// 'lcu_tier1_image'
page.open('http://frontpage.euw.leagueoflegends.com/it_IT/lol/home/overview', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }


  var x = document.getElementsByClassName("oembed-content-wrapper");
  console.log("Status: " + x);
  console.log("boop " + x.length);

  phantom.exit();
});
