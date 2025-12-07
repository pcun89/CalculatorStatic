let current = "";

function press(value) {
    if (current === "0") current = "";
    current += value;
    document.getElementById("display").innerText = current;
}

function clearDisplay() {
    current = "";
    document.getElementById("display").innerText = "0";
}

function calculate() {
    try {
        // Prevent unsafe evaluation by allowing only digits & operators
        if (!/^[0-9+\-*/.()** ]+$/.test(current)) {
            throw "Invalid";
        }

        let result = eval(current);
        document.getElementById("display").innerText = result;
        current = String(result);

    } catch {
        document.getElementById("display").innerText = "Error";
        current = "";
    }
}
