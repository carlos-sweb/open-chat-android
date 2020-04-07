let options = '';
contrycodes.forEach((contrycode)=>{
   options += '<option value=\''+contrycode.code+'\'>'+contrycode.contry+'&nbsp;/&nbsp;'+contrycode.code+'</option>'
}) 
document.getElementById('codecontry').innerHTML=options;

var WspOpen = function(){
	return {
		open:function(){

			const codecontry = document.getElementById('codecontry').value;
			const phone = document.getElementById('phone').value;
			const phonefull = codecontry+phone;
			window.open("whatsapp://send/?phone="+phonefull+"")
		}
	}
}

/*
async function paste() { 
	const text = await navigator.clipboard.readText();
 $("#phone").val(text)
}
	
var option ="";
contrycode.forEach((opt)=>{
	  option +="<option value='"+opt.code+"' "+(opt.code == "56" ?"selected":"")+">"+opt.contry+" / "+opt.code+"</option>";
});
	
	
	$("#codecontry").html(option);

	$("#codecontry").attr("value","56");
	
$("#copy").on("click",()=>{
	$("#phone").select();
	document.execCommand("copy");
})

$("#paste").on("click",()=>{
	 paste();
})

*/