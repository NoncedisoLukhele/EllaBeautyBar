  function toggleCheckoutForms() {
        document.getElementById('checkout').classList.toggle('hidden');
    }

    function showCardForm() {
        document.getElementById('card-form').classList.remove('hidden');
        document.getElementById('paypal-form').classList.add('hidden');
    }

    function showPaypalForm() {
        document.getElementById('card-form').classList.add('hidden');
        document.getElementById('paypal-form').classList.remove('hidden');
    }