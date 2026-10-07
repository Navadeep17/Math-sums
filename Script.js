
function calculateAverage() {
    let a = Number(document.getElementById("valueA").value);
    let b = Number(document.getElementById("valueB").value);
    let c = Number(document.getElementById("valueC").value);

    let average = (a + b + c) / 3;

    document.getElementById("averageResult").innerHTML =
        "<p>Average: " + average + "</p>";
}


function calculateDomAverage() {
    let a = Number(document.getElementById("domA").value);
    let b = Number(document.getElementById("domB").value);
    let c = Number(document.getElementById("domC").value);

    let average = (a + b + c) / 3;

    document.getElementById("domResult").innerHTML =
        "<p>Average: " + average + "</p>";
}


function calculateNaturalSum() {
    let n = Number(document.getElementById("naturalLimit").value);

    let sum = (n * (n + 1)) / 2;

    document.getElementById("naturalResult").innerHTML =
        "<p>Sum: " + sum + "</p>";
}


function calculateProfit() {
    let sellingPrice = Number(document.getElementById("selling").value);
    let buyingPrice = Number(document.getElementById("cost").value);

    let profit = sellingPrice - buyingPrice;
    let percentage = (profit / buyingPrice) * 100;

    document.getElementById("profitResult").innerHTML =
        "<p>Profit: " + profit + "<br>Profit Percentage: " +
        percentage + "%</p>";
}


function calculateInterest() {
    let principalAmount = Number(document.getElementById("principal").value);
    let time = Number(document.getElementById("years").value);
    let interestRate = Number(document.getElementById("rate").value);

    let interest = (principalAmount * time * interestRate) / 100;

    document.getElementById("interestResult").innerHTML =
        "<p>Simple Interest: " + interest + "</p>";
}


function calculateMissingAngle() {
    let first = Number(document.getElementById("triangleA").value);
    let second = Number(document.getElementById("triangleB").value);

    let missing = 180 - first - second;

    document.getElementById("triangleResult").innerHTML =
        "<p>Missing Angle: " + missing + "°</p>";
}


function findLastDigit() {
    let number = Number(document.getElementById("lastNumber").value);

    let lastDigit = number % 10;

    document.getElementById("lastResult").innerHTML =
        "<p>Last Digit: " + lastDigit + "</p>";
}


function removeLastDigit() {
    let number = Number(document.getElementById("removeNumber").value);

    let result = Math.floor(number / 10);

    document.getElementById("removeResult").innerHTML =
        "<p>After Removing Last Digit: " + result + "</p>";
}


function findFirstDigit() {
    let number = Number(document.getElementById("firstNumber").value);

    while (number >= 10) {
        number = parseInt(number / 10);
    }

    document.getElementById("firstResult").innerHTML =
        "<p>First Digit: " + number + "</p>";
}


function findFiveDigitFirst() {
    let number = Number(document.getElementById("fiveDigit").value);

    while (number >= 10) {
        number = parseInt(number / 10);
    }

    document.getElementById("fiveResult").innerHTML =
        "<p>First Digit: " + number + "</p>";
}


function convertToFahrenheit() {
    let celsius = Number(document.getElementById("celsiusValue").value);

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheitResult").innerHTML =
        "<p>Temperature: " + fahrenheit + "°F</p>";
}


function convertToCelsius() {
    let fahrenheit = Number(document.getElementById("fahrenheitValue").value);

    let celsius = (fahrenheit - 32) * 5 / 9;

    document.getElementById("celsiusResult").innerHTML =
        "<p>Temperature: " + celsius + "°C</p>";
}


function calculateSalary() {
    let basic = Number(document.getElementById("basicPay").value);
    let hra = Number(document.getElementById("houseAllowance").value);
    let da = Number(document.getElementById("dearnessAllowance").value);

    let grossSalary = basic + hra + da;

    document.getElementById("salaryResult").innerHTML =
        "<p>Gross Salary: " + grossSalary + "</p>";
}


function swapUsingTemp() {
    let x = Number(document.getElementById("swapX").value);
    let y = Number(document.getElementById("swapY").value);

    let temporary = x;
    x = y;
    y = temporary;

    document.getElementById("tempSwapResult").innerHTML =
        "<p>X = " + x + ", Y = " + y + "</p>";
}


function swapWithoutTemp() {
    let x = Number(document.getElementById("swapPX").value);
    let y = Number(document.getElementById("swapPY").value);

    x = x + y;
    y = x - y;
    x = x - y;

    document.getElementById("noTempResult").innerHTML =
        "<p>X = " + x + ", Y = " + y + "</p>";
}
