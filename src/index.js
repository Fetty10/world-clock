// Lagos
function runMinutes() {
  let lagosDateElement = document.querySelector("#lagos .date");
  let lagosTimeElement = document.querySelector("#lagos .time");
  let lagosCountryZone = moment().tz("Africa/Lagos");

  lagosDateElement.innerHTML = lagosCountryZone.format("MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosCountryZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // London
  let londonDateElement = document.querySelector("#london .date");
  let londonTimeElement = document.querySelector("#london .time");
  let londonCountryZone = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonCountryZone.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonCountryZone.format(
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

  // Tokyo
  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoCountryZone = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoCountryZone.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoCountryZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

setInterval(runMinutes, 1000);
