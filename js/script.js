document.addEventListener("DOMContentLoaded", function () {
    // ngambil elemen-elemen yang dibutuhin
    const inputCelcius = document.getElementById("input-celcius");
    const inputResult = document.getElementById("input-result");
    const inputKalkulasi = document.getElementById("input-kalkulasi");
    const btnConvert = document.querySelector(".background-green");
    const btnReset = document.querySelector(".background-black");
    const btnReverse = document.querySelector(".background-pink");

    // Menampilkan peringatan jika input kosong
    function showWarning(message) {
        alert(message);
    }

    // ganti suhu dari Celsius ke Fahrenheit
    function convertToFahrenheit() {
        let celcius = inputCelcius.value.trim();
        if (celcius === "") {
            showWarning("Tolong masukkan angka!");
            return;
        }
        let parsedCelcius = parseFloat(celcius);
        if (!isNaN(parsedCelcius)) {
            let fahrenheit = (parsedCelcius * 9/5) + 32;
            inputResult.value = fahrenheit.toFixed(2);
            inputKalkulasi.value = `${parsedCelcius} × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
        } else {
            showWarning("Masukkan angka yang valid!");
        }
    }

    // ngapus isi input
    function resetInputs() {
        inputCelcius.value = "";
        inputResult.value = "";
        inputKalkulasi.value = "";
    }

    // ganti suhu dari Fahrenheit ke Celsius
    function reverseConversion() {
        let fahrenheit = inputCelcius.value.trim();
        if (fahrenheit === "") {
            showWarning("Tolong masukkan angka!");
            return;
        }
        let parsedFahrenheit = parseFloat(fahrenheit);
        if (!isNaN(parsedFahrenheit)) {
            let celcius = (parsedFahrenheit - 32) * 5/9;
            inputResult.value = celcius.toFixed(2);
            inputKalkulasi.value = `(${parsedFahrenheit} - 32) × 5/9 = ${celcius.toFixed(2)} °C`;
        } else {
            showWarning("Masukkan angka yang valid!");
        }
    }

    // run fungsi saat tombol ditekan
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
