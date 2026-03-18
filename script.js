/**
 * Helper to get ordinal suffix for a number (st, nd, rd, th)
 */
function getOrdinalSuffix(i) {
    let j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

function updateClock() {
    const now = new Date();

    // --- Update Time ---
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Pad minutes and seconds with leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').textContent = timeString;

    // --- Update Date ---
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = months[now.getMonth()];
    const dateNum = now.getDate();
    const year = now.getFullYear();

    const dateString = `${month} ${getOrdinalSuffix(dateNum)}, ${year}`;
    document.getElementById('date').textContent = dateString;
}

// Initial call to avoid delay
updateClock();

// Update every second
setInterval(updateClock, 1000);
