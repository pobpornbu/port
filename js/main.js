window.onorientationchange = function() {
  skrollr.init();
};

window.onload = function() {
  var s = skrollr.init({
    constants: {
      //fill the box for a "duration" of 150% of the viewport (pause for 150%)
      //adjust for shorter/longer pause
      box: '150p',
      sign: '150p',
      wrap: '400p',
      jsshowchart: function(){
        piechart();
      }
    }
  });

  skrollr.menu.init(s, {
      animate: true
  });
}


var WORK_METHOD = {
  handlerData:function(resJSON){
    var templateSource = $("#work-template").html(),
    template = Handlebars.compile(templateSource),
    workHTML = template(resJSON);
    $('#work-container').html(workHTML);
    $('img.ajax-lazy').unveil();
  },
  loadWorkData : function(){
    $.ajax({
      url: "data/work.json",
      method: 'get',
      success: this.handlerData
    })
  }
};

var WORKDETAIL_METHOD = {
  handlerData:function(resJSON){
    var templateSource = $("#workdetail-template").html(),
    template = Handlebars.compile(templateSource),
    workdetailHTML = template(resJSON);
    $('#workdetail-container').html(workdetailHTML);
    $('img.modal-lazy').unveil();
  },
  loadWorkData : function(){
    $.ajax({
      url: "data/work.json",
      method: 'get',
      success: this.handlerData
    })
  }
};

Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

    var operators, result;

    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    }

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }

    operators = {
        '==': function (l, r) { return l == r; },
        '===': function (l, r) { return l === r; },
        '!=': function (l, r) { return l != r; },
        '!==': function (l, r) { return l !== r; },
        '<': function (l, r) { return l < r; },
        '>': function (l, r) { return l > r; },
        '<=': function (l, r) { return l <= r; },
        '>=': function (l, r) { return l >= r; },
        'typeof': function (l, r) { return typeof l == r; }
    };

    if (!operators[operator]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }

    result = operators[operator](lvalue, rvalue);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});


$(window).load(function() {
  $('#loading').hide();

  $('img.lazy').unveil();


});

$(document).ready(function(){
  WORK_METHOD.loadWorkData();
  WORKDETAIL_METHOD.loadWorkData();

});

  // $('.modal').each(function(){
  //   if( $(this).attr("aria-hidden") === "false" ) {
  //     console.log('open');
  //     $(this).find('img').unveil();
  //   }
  // });

  // $('.js-trigger-img').click(function(){
  //   $('img.modal-lazy').trigger("unveil");
  //   console.log('modal loaded');
  // });