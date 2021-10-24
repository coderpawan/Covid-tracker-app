
async function getCovidData(params){
    try{
const res = await fetch(`https://covid-19-data.p.rapidapi.com/country?name=${params}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "d3f4f2269fmshd9007edad0b677ep1fa339jsnb92bc2bde9b9"
	}
})
const data = await res.json();
return data;
    }catch(err){
	console.error(err);
};
    
}
window.addEventListener("load",getDefaultData)
async function getDefaultData(){
    var showData= await getCovidData("India")
    console.log(showData)

    document.getElementById("confirmed").textContent = showData[0].confirmed
    document.getElementById("critical").textContent = showData[0].critical
    document.getElementById("recovered").textContent = showData[0].recovered
    document.getElementById("death").textContent = showData[0].deaths
}
var country = document.getElementById("country");
country.addEventListener("change",updateData);
async function updateData(){
    var country = document.getElementById("country");
    var selectedCountry = country.options[country.selectedIndex].value;
    var showData= await getCovidData(selectedCountry)
    console.log(showData)

    document.getElementById("confirmed").textContent = showData[0].confirmed
    document.getElementById("critical").textContent = showData[0].critical
    document.getElementById("recovered").textContent = showData[0].recovered
    document.getElementById("death").textContent = showData[0].deaths
}
