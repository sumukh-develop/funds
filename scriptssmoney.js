document.addEventListener('DOMContentLoaded', (event) => {
    const paymentButton = document.querySelector('input[type="button"][value="MAKE PAYMENT"]');

    paymentButton.addEventListener('click', function() {
        // Form validation
        const currency = document.getElementById('currency').value;
        const amount = document.getElementById('amount').value.trim();
        const cardNumber = document.getElementById('cc-number').value.trim();
        const cardExpiry = document.getElementById('cc-exp').value.trim();
        const cardCvc = document.getElementById('cc-cvc').value.trim();
        const cardHolderName = document.querySelector('input[type="text"]').value.trim();

        if (currency === 'select') {
            alert('Please select a currency.');
            return;
        }

        if (amount === '' || isNaN(amount) || Number(amount) <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        if (cardNumber === '' || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
            alert('Please enter a valid card number in the format XXXX XXXX XXXX XXXX.');
            return;
        }

        if (cardExpiry === '' || !/^\d{2} \/ \d{2}$/.test(cardExpiry)) {
            alert('Please enter a valid card expiry date in the format MM / YY.');
            return;
        }

        if (cardCvc === '' || !/^\d{3,4}$/.test(cardCvc)) {
            alert('Please enter a valid CVC code.');
            return;
        }

        if (cardHolderName === '') {
            alert('Please enter the card holder name.');
            return;
        }

        // Display confirmation message
        alert('Payment processed successfully!');

        // You can add additional code here to handle the form data, such as sending it to a server

        // Reset the form after successful submission
        document.getElementById('currency').value = 'select';
        document.getElementById('amount').value = '';
        document.getElementById('cc-number').value = '';
        document.getElementById('cc-exp').value = '';
        document.getElementById('cc-cvc').value = '';
        document.querySelector('input[type="text"]').value = '';
    });
});
