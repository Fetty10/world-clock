// Lagos
function runMinutes() {
  let lagosDateElement = document.querySelector("#lagos .date");
  let lagosTimeElement = document.querySelector("#lagos .time");
  let lagosCountryZone = moment().tz("Africa/Lagos");

  lagosDateElement = lagosCountryZone.format("MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosCountryZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Sydney
  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyCountryZone = moment().tz("Australia/sydney");

  sydneyDateElement.innerHTML = sydneyCountryZone.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyCountryZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
runMinutes();
setInterval(runMinutes, 1000);

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

let selectCityElement = document.querySelector("#city");

selectCityElement.addEventListener("change", changeCity);
