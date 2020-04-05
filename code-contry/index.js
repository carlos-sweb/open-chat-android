const fs = require('fs');
const cheerio = require('cheerio');



fs.readFile('index.html', {encoding:'utf8'},
function(err, data){	
if (err) throw err;
var json = [];
const $ = cheerio.load(data);

$("table")
.first()
.find("tr").each(function(){
	 
	 let td = $(this).children("td");
	 if(td.eq(0).text() !=""){
	 var code = {
	 	 contry:td.eq(0).text(),
	 	 code:td.eq(1).text(),
	 	 iso:td.eq(2).text()
	 };
	 json.push(code);
	 }
	 
});
///////
fs.writeFile("dist/contrycode.js","var contrycode="+JSON.stringify(json)+";", function(err) { if(err) { return console.log(err); } console.log("The file was saved!"); }); 
fs.writeFile("dist/contrycode.json",JSON.stringify(json,null,2), function(err) { if(err) { return console.log(err); } console.log("The file was saved!"); }); 


 });
 
 