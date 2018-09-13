// Function for the temperature conversions
function convertTemperature(origin, temperature) {
    temperature = parseFloat(temperature);
    var fahrenheit = document.getElementById("fahrenheit");
    var celsius = document.getElementById("celsius");
    var kelvin = document.getElementById("kelvin");

    if (origin == "fahrenheit") {
        celsius.value = ((temperature - 32) / 1.8).toFixed(2);
        kelvin.value = (((temperature - 32) / 1.8) + 273.15).toFixed(2);
    }
    if (origin == "celsius") {
        fahrenheit.value = ((temperature * 1.8) + 32).toFixed(2);
        kelvin.value = ((temperature) + 273.15).toFixed(2);
    }
    if (origin == "kelvin") {
        fahrenheit.value = (((temperature - 273.15) * 1.8) + 32).toFixed(2);
        celsius.value = ((temperature) - 273.15).toFixed(2);
    }
}

// Function for the length conversions
function convertLength(origin, length) {
    length = parseFloat(length);
    var meters = document.getElementById("meters");
    var centimeters = document.getElementById("centimeters");
    var decimeters = document.getElementById("decimeters");
    var millimeters = document.getElementById("millimeters");
    var decameters = document.getElementById("decameters");
    var hectometers = document.getElementById("hectometers");
    var kilometers = document.getElementById("kilometers");

    if (origin == "meters") {
        centimeters.value = (length * 100).toFixed(8);
        decimeters.value = (length * 10).toFixed(8);
        millimeters.value = (length * 1000).toFixed(8);
        decameters.value = (length / 10).toFixed(8);
        hectometers.value = (length / 100).toFixed(8);
        kilometers.value = (length / 1000).toFixed(8);
    }
    if (origin == "centimeters") {
        meters.value = (length / 100).toFixed(8);
        decimeters.value = (length / 10).toFixed(8);
        millimeters.value = (length * 10).toFixed(8);
        decameters.value = (length / 1000).toFixed(8);
        hectometers.value = (length / 10000).toFixed(8);
        kilometers.value = (length / 100000).toFixed(8);
    }
    if (origin == "decimeters") {
        meters.value = (length / 10).toFixed(8);
        centimeters.value = (length * 10).toFixed(8);
        millimeters.value = (length * 100).toFixed(8);
        decameters.value = (length / 100).toFixed(8);
        hectometers.value = (length / 1000).toFixed(8);
        kilometers.value = (length / 10000).toFixed(8);
    }
    if (origin == "millimeters") {
        meters.value = (length / 1000).toFixed(8);
        centimeters.value = (length / 10).toFixed(8);
        decimeters.value = (length / 100).toFixed(8);
        decameters.value = (length / 1000).toFixed(8);
        hectometers.value = (length / 100000).toFixed(8);
        kilometers.value = (length / 1000000).toFixed(8);
    }
    if (origin == "decameters") {
        meters.value = (length * 10).toFixed(8);
        centimeters.value = (length * 1000).toFixed(8);
        decimeters.value = (length * 100).toFixed(8);
        millimeters.value = (length * 10000).toFixed(8);
        hectometers.value = (length / 10).toFixed(8);
        kilometers.value = (length / 100).toFixed(8);
    }

    if (origin == "hectometers") {
        meters.value = (length * 100).toFixed(5);
        centimeters.value = (length * 10000).toFixed(5);
        decimeters.value = (length * 1000).toFixed(5);
        millimeters.value = (length * 100000).toFixed(5);
        decameters.value = (length * 10).toFixed(5);
        kilometers.value = (length / 10).toFixed(5);
    }

    if (origin == "kilometers") {
        meters.value = (length * 1000).toFixed(2);
        centimeters.value = (length * 100000).toFixed(2);
        decimeters.value = (length * 10000).toFixed(2);
        millimeters.value = (length * 1000000).toFixed(2);
        hectometers.value = (length * 10).toFixed(2);
        decameters.value = (length * 100).toFixed(2);
    }
}
// Function for the time conversions
function convertTime(origin, time) {
    time = parseFloat(time);
    var seconds = document.getElementById("seconds");
    var milliseconds = document.getElementById("milliseconds");
    var microseconds = document.getElementById("microseconds");
    var nanoseconds = document.getElementById("nanoseconds");
    var minutes = document.getElementById("minutes");
    var hours = document.getElementById("hours");
    var days = document.getElementById("days");
    var weeks = document.getElementById("weeks");
    var years = document.getElementById("years");

    if (origin == "seconds") {
        milliseconds.value = (time * 1000).toFixed(2);
        microseconds.value = (time * 1000000).toFixed(2);
        nanoseconds.value = (time * 1000000000).toFixed(2);
        minutes.value = (time / 60).toFixed(9);
        hours.value = (time / 3600).toFixed(9);
        days.value = (time / 86400).toFixed(12);
        weeks.value = (time / 6040800).toFixed(12);
        years.value = (time / 31449600).toFixed(12);
    }
    if (origin == "milliseconds") {
        seconds.value = (time / 1000).toFixed(2);
        microseconds.value = (time * 1000).toFixed(2);
        nanoseconds.value = (time * 1000000).toFixed(2);
        minutes.value = (time * 1.6667e-5).toFixed(12);
        hours.value = (time * 2.7778e-7).toFixed(15);
        days.value = (time * 1.1574e-8).toFixed(15);
        weeks.value = (time * 1.6534e-9).toFixed(15);
        years.value = (time * 3.17090410959e-11).toFixed(20);
    }
    if (origin == "microseconds") {
        seconds.value = (time * 1e-6).toFixed(10);
        milliseconds.value = (time * 0.001).toFixed(5);
        nanoseconds.value = (time * 1000).toFixed(2);
        minutes.value = (time * 1.6667e-8).toFixed(12);
        hours.value = (time * 2.77783333e-10).toFixed(15);
        days.value = (time * 1.1574305541667e-11).toFixed(15);
        weeks.value = (time * 1.653472220238142845e-12).toFixed(15);
        years.value = (time * 3.171042614155342523e-14).toFixed(20);
    }
    if (origin == "nanoseconds") {
        seconds.value = (time * 1e-9).toFixed(12);
        milliseconds.value = (time * 1e-6).toFixed(9);
        microseconds.value = (time * 0.001).toFixed(5);
        minutes.value = (time * 1.6667e-11).toFixed(15);
        hours.value = (time * 2.77783333e-13).toFixed(16);
        days.value = (time * 1.1574e-14).toFixed(17);
        weeks.value = (time * 1.6534e-15).toFixed(18);
        years.value = (time * 3.171e-17).toFixed(20);
    }
    if (origin == "minutes") {
        seconds.value = (time * 60).toFixed(2);
        milliseconds.value = (time * 6000).toFixed(2);
        microseconds.value = (time * 6e+7).toFixed(2);
        nanoseconds.value = (time * 6e+10).toFixed(2);
        hours.value = (time * 0.0166667).toFixed(5);
        days.value = (time * 0.000694444).toFixed(8);
        weeks.value = (time * 9.9206e-5).toFixed(10);
        years.value = (time * 1.9026e-6).toFixed(12);
    }
    if (origin == "hours") {
        seconds.value = (time * 3600).toFixed(2);
        milliseconds.value = (time * 3.6e+6).toFixed(2);
        microseconds.value = (time * 3.6e+9).toFixed(2);
        nanoseconds.value = (time * 3.6e+12).toFixed(2);
        minutes.value = (time * 60).toFixed(2);
        days.value = (time * 0.0416667).toFixed(5);
        weeks.value = (time * 0.00595238).toFixed(6);
        years.value = (time * 0.000114155).toFixed(8);
    }
    if (origin == "days") {
        seconds.value = (time * 86400).toFixed(2);
        milliseconds.value = (time * 8.64e+7).toFixed(2);
        microseconds.value = (time * 8.64e+10).toFixed(2);
        nanoseconds.value = (time * 8.64e+13).toFixed(2);
        minutes.value = (time * 1440).toFixed(2);
        hours.value = (time * 24).toFixed(2);
        weeks.value = (time * 0.142857).toFixed(6);
        years.value = (time * 0.00273973).toFixed(8);
    }
    if (origin == "weeks") {
        seconds.value = (time * 604800).toFixed(2);
        milliseconds.value = (time * 6.048e+8).toFixed(2);
        microseconds.value = (time * 6.048e+11).toFixed(2);
        nanoseconds.value = (time * 6.048e+14).toFixed(2);
        minutes.value = (time * 10080).toFixed(2);
        hours.value = (time * 168).toFixed(2);
        days.value = (time * 7).toFixed(2);
        years.value = (time * 0.0191781).toFixed(8);
    }

    if (origin == "years") {
        seconds.value = (time * 3.154e+7).toFixed(2);
        milliseconds.value = (time * 3.154e+10).toFixed(2);
        microseconds.value = (time * 3.154e+13).toFixed(2);
        nanoseconds.value = (time * 3.154e+16).toFixed(2);
        minutes.value = (time * 525600).toFixed(2);
        hours.value = (time * 8760).toFixed(2);
        days.value = (time * 365).toFixed(2);
        weeks.value = (time * 52.1429).toFixed(2);
    }

}

// Function for the mass conversions
function convertMass(origin, mass) {
    mass = parseFloat(mass);
    var kilograms = document.getElementById("kilograms");
    var grams = document.getElementById("grams");
    var milligrams = document.getElementById("milligrams");
    var micrograms = document.getElementById("micrograms");
    var nanograms = document.getElementById("nanograms");
    var metrictons = document.getElementById("metrictons");

    
    if (origin == "kilograms") {
        grams.value = (mass * 1000).toFixed(2);
        milligrams.value = (mass * 1e+6).toFixed(2);
        micrograms.value = (mass * 1e+9).toFixed(2);
        nanograms.value = (mass * 1e+12).toFixed(2);
        metrictons.value = (mass * 0.001).toFixed(6);
    }
    if (origin == "grams") {
        kilograms.value = (mass * 0.001).toFixed(2);
        milligrams.value = (mass * 1e+3).toFixed(2);
        micrograms.value = (mass * 1e+6).toFixed(2);
        nanograms.value = (mass * 1e+9).toFixed(2);
        metrictons.value = (mass * 1e-6).toFixed(10);
    }
    
    if (origin == "milligrams") {
        kilograms.value = (mass * 1e-6).toFixed(10);
        grams.value = (mass * 0.001).toFixed(6);
        micrograms.value = (mass * 1e+3).toFixed(2);
        nanograms.value = (mass * 1e+6).toFixed(2);
        metrictons.value = (mass * 1e-9).toFixed(12);
    }
   
    if (origin == "micrograms") {
        kilograms.value = (mass * 1e-9).toFixed(12);
        grams.value = (mass * 1e-6).toFixed(10);
        milligrams.value = (mass * 0.001).toFixed(6);
        nanograms.value = (mass * 1000).toFixed(2);
        metrictons.value = (mass * 1e-12).toFixed(18);
    }
    if (origin == "nanograms") {
        kilograms.value = (mass * 1e-12).toFixed(15);
        grams.value = (mass * 1e-9).toFixed(12);
        milligrams.value = (mass * 1e-6).toFixed(9);
        micrograms.value = (mass * 0.001).toFixed(6);
        metrictons.value = (mass * 1e-15).toFixed(20);
    }

    if (origin == "metrictons") {
        kilograms.value = (mass * 1000).toFixed(2);
        grams.value = (mass * 1e+6).toFixed(2);
        milligrams.value = (mass * 1e+9).toFixed(2);
        micrograms.value = (mass * 1e+12).toFixed(2);
        nanograms.value = (mass * 1e+15).toFixed(2);
    }
}