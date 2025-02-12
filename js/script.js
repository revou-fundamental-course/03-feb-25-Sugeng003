//ini file javascript

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen input dan tombol
  const inputCelcius = document.getElementById("input-celcius");
  const inputResult = document.getElementById("input-result");
  const inputKalkulasi = document.getElementById("input-kalkulasi");
  const btnConvert = document.querySelector(".background-green");
  const btnReset = document.querySelector(".background-black");
  const btnReverse = document.querySelector(".background-pink");

  // Fungsi konversi dari Celsius ke Fahrenheit
  function convertToFahrenheit() {
      let celcius = parseFloat(inputCelcius.value);
      if (!isNaN(celcius)) {
          let fahrenheit = (celcius * 9/5) + 32;
          inputResult.value = fahrenheit.toFixed(2);
          inputKalkulasi.value = `(${celcius} × 9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
      } else {
          alert("Masukkan angka yang valid!");
      }
  }

  // Fungsi reset input
  function resetInputs() {
      inputCelcius.value = "";
      inputResult.value = "";
      inputKalkulasi.value = "";
  }

  // Fungsi reverse konversi dari Fahrenheit ke Celsius
  function reverseConversion() {
      let fahrenheit = parseFloat(inputCelcius.value);
      if (!isNaN(fahrenheit)) {
          let celcius = (fahrenheit - 32) * 5/9;
          inputResult.value = celcius.toFixed(2);
          inputKalkulasi.value = `(${fahrenheit} - 32) × 5/9 = ${celcius.toFixed(2)} °C`;
      } else {
          alert("Masukkan angka yang valid!");
      }
  }

  // Event listener untuk tombol
  btnConvert.addEventListener("click", function (event) {
      event.preventDefault();
      convertToFahrenheit();
  });

  btnReset.addEventListener("click", function (event) {
      event.preventDefault();
      resetInputs();
  });

  btnReverse.addEventListener("click", function (event) {
      event.preventDefault();
      reverseConversion();
  });
});
