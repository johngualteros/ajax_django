let cities = [];
const listCities = async (id)=>{
    try{
        const response = await fetch('./cities/'+id);
        const data = await response.json();

        if(data.message==="Success"){
            cities = data.cities;
            let options=``;
            cities.forEach(city=>{
                options+=`
                    <option value="${city.id}">${city.name}</option>
                `;
            })
            cboCity.innerHTML=options;
            showMayor(cities[0].id)
        }else{
            alert('Countries not found')
        }
    }catch (e) {
        console.log(e);
    }
}

const listCountries = async()=>{
    try{
        const response = await fetch('./countries');
        const data = await response.json();

        if(data.message==="Success"){
            let options=``;
            data.countries.forEach(country=>{
                options+=`
                    <option value="${country.id}">${country.name}</option>
                `;
            })
            cboCountry.innerHTML=options;
            listCities(data.countries[0].id)
        }else{
            alert('Countries not found')
        }
    }catch (e) {
        console.log(e);
    }
}
const showMayor = (idCity)=>{
    let cityFound = cities.filter((city)=> city.id == idCity)[0];
    let mayor = cityFound.mayor;
    txtMayor.innerText = `Mayor : ${mayor}`
}
const loadInitial = async()=>{
    await listCountries()
    cboCountry.addEventListener('change',(e)=>{
        let id = e.target.value
        listCities(id)
    })
    cboCity.addEventListener('change',(e)=>{
        showMayor(e.target.value)
    })
}

window.addEventListener("load", async ()=>{
    await loadInitial();
})