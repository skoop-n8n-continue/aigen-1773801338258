function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

function updateClock() {
    const now = new Date();

    // Format Date: Month Day(suffix), Year
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const suffix = getOrdinalSuffix(day);

    document.getElementById('date').innerText = `${month} ${day}${suffix}, ${year}`;

    // Format Time: h:mm:ss AM/PM
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Initial call to prevent delay
updateClock();

// Update every second
setInterval(updateClock, 1000);
