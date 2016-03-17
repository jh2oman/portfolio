if (Meteor.isServer){

}

if (Meteor.isClient) {
  var coverHash;
  
  var transitionXXSmall   = 100;
  var transitionXSmall    = 250;
  var transitionSmall     = 500;
  var transitionMedium    = 750;
  var transitionLarge     = 1000;
  var transitionXLarge    = 1500;
  var transitionXXLarge   = 2000;
  var transitionXXXLarge    = 2500;
  var transitionXXXXLarge    = 3500;

 var time=500
$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        scrollOverflow: false,
        anchors:['home', 'about', 'projects', 'contact'],
        menu: '#topMenu',
        responsiveWidth: 768,
        animateAnchor:true,
        autoScrolling:false,
        scrollingSpeed:750,

        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(nextIndex == 2 ){
                 $('.about-section .square').delay(transitionLarge).animate({paddingRight : '40px', paddingLeft : '40px'},transitionSmall);
            }
            else if(nextIndex == 3 ){
                 $('.projects-section .square').delay(transitionLarge).animate({paddingRight : '40px', paddingLeft : '40px'},transitionSmall);
            }
            else if(nextIndex == 4 ){
                 $('.contact-section .square').delay(transitionLarge).animate({paddingRight : '40px', paddingLeft : '40px'},transitionSmall);
                 $('.contact-info').delay(transitionLarge).fadeIn(transitionMedium);
            }
        }
      });

    
$('.exit-card').click(function(){
  $(this).parents(".cover-letter").delay(transitionMedium).fadeOut(0);
  $('#fullpage').removeClass("hidden");
  $('#show-cover').delay(transitionXXXXLarge).css({display: 'none'}).fadeIn(transitionLarge);
  $('body').delay(transitionMedium).animate({scrollTop:'0px'},0);
  $('#preload').css({background:'#FFF'}).fadeIn(transitionSmall);
  preloader();

})
$('#show-cover').click(function(){
  $(".cover-letter").fadeIn(transitionLarge);
  $('#fullpage').delay(transitionLarge).addClass("hidden");
})
$(window).load(preloader);
function preloader(){
  setTimeout(function(){
    $('#preload').delay(transitionXSmall).fadeOut(transitionXLarge);
    $('nav').delay(transitionXXLarge).css({display: 'none'}).fadeIn(transitionMedium);
    //$('.scroll-down').delay(transitionXXLarge).css({display: 'none'}).fadeIn(transitionMedium);
    $('#coverPhoto .square').css({paddingRight : '0px', paddingLeft : '0px'}).delay(transitionXXXLarge).animate({paddingRight : '40px', paddingLeft : '40px'},transitionSmall);
    $('.cover-title .square').css({paddingRight : '0px', paddingLeft : '0px'}).delay(transitionXXXLarge).animate({paddingRight : '40px', paddingLeft : '40px'},transitionSmall);
  },transitionXSmall);
}

});
  var companies = ["gothumbtack", "facebook", "asanarocks", "squareup"];
  Template.cover.onRendered(function(){
    coverHash = (window.location.hash).slice(1);
    $('#show-cover').href=coverHash;
    if(companies.indexOf(coverHash) !== -1)
      $('#fullpage').addClass("hidden");
  });


  Template.cover.helpers({
    url: function(name){       
      return (window.location.hash).slice(1) === name;
    },

    companies:[
      {
      name : "facebook",
      title:"Hey Facebook!",
      paragraph:"I am a software engineer graduating in May from UIUC, and I want to be a Front End Engineer for Thumbtack because you have a strong product that excites me and the right people to inspire my passions. When it comes to front end development, I never pass up a chance at some good problem solving. Whether it's a difficult UX problem, the necessity of a creative data structure, or simply the best color to make that one button; I’m there and I’m excited. ",
      pair:[{requirement:"You see the web as a beautiful, intricate, occasionally clumsy Rube Goldberg machine. Working with it isn’t a chore; it’s a challenge",
            qualification:"Not really a qualification...but yes!! The web is a beast with ever changing sets of awesome challenges."}

      ],
      closing:"Thumbtacks mission towards helping small businesses is a value I am passionate about, and I would welcome an opportunity to discuss my qualifications with you. Thank you in advance for your consideration."
    },
    {
      name : "gothumbtack",
      title:"Hey Thumbtack!",
      paragraph:" My name is Jacob Waterman and I am excited to exercise my love of complex problem solving as a prospective Front End Engineer at Thumbtack. Whether the issue calls for redesigning a more sleek and intuitive UX, utilizing my knowledge of algorithms and data structures, or simply picking the most aesthetically pleasing color for that button, I’ll be ready to tackle it.",
      tableIntro:"Here are some examples of how my qualifications line up with the work Thumbtack is doing:",
      jobExp: "Your Job Requirements",
      myExp: "My Experiences",
      pair:[{requirement:"You see the web as a beautiful, intricate, occasionally clumsy Rube Goldberg machine. Working with it isn’t a chore; it’s a challenge",
            qualification:"Not really a qualification...but yes!! The web is a beast with ever changing sets of awesome challenges."},
            {requirement:"You're perfectly comfortable with all the normal front-end technologies (JavaScript and its derivatives, CSS, semantic HTML, etc), but don’t mind the occasional jumps into PHP, Python, or database queries.",
            qualification:"Javascript, HTML, and CSS are my jam. I also have experience writing database queries for my Dow Chemical internship, and with Node.js. I don’t mind diving into the backend once in a while."},
            {requirement:"You spend almost as much time inspecting a page's elements and figuring out how it works as you do using it. You're insatiably curious about how websites are made.",
            qualification:"I love it when I find clean source code on a website I like. It inspires me to do the same in my programming. "},
            {requirement:"You have an eye and appreciation for good, user-friendly design.",
            qualification:"The designing of jacob-waterman.com is an ongoing project I am both very proud of and thoroughly enjoy."}
      ],
      closing:"As a software engineer graduating in May from UIUC that used earnings from managing a modest paint company to help pay for expenses during my education, Thumbtack’s mission of helping small businesses thrive piques my interest.  I would be more than happy to discuss my qualifications in greater detail with you. Thank you for any consideration."
    },
    {
      name : "asanarocks",
      title:"Hey Asana!",
      paragraph:"My name is Jacob Waterman and I am excited to exercise my love of complex problem solving as a prospective New Grad Engineer at Asana. Whether the issue calls for redesigning a more sleek and intuitive UX, utilizing my knowledge of algorithms and data structures, or simply picking the most aesthetically pleasing color for that button, I’ll be ready to tackle it.",
      tableIntro:"Here are some examples of how my qualifications line up with the work Asana is doing:",
      jobExp: "Your Desired Qualities",
      myExp: "My Experiences",
      pair:[{requirement: "Constant desire to learn and improve",
            qualification: "I am lucky enough to have found my passion in web development, and there is nothing I want more out of my professional career than to expand my knowledge and improve those skills."},
          {requirement: "Strong background in computer science",
            qualification: "Beyond the typical data structures/algorithms I also enjoy the Good Parts of Javascript, and the UX theory ‘don’t make me think’"},
            {requirement: "Kindness and maturity",
            qualification: "I consider myself a very nice guy :)"},
            {requirement: "Sound judgment for balancing between scrappiness and long-term code maintainability ",
            qualification: "During my summer internship I experienced building hacky prototypes as well as maintaining code that had been around for half a decade and came to appreciate the pros and cons of each."}
      ],
      closing: "Reading about Asana’s product, story, and culture is like a breath of fresh air; your Front End utilizes cutting edge technology that I would love to contribute to and Asana’s culture surrounding engineering mentorship is a place where I could reach my full potential. Most importantly, your mission to empower humanity to do great things is exactly the kind of world changing work that would allow me to leave the office every day knowing that I made a difference. I would be more than happy to discuss my qualifications in greater detail with you. Thank you for any consideration. "   
    },
    {
      name : "squareup",
      title:"Hey Square!",
      paragraph:"My name is Jacob Waterman and I am excited to exercise my love of complex problem solving as a prospective New Grad Engineer at Square. Whether the issue calls for redesigning a more sleek and intuitive MVC architecture, utilizing my knowledge of algorithms and data structures, or simply testing the most aesthetically pleasing color for that button, I’ll be ready to tackle it.",
      tableIntro:"Here are some examples of how my qualifications line up with the work Square is doing:",
      jobExp: "Your Desired Qualities",
      myExp: "My Experiences",
        pair:[{requirement: "Implement pixel perfect designs that defy user expectations",
            qualification: "Square was actually one of my original inspirations for my favorite type of design: sleek and simple. I take great pride in implementing beautiful web applications."},
          {requirement: "Create interactions and APIs that reinforce trust, increase security, and make it harder to do the wrong thing",
            qualification: "I have made my own RESTful API before along with a front end to consume it, and it was locked up tight front to back.  "},
            {requirement: "Envision entire new products, features, and flows that are inspired, considered, and magical",
            qualification: "I thoroughly enjoy collaborating on the vision of a product, and developing user experiences that are both intuitive and inspirational is one of my greatest passions."}
      ],
      closing: "Reading about Square’s product, story, and culture is like a breath of fresh you’re your diversified product line is made of cutting edge technology that I would love to contribute to and Square’s culture surrounding collaboration and peer programming is a place where I could reach my full potential. Most importantly, your mission to empower humanity to do great things is exactly the kind of world changing work that would allow me to leave the office every day knowing that I make a difference. I would be more than happy to discuss my qualifications in greater detail with you. Thank you for any consideration. "
    }








    ]
  })

}