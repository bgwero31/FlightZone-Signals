function refreshPredictions() {
    document.getElementById("prediction-box").innerHTML = "Fetching new predictions...";
    setTimeout(() => {
        document.getElementById("prediction-box").innerHTML = "🎯 Next Prediction: 1.5x Risk 4x";
    }, 3000);
}
