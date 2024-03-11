const APIkey = 'Vo07nR1qqtPgtrGlpUDVgr0ahuP78yV3';
const queryparams = new URLSearchParams({
	apikey: APIkey,
	language: 'en-us',
	details: true,
	metric: false,
});

async function getWeather(cityID) {
	const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityID}?${queryparams}`, {
		method: 'GET',
	});

	const data = await res.json();
	const forecast = data.DailyForecasts;

	for (let i = 0; i < forecast.length; i++) {
		const currentDay = forecast[i];
		const date = new Date(currentDay.Date).toLocaleDateString();
		const sunrise = new Date(currentDay.Sun.Rise).toLocaleTimeString();
		const sunset = new Date(currentDay.Sun.Set).toLocaleTimeString();
		const maxtemp = currentDay.Temperature.Maximum.Value;
		const mintemp = currentDay.Temperature.Minimum.Value;
		const dayphrase = currentDay.Day.ShortPhrase;
		const nightphrase = currentDay.Night.ShortPhrase;

		console.log(`On ${date} The Sun will Rise at ${sunrise}`);
		console.log(`On ${date} The Sun will Set at ${sunset}`);
		console.log(`On ${date} The Max Temp will be ${maxtemp}°F`);
		console.log(`On ${date} The Min Temp will be ${mintemp}°F`);
		console.log(`On ${date} Today will be ${dayphrase}`);
		console.log(`On ${date} Tonight will be ${nightphrase}`);
		console.log('');
	}
}

getWeather('347936');
