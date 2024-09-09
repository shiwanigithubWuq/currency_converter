// Function to convert the currency when the "Convert" button is clicked
function convertCurrency() {
    // Get the input amount value
    let amount = document.getElementById('amount').value;
    
    // Get the selected "from" currency value
    let fromCurrency = document.getElementById('from-currency').value;
    
    // Get the selected "to" currency value
    let toCurrency = document.getElementById('to-currency').value;
    
    // Get the element where the result will be displayed
    let result = document.getElementById('result');

    // Define a simple conversion rate object for demo purposes
    const conversionRates = {
        'USD': {'INR': 82.5, 'EUR': 0.92, 'USD': 1}, // Conversion rates from USD
        'INR': {'USD': 0.012, 'EUR': 0.011, 'INR': 1}, // Conversion rates from INR
        'EUR': {'USD': 1.09, 'INR': 89.5, 'EUR': 1} // Conversion rates from EUR
    };

    // Check if the amount is valid (non-empty and a number)
    if (amount === "" || isNaN(amount)) {
        result.textContent = "Please enter a valid amount."; // Show error message
        return; // Exit the function
    }

    // Convert the amount using the conversion rate from the selected currencies
    let convertedAmount = amount * conversionRates[fromCurrency][toCurrency];

    // Display the converted amount in the result paragraph
    result.textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
