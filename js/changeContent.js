  var w = viewportSize.getWidth();

  $(".js-skill-genre").on('click', '.js-skill-link', function(){
    var clicked = $(this).data('title'),
        genre = $(this).data('genre'),
        detail = $(this).parents('.js-skill-genre').next(),
        skillHead = $(this).text();

    $(".js-"+genre+"-link").removeClass('active');
    $(this).addClass('active');

    detail.children('.skill-header').text(skillHead);
    detail.children('.skill-detail').html("<p>"+changeDetail(clicked)+"</p>");

  });

  function changeDetail(skill) {
    var detail;
    if(skill == "html"){
      if(w > 768) {
        detail = "Speciality in HTML5&amp;CSS3, with responsive design capabilities to work across a range of device sizes. Using a mobile-first and BEM methodology. Advance LESS skill but good command in Stylus and SASS. Create basic CSS Animation and responsive email template.";
      }else if(w <= 768) {
        detail = "Speciality in HTML5&amp;CSS3, with responsive design across a range of device sizes. Advance LESS skill";
      }else if(w < 640) {
        detail = "HTML5&CSS3, Advance Less skill, responsive design<br>cross-browser capabilities";
      }
    }
    if(skill == "php"){
      if(w > 768) {
        detail = "Experience in connect with database and query data from a MySQL database using PHP. Collaborate well with Programmer: understand how they work, help them solve a simple task. Familiar with Laravel for the last project.";
      }else {
        detail = "Experience in connect with database and query data from a MySQL database using PHP (Laravel)";
      }
    }
    if(skill == "js"){
      detail = "Ability to adjust jQuery plugin to optimize web design. Experience in basic AngularJs to build web application.";
    }
    if(skill == "ps"){
      detail = "Strong Adobe Photoshop skill. Not only drawing a picture by brush but also dicuting and retouching a photo.";
    }
    if(skill == "ai"){
      detail = "Proven and proficient skills in Adobe Illustrator. Ability to drawing infographic.";
    }
    if(skill == "an"){
      detail = "Having a basic understanding of animation. Getting the hang of Adobe Flash";
    }
    return detail;
  }

  $(document).ready(function(){
    $('#code-skill-detail').html("<p>"+changeDetail("html")+"</p>");
    $('#design-skill-detail').html("<p>"+changeDetail("ps")+"</p>");
  });
