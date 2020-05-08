(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/greenSweater.c0feb272.jpg"},function(e,t,n){e.exports=n.p+"static/media/connect4.bc347433.png"},function(e,t,n){e.exports=n.p+"static/media/fitChallenge.33c1300c.png"},function(e,t,n){e.exports=n.p+"static/media/cookbook.a84a7423.png"},function(e,t,n){e.exports=n.p+"static/media/earthFriendly.b81a9e22.png"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),i=n.n(r),o=(n(17),n(18),n(1)),c=n(2),s=n(4),p=n(3),u=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Isabel Limas"),l.a.createElement("h3",null,"Full Stack Developer"))}}]),n}(a.Component),m=n(7),h=n.n(m),d=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"section me"},l.a.createElement("h2",null,"About Me: "),l.a.createElement("section",{style:{display:"flex",margin:"5%"}},l.a.createElement("div",{className:"about-description"},l.a.createElement("p",null,"I am a dedicated software engineer that would love to bring my passion for health and biology into the field of technology. Learning and working with new technologies is something I enjoy and would love to work in a collaborative environment with others who share similar interests.")),l.a.createElement("div",null,l.a.createElement("img",{className:"myPic",src:h.a,alt:"Isabel in green sweater"}))))}}]),n}(a.Component),f=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"project"},l.a.createElement("section",null,l.a.createElement("h3",null,this.props.project.title),l.a.createElement("p",null,"About the app: ",this.props.project.description)),l.a.createElement("section",null,l.a.createElement("img",{src:this.props.project.image,alt:this.props.project.image,width:"100%"}),l.a.createElement("p",null,"Click ",l.a.createElement("a",{href:this.props.project.link},"HERE")," for deployed app.")))}}]),n}(a.Component),g=n(8),E=n.n(g),b=n(9),y=n.n(b),v=n(10),w=n.n(v),j=n(11),k=n.n(j),O=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=[{title:"Connect Four: Online Game",description:"The Connect Four web application is an interactive two player game that was built using HTML, CSS, and JavaScript. The application is pushed to Github and deployed on AWS and Netlify",image:"".concat(E.a),link:"https://master.d35is8w5c4alkl.amplifyapp.com/"},{title:"My Cookbook",description:"",image:"".concat(w.a),link:"https://my-cook-book-pr2.herokuapp.com/"},{title:"Choose Earth Friendly",description:"More people have been making a move to becoming earth-friendly for multiple reasons. Although it is increasing in popularity, it is still a bit challenging to go on the search for stores or restaurants that are completely earth-friendly or offer earth-friendly products. This is an app designed to facilitate the transition into this new lifestyle or simply seeking more earth-friendly resources.",image:"".concat(k.a),link:"https://choose-earth-friendly-pr3.herokuapp.com/"},{title:"Fitness Challenge",description:"There are a lot of people with different brands of fitness watches and each brand has their own app. You can participate in a challenge with people of similar brand, but a common issue is looking for an app where you can engage in a challenge with your family and friends with other brand fitness watches. This is a fitness challenge app where you can complete any challenge and also add your health stats for the completed challenges. You have the choice of joining an available challenge or creating your own. Anyone & Everyone can participate. Behind the scenes: this app was built using Django python web framework, postgresql database, and React for front end.",image:"".concat(y.a),link:"https://fitness-challenge-pr4.herokuapp.com/"}];return l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"My Projects: "),l.a.createElement("section",{className:"project-container"},e.map((function(e,t){return l.a.createElement(f,{project:e,key:t})}))))}}]),n}(a.Component),C=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Skills: "),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Handlebars"),l.a.createElement("li",null,"Django"),l.a.createElement("li",null,"PostgreSQL"),l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"Github"),l.a.createElement("li",null,"Heroku"),l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"Mongoose"),l.a.createElement("li",null,"Axios"))))}}]),n}(a.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(u,null)),l.a.createElement(d,null),l.a.createElement(O,null),l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.5591d2b3.chunk.js.map