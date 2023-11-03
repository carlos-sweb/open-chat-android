
function getContrySelect(){
	
	if(ppIs.isNull(window.localStorage.getItem("contryCode")) ){return{}}	
	const contryCode = window.localStorage.getItem("contryCode").toString();
	const result = contrycodes.filter( (item) => item.code == contryCode  )[0];
	const codeIso = result.iso.split("/")[0].trim().toLowerCase();
	return Object.assign(result,{url:"flags/"+codeIso+".svg"});
}

var contryActive = getContrySelect();

if( ppIs.isEmpty(contryActive) ){
	// Hay que mostar El modal
}else{
	var ElementContryActive = document.getElementById("contryActive");
	ElementContryActive.innerHTML = "<img class=\"w-8 block\" src=\""+contryActive["url"]+"\" /><span class=\"pl-5 text-2xl text-bold\">"+contryActive["contry"]+"</span>";
}

var options = '';

contrycodes.forEach(function(contrycode){      
   options += '<option '+ function(code){return code == window.localStorage.getItem("contryCode") ? 'selected':''}(contrycode.code) +' value=\''+contrycode.code+'\'>'+contrycode.contry+'&nbsp;/&nbsp;'+contrycode.code+'</option>'
})

/*
document.querySelector("#codecontry").addEventListener('change',function(){
	window.localStorage.setItem("contryCode",this.value);
}); 
*/

//document.getElementById('codecontry').innerHTML=options;

document.getElementById('btnopen').addEventListener('click', function(){	
	var codecontry = document.getElementById('codecontry').value;
	var phone = document.getElementById('phone').value;
	var phonefull = codecontry+phone;
	window.open("whatsapp://send/?phone="+phonefull+"")
});

