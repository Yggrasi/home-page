function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function updateTime() {
    var now = new Date();
    var timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true
    };
    var timeString = now.toLocaleTimeString([], timeOptions);
    document.getElementById('current-time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();

document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan tanggal
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('id-ID', options);
});
