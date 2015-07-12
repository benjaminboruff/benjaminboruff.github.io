angular.module("site-manager").run(["$templateCache", function($templateCache) {$templateCache.put("partials/about.html","<main>    \n  <section>   \n    <div class=\"container narContent\">\n      <img src=\"img/ben2.jpg\" alt=\"Photograph of Ben Boruff\" class=\"profile-photo img-circle\">\n      <h3>About</h3>\n      <p class=\"lead\">Hi, I\'m Ben Boruff! This is my personal website where I share information about myself, such as my interests, sample  apps, and resume.</p>\n\n      <h4>Programming</h4>\n      <p>In the past, I have programed in Scheme, ANSI C/C++, Ruby, and a little Python. Now, I have commited to JavaScript. Using Angular on the frontend and Node on the backend has made the thin-server concept very appealing. As a matter of fact, it may herald the death of the thin-client architecture since modern client systems (including smartphones) are powerful enough to handle frontend-heavy JavaScript apps all by themselves. Additionally, using the same language on both the client and server is just plain ... logical.</p>\n      <p> Docker further enhances the thin-server model by making microservices easily deployable and manageable. </p>\n\n      <h4>Coffee</h4>\n      <p>I roast my own coffee. I\'m not sure if it is cheaper to buy and roast green coffee beans or not, but it sure is fun. The quality is certainly better than most \"gourmet\" coffee. I guess you could say that I\'m a coffee snob. </p>\n\n      <p>If I had to choose just one coffee to roast/brew/drink I would pick a humble Colombian. Having said that, I truly enjoy Ethiopian coffees. An Ethiopian Yirgacheffe would be my second choice, with a Harrar not far behind. </p>\n\n      <h4>Space and Sci-fi</h4>\n      <p>I have been a Space and Science Fiction fan for as long as I can remember. My father and I used to watch the original <em>Star Trek</em> series reruns when I was a kid. I also used to get up early on Saturdays to watch the old black and white <em>Flash Gordon</em> reruns on WGN. Remember <em>Space: 1999</em>, with Martin Landau and Barbara Bain? Loved it. Bab5? Loved it. DS9 was probably my favorite ST series, second to TOS. And of course, <em>Star Wars</em>....</p> \n\n      <p> My Dad and I also spent many hours building model rockets. I believe both of us were influenced by my great-grandmother, who was a big fan of the Mercury/Gemini/Apollo programs. I am proud to say that I\'m old enough to have watched the Apollo-Soyuz rendezvous ... the last Apollo mission, and Deke Slayton\'s one and only ride into space. What an honor.</p>\n\n       <p class=\"pushDown\">If you are interested in following me on Twitter, my username is @BenjaminBoruff.</p>\n    </div>\n  </section>\n</main>\n    \n");
$templateCache.put("partials/contact.html","<main>\n  <section>\n    <div class=\"container narContent\">\n     <div class=\"row\" id=\"primary\">        \n       <div class=\"col-sm-6\">\n         <h3>General Information</h3>\n         <p>I am currently looking for contract or salaried work. Remote work would be great.</p>\n         <p>Please use email to contact me.</p>\n       </div>\n       <div class=\"col-sm-6 pushDown\">\n         <h3>Contact Details</h3>\n         <ul class=\"contact-info\">\n           <li class=\"mail\"><a href=\"mailto:benboruff@gmail.com\">benboruff@gmail.com</a></li>\n           <li class=\"twitter\"><a href=\"http://twitter.com/intent/tweet?screen_name=BenjaminBoruff\">@BenjaminBoruff</a></li>\n         </ul>\n       </div>\n     </div>\n  </section>\n</main>      ");
$templateCache.put("partials/portfolio.html","<main>\n  <section>\n    <!-- Start Jumbotron -->\n    <div class=\"container\">\n      <div class=\"jumbotron\">\n        <video-bg video-id=\"\'aLQeqyOK4lE\'\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"well\" id=\"leftinfo\">\n                <p>Welcome to my website. This is where I will be adding sample webapps in the next few weeks. As a matter of fact, this entire\n                  site is a single-page app! It looks great on mobile, too, thanks to the Bootstrap CSS framework. Try it out.</p>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"well\">\n                <h4>{{pfctrl.apodData.title}}</h4>\n                <div ng-show=\"pfctrl.apodData.error\">\n                  <h3>An ERROR has occurred retrieving the NASA Astronomy Picture of the Day. {{pfctrl.apodData.message}}</h3>\n                </div>\n                <div class=\"embed-responsive embed-responsive-16by9\" ng-show=\"pfctrl.video\">\n                  <iframe class=\"embed-responsive-item\" ng-src=\"{{pfctrl.apodData.url | trusted}}\" allowFullScreen></iframe>\n                </div>\n                <div ng-hide=\"pfctrl.video\">\n                  <img class=\"img-responsive center-block\" alt=\"NASA Picture of the day\" ng-src=\"{{pfctrl.apodData.url}}\">\n                </div>\n                <h5>{{pfctrl.apodData.explanation}}</h5>\n                <h6>\n                  <em>(Title, image/video, and explanation loaded automatically from NASA\'s APOD API endpoint. These data change daily.)</em>\n                </h6>\n              </div>\n            </div>\n          </div>\n        </video-bg>\n      </div>\n    </div>\n  </section>\n  <!-- End Jumbotron -->\n  <section>\n    <!-- Video Projects -->\n    <div class=\"container pushDown\">\n      <h4 align=\"center\" id=\"vidHeadline\">Video Projects from Production Class</h4>\n      <tabset justified=\"true\" id=\"max720px\" class=\"center-block\">\n        <tab heading=\"TV Invasion!\" id=\"tab-color\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LwvTK2_G1-k\" allowFullScreen></iframe>\n          </div>\n          <div align=\"center\">\n            <p class=\"vidCaption\">TV Invasion! was a live-to-tape production that I wrote/directed.</p>\n          </div>\n        </tab>\n        <tab heading=\"Murder and Merlot\" id=\"tab-color\">\n          <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VM7EUeYPjfk\" allowFullScreen></iframe>\n          </div>\n          <div align=\"center\">\n            <p class=\"vidCaption\">Murder and Merlot was my first video effort. Silent but silly.</p>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n  </section>\n  <!-- End Video Projects -->\n</main>");
$templateCache.put("partials/pw-footer.html","<footer class=\"footer navbar-fixed-bottom\">\n  <div class=\"container text-center\">       \n    <div>\n      <a href=\"https://twitter.com/BenjaminBoruff\"> <img src=\"img/twitter-wrap.png\" alt=\"Twitter Logo\" class=\"social-icon\"></a>\n      <a href=\"https://www.facebook.com/BHBoruff\"><img src=\"img/facebook-wrap.png\" alt=\"Facebook Logo\" class=\"social-icon\"></a>\n    </div>\n    <p>&copy; 2015 Benjamin H Boruff</p>\n  </div>\n</footer>");
$templateCache.put("partials/pw-header.html","<header>\n  <nav role=\"navigation\" class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\" id=\"main-nav-cont\">\n      <div class=\"navbar-header\"><!-- Bootstrap navbar-header -->\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navTarget\"><!-- \"Hamburger\" icon -->\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" ng-click=\"navtop.selectBtn(1)\" href=\"#index\" id=\"brandTop\"><span id=\"myNameNav\">Benjamin Boruff\n          </span></a>\n        <small id=\"brandSubHeading\">SPA Developer</small>\n      </div><!-- End Bootstrap navbar-header -->\n      <div class=\"collapse navbar-collapse\" id=\"navTarget\"><!-- Bootstrap collapsible navbar -->\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li ng-class=\"{ active:navtop.isSelected(1) }\"><a ng-click=\"navtop.selectBtn(1)\" href=\"#index\">Portfolio</a></li>\n          <li ng-class=\"{ active:navtop.isSelected(2) }\"><a ng-click=\"navtop.selectBtn(2)\" href=\"#resume\">Resume</a></li>\n          <li ng-class=\"{ active:navtop.isSelected(3) }\"><a ng-click=\"navtop.selectBtn(3)\" href=\"#about\">About</a></li>\n          <li ng-class=\"{ active:navtop.isSelected(4) }\"><a ng-click=\"navtop.selectBtn(4)\" href=\"#contact\">Contact</a></li>\n        </ul>\n      </div><!-- End collapsible navbar -->\n    </div>\n  </nav>\n</header>");
$templateCache.put("partials/resume.html","<main>\n  <section>\n    <div class=\"container narContent\" id=\"resume\">\n      <div  id=\"objective\">\n        <h3>Objective</h3>\n        <p>Build single-page applications</p>\n      </div>\n      <div id=\"programming\">\n        <h4>Programming Skills</h4>\n        <p>Frontend</p>\n        <ul>\n          <li>HTML/CSS (Bootstrap CSS)</li>\n          <li>JavaScript</li>\n          <li>Angular 1.x</li>\n        </ul>\n        <p>Backend</p>\n        <ul>\n          <li>LoopBack (Express/Node)</li>\n          <li>MongoDB</li>\n          <li>MySql</li>\n        </ul>\n        <p>Dev tools: <em>git</em>, <em>gulp</em>, <em>VS Code</em></p>\n        <p>I have also started learning TypeScript in anticipation of Angular 2.0.</p>\n      </div>\n      <div id=\"education\">\n        <h4>Education</h4>\n        <ul>\n          <li>Master of Science, Kinesiology - Applied Sport Science (Indiana University)</li>\n          <li>Bachelor of General Studies - 50/50 mix Latin and Telecommunications (Indiana University)</li>\n          <li>Bachelor of Arts - Philosophy major with a Computer Science minor (Indiana University)</li>\n        </ul>\n      </div>\n      <h4>Work Experience</h4>\n      <ul>\n        <li>Indiana University Security Engineer (Linux/Windows)</li>\n        <li>Indiana University User Support Specialist/Lanlab Manager</li>\n        <li>Indiana University Netware Admin/Support</li>\n        <li class=\"pushDown\">Indiana University User Support (hourly)</li>\n      </ul>\n    </div>\n  </section>\n</main>");}]);