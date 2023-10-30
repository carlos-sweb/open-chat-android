var options = '';

contrycodes.forEach(function(contrycode){
      
   options += '<option '+ function(code){return code == window.localStorage.getItem("contryCode") ? 'selected':''}(contrycode.code) +' value=\''+contrycode.code+'\'>'+contrycode.contry+'&nbsp;/&nbsp;'+contrycode.code+'</option>'
   
})

document.querySelector("#codecontry").addEventListener('change',function(){
	window.localStorage.setItem("contryCode",this.value);
}); 

document.getElementById('codecontry').innerHTML=options;

document.getElementById('btnopen').addEventListener('click', function(){	
			var codecontry = document.getElementById('codecontry').value;
			var phone = document.getElementById('phone').value;
			var phonefull = codecontry+phone;
			window.open("whatsapp://send/?phone="+phonefull+"")
});

