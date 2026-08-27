// Chart.js Configuration for Dashboards

document.addEventListener('DOMContentLoaded', () => {
    
    // Check if Chart is available
    if (typeof Chart !== 'undefined') {
        
        
        // 30-Day Price Trend Chart
        const priceTrendChartEl = document.getElementById('priceTrendChart');
        if (priceTrendChartEl) {
            new Chart(priceTrendChartEl, {
                type: 'line',
                data: {
                    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
                    datasets: [
                        {
                            label: 'Paddy (Common)',
                            data: [2100, 2120, 2150, 2130, 2160, 2175, 2183],
                            borderColor: '#2E7D32',
                            backgroundColor: 'rgba(46, 125, 50, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Sugarcane',
                            data: [3300, 3350, 3380, 3320, 3390, 3400, 3400],
                            borderColor: '#f59e0b',
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Cotton',
                            data: [7500, 7400, 7450, 7300, 7350, 7250, 7200],
                            borderColor: '#0284c7',
                            backgroundColor: 'rgba(2, 132, 199, 0.1)',
                            fill: true,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    },
                    plugins: {
                        legend: { position: 'bottom' }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            title: { display: true, text: 'Price (₹/Quintal)' }
                        }
                    }
                }
            });
        }

        // Common Options
        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: "'Poppins', sans-serif" }
                    }
                }
            }
        };

        // Crop Performance Chart (Admin & Farmer)
        const cropChartEl = document.getElementById('cropPerformanceChart');
        if (cropChartEl) {
            new Chart(cropChartEl, {
                type: 'bar',
                data: {
                    labels: ['Wheat', 'Corn', 'Rice', 'Soybeans', 'Cotton'],
                    datasets: [{
                        label: 'Expected Yield (Tons)',
                        data: [120, 190, 150, 90, 80],
                        backgroundColor: '#A5D6A7',
                        borderRadius: 5
                    }, {
                        label: 'Actual Yield (Tons)',
                        data: [110, 185, 140, 95, 75],
                        backgroundColor: '#2E7D32',
                        borderRadius: 5
                    }]
                },
                options: commonOptions
            });
        }

        // Farm Activity Chart (Line)
        const activityChartEl = document.getElementById('activityChart');
        if (activityChartEl) {
            new Chart(activityChartEl, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Farm Activities',
                        data: [65, 59, 80, 81, 56, 55],
                        fill: true,
                        borderColor: '#2E7D32',
                        backgroundColor: 'rgba(46, 125, 50, 0.1)',
                        tension: 0.4
                    }]
                },
                options: commonOptions
            });
        }

        // Water Usage (Doughnut)
        const waterChartEl = document.getElementById('waterChart');
        if (waterChartEl) {
            new Chart(waterChartEl, {
                type: 'doughnut',
                data: {
                    labels: ['Irrigation', 'Cleaning', 'Livestock', 'Other'],
                    datasets: [{
                        data: [60, 15, 20, 5],
                        backgroundColor: ['#2E7D32', '#A5D6A7', '#4CAF50', '#C8E6C9'],
                        borderWidth: 0
                    }]
                },
                options: {
                    ...commonOptions,
                    cutout: '70%'
                }
            });
        }
    }
});
