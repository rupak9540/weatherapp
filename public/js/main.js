const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const teamp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const dataHide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please Write The Name Before Search`;
        dataHide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d4ef658d4a1740b928a0c36f0998c351`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // teamp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy
            if(tempMood == "Clear"){
                teamp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                teamp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>";

            }else if(tempMood == "Rain"){
                teamp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'></i>";

            }else {
                teamp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";

            }
            dataHide.classList.remove('data_hide');
            
        } catch {
            city_name.innerText = `Please Enter the City Name Properly`;
            dataHide.classList.add('data_hide');
        }
    }

}





submitBtn.addEventListener('click', getInfo);