let currentTime = new Date;

function updateCounter() {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const period = { hours } >=  12 ? 'AM' : 'PM';

    currentTime.setSeconds(currentTime.getSeconds() + 1);

    const formattedDate = `${hours % 12 || 12}: ${minutes}: ${seconds} ${period}`;

    console.log(formattedDate);
}

const intervalId = setInterval(updateCounter, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped after 2 minutes!')
}, 120000);