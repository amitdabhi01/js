const API_KEY = '8318f7392d1b76ca330fa4ced309b0b1'; // Replace with your API key

    async function getWeather() {
      const city = document.getElementById('cityInput').value;
      const resultDiv = document.getElementById('result');

      if (!city) {
        resultDiv.innerHTML = 'Please enter a city name.';
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        // console.log(url)
        resultDiv.innerHTML = `
          <h2>${data.name}</h2>
          <h2>${data.weather[0].main}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
      } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
      }

      cityInput.value = ""
    }