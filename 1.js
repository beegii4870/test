var question_answers = [
	[
		"Биологийн идэвхт бүтээгдэхүүнийг импортлоход 1 удаагийн импортын лиценз авах шаардлагатай.",
		"авах шаардлагагүй"
	],
	[
		"Эм, эмнэлгийн хэрэгсэл импортлох, экспортлоход дараах зүйлийг хориглоно:",
		"Эм, эмнэлгийн хэрэгсэл нэвтрүүлэхээр тогтоосон хилийн боомтоос өөр боомтоор эм, эмнэлгийн хэрэгсэл нэвтрүүлэх"
	],	
];
var $question_container_toggle = $('<div style="width:100px; height:100px; position: fixed; left:0; top: 0; z-index:9999999" />').appendTo('body');
$question_container_toggle.attr('id', 'question_container_toggle');

var $create_select_question_container = $('<div style="width:100%; position: fixed; bottom: 0; z-index:9999999" class="hidden-question-select" />').appendTo('body');
$create_select_question_container.attr('id', 'question_anwers_select_container');
var $create_select_question = $('<select style="width:100%" /><option />').appendTo('#question_anwers_select_container');
$create_select_question.attr('id', 'question_anwers_select');

var select2_data = [];
$(question_answers).each(function( index ) {
	let single_question = {};
	single_question['id'] = index;
	single_question['text'] = 'Асуулт: ' + this[0] + '<br>Хариулт: ' + this[1];
	select2_data.push(single_question);
});

var select2_css = document.createElement("link");
select2_css.rel = "stylesheet";
select2_css.type = "text/css";
select2_css.href = "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css";
document.body.appendChild( select2_css );

var select2_script = document.createElement( "script" );
select2_script.addEventListener(
	"load",
	function() {
		$("#question_anwers_select").select2({
			data: select2_data,
			placeholder: "Асуулт хайх",
			"language": {
				"noResults": function(){
					return "Асуулт олдсонгүй";
				}
			},			
			escapeMarkup: function(markup) {
				return markup;
			}
		})		
	}
);
select2_script.type = "text/javascript";
select2_script.src = "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";
document.body.appendChild( select2_script );


$( "<style>#question_container_toggle * {     outline: 0!important; } .hidden-question-select{ 	display: none; } .select2-results__option {     font-size: 12px!important;     line-height: 1em!important; 	border-bottom: 1px dashed grey!important;     padding: 5px 10px!important; } span.select2-selection.select2-selection--single{ 	height: auto!important; } .select2-container .select2-selection--single .select2-selection__rendered {     line-height: 1em!important;     padding: 5px 10px!important;     font-size: 12px!important; } .select2-container--default .select2-search--dropdown .select2-search__field {     font-size: 12px!important;     line-height: 1em!important; } .select2-dropdown {     border-radius: 0!important; } .select2-container--default .select2-selection--single {     border-radius: 0!important; }</style>" ).appendTo( "head" )

$(document).on("keypress", function (e) {
	if(e.which == 96 || e.which == 45){
		//console.log('key press');
		if($('#question_anwers_select_container').hasClass('hidden-question-select')){
			$('#question_anwers_select_container').removeClass('hidden-question-select');
		}else{
			$('#question_anwers_select_container').addClass('hidden-question-select');
		}
	}
});
$(document).on('click','#question_container_toggle', function() {		
	if($('#question_anwers_select_container').hasClass('hidden-question-select')){
		$('#question_anwers_select_container').removeClass('hidden-question-select');
	}else{
		$('#question_anwers_select_container').addClass('hidden-question-select');
	}
});
