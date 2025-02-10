// Function to fetch exchange rates and convert currency
async function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('from-currency').value;
    let toCurrency = document.getElementById('to-currency').value;
    let result = document.getElementById('result');

    if (amount === "" || isNaN(amount) || amount <= 0) {
        result.textContent = "Please enter a valid amount.";
        return;
    }

    try {
        // Fetch real-time exchange rates from API
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        let data = await response.json();

        // Get the conversion rate for the selected currency
        let conversionRate = data.rates[toCurrency];

        if (!conversionRate) {
            result.textContent = "Conversion rate not available.";
            return;
        }

        // Calculate converted amount
        let convertedAmount = amount * conversionRate;
        result.textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        result.textContent = "Error fetching exchange rates. Try again later.";
        console.error("Error:", error);
    }
}
