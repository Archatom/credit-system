document.addEventListener('DOMContentLoaded', function () {
    // 設置圖表顏色
    const chartColors = {
        completed: '#2ecc71',
        remaining: '#ecf0f1',
        departmentRequired: '#3498db',
        departmentElective: '#f1c40f',
        schoolRequired: '#e74c3c',
        generalEducation: '#9b59b6'
    };

    // 繪製總學分圓餅圖
    new Chart(document.getElementById('totalCreditsChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [80, 48],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製系定學分圓餅圖
    new Chart(document.getElementById('departmentCreditsChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [70, 30],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製校定學分圓餅圖
    new Chart(document.getElementById('schoolCreditsChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [10, 18],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製校訂必修圓餅圖
    new Chart(document.getElementById('schoolRequiredChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [8, 6],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製通識博雅圓餅圖
    new Chart(document.getElementById('generalEducationChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [2, 12],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製系訂必修圓餅圖
    new Chart(document.getElementById('departmentRequiredChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [50, 18],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製系訂選修圓餅圖
    new Chart(document.getElementById('departmentElectiveChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [20, 12],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製人文探索圓餅圖
    new Chart(document.getElementById('humanitiesChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [0, 2],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製社會脈動圓餅圖
    new Chart(document.getElementById('socialChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [2, 0],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製科技創新圓餅圖
    new Chart(document.getElementById('techChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [0, 2],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 繪製跨域永續圓餅圖
    new Chart(document.getElementById('sustainChart'), {
        type: 'doughnut',
        data: {
            labels: ['已修學分', '未修學分'],
            datasets: [{
                data: [0, 2],
                backgroundColor: [chartColors.completed, chartColors.remaining],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 學分狀態頁面的圓餅圖
    new Chart(document.getElementById('schoolCreditsStatus'), {
        type: 'pie',
        data: {
            labels: ['校訂必修', '通識博雅', '未修習'],
            datasets: [{
                data: [8, 2, 18],
                backgroundColor: [
                    chartColors.schoolRequired,
                    chartColors.generalEducation,
                    chartColors.remaining
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('deptCreditsStatus'), {
        type: 'pie',
        data: {
            labels: ['系訂必修', '系訂選修', '未修習'],
            datasets: [{
                data: [50, 20, 30],
                backgroundColor: [
                    chartColors.departmentRequired,
                    chartColors.departmentElective,
                    chartColors.remaining
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15
                    }
                }
            }
        }
    });

    // 完成率總覽圖表
    new Chart(document.getElementById('completionRateChart'), {
        type: 'doughnut',
        data: {
            labels: ['已完成', '未完成'],
            datasets: [{
                data: [80, 48],
                backgroundColor: ['#27ae60', '#e74c3c'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15
                    }
                }
            }
        }
    });

    // 點擊時添加動態效果
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 添加警示效果
    const warningElements = document.querySelectorAll('.badge.bg-danger');
    setInterval(() => {
        warningElements.forEach(element => {
            element.classList.toggle('blink');
        });
    }, 1000);
});

// 滑鼠懸停效果
document.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'TR') {
        event.target.style.transition = 'background-color 0.3s';
    }
});

// 頁面加載提示
window.addEventListener('load', function () {
    console.log('學分管理警示系統已成功加載');
});
