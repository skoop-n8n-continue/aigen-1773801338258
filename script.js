function updateClock() {
    const now = new Date();

    // Format Time: 1:34:53 PM
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    // Format Date: March 17th, 2026
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    // Get ordinal suffix for date
    let suffix = 'th';
    if (date % 10 === 1 && date !== 11) {
        suffix = 'st';
    } else if (date % 10 === 2 && date !== 12) {
        suffix = 'nd';
    } else if (date % 10 === 3 && date !== 13) {
        suffix = 'rd';
    }

    const dateString = month + ' ' + date + suffix + ', ' + year;

    // Update DOM
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Initial call
updateClock();

// Set interval to update every second
setInterval(updateClock, 1000);
