function fetchPremiumSignal() {
    fetch("http://your-server-ip:5000/get_premium_signal")  // Replace with your actual server IP
        .then(response => response.json())
        .then(data => {
            document.getElementById("premium_prediction").innerText = data.prediction;
        })
        .catch(error => {
            document.getElementById("premium_prediction").innerText = "Error fetching premium signal!";
        });
}

// Refresh premium signals every 5 seconds
setInterval(fetchPremiumSignal, 5000);

// Fetch immediately on page load
fetchPremiumSignal();
