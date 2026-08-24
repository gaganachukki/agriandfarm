// Chart.js Configuration for Dashboards

document.addEventListener('DOMContentLoaded', () => {
    
    // Check if Chart is available
    if (typeof Chart !== 'undefined') {
        
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
