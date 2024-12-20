document.addEventListener('DOMContentLoaded', function () {
    const notification = document.getElementById('notification');
    const fullMessage = document.getElementById('notification-full');
    const previewMessage = document.getElementById('notification-preview');
    const expandBtn = document.getElementById('expand-btn');

    // Variable to track if the message has been expanded
    let isExpanded = false;

    // Show the notification with a fade-in effect when the page loads
    setTimeout(function () {
        notification.classList.add('show');
    }, 500); // Delay to ensure fade-in happens smoothly

    // Event listener for clicking the "Read more" or "Show less"
    expandBtn.addEventListener('click', function () {
        if (isExpanded) {
            // Hide the full message with fade-out and show preview message
            fullMessage.classList.remove('show');
            previewMessage.innerHTML = 'New message arrived... <span id="expand-btn" style="color: #00796b;">Read more</span>';
            isExpanded = false;
        } else {
            // Show the full message with fade-in
            fullMessage.classList.add('show');
            previewMessage.innerHTML = 'New message arrived... <span id="expand-btn" style="color: #00796b;">Show less</span>';
            isExpanded = true;
        }

        // Reattach the event listener to the new "Read more" or "Show less" span
        document.getElementById('expand-btn').addEventListener('click', arguments.callee);
    });

    // Close notification when clicking outside the notification area
    document.addEventListener('click', function (event) {
        // Only close the notification if it is expanded and clicked outside
        if (isExpanded && !notification.contains(event.target)) {
            notification.classList.remove('show'); // Fade out the notification if clicked outside
        }
    });

    // Prevent the event from propagating to the document when clicking inside the notification
    notification.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from reaching the document
    });
});
