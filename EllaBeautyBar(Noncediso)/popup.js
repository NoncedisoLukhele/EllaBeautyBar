<script>
document.getElementById('bookNowButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Show the modal
    var modal = document.getElementById('popupModal');
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', function() {
    var modal = document.getElementById('popupModal');
    modal.style.display = 'none';
});

// Close the modal and submit the form when the confirm button is clicked
document.getElementById('confirmButton').addEventListener('click', function() {
    var modal = document.getElementById('popupModal');
    modal.style.display = 'none';

    // Submit the form
    document.getElementById('bookingForm').submit();
});

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('popupModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
</script>
