// Time Explorer - Date Methods Project

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

// Create the page using JavaScript
document.body.style.cssText =
    "margin:0;font-family:Arial;background:#f3efe7;color:#252525;";

document.getElementById("app").innerHTML = `
    <div style="max-width:850px;margin:35px auto;padding:25px;">
        <p style="letter-spacing:4px;color:#b35b35;">
            TIME EXPLORER / 01
        </p>

        <h1 style="font-size:42px;margin-bottom:5px;">
            Your Day, Unlocked.
        </h1>

        <p>Explore the date and time.</p>

        <div style="background:#252525;color:white;padding:30px;
        margin-top:25px;border-radius:12px;">

            <p>LOCAL TIME</p>

            <h1 id="clock" style="font-size:48px;margin:10px 0;"></h1>

            <h2 id="day"></h2>

            <p id="fullDate"></p>
        </div>

        <div style="display:flex;gap:15px;flex-wrap:wrap;margin-top:20px;">

            <div style="background:white;padding:20px;flex:1;min-width:130px;">
                <p>WEEK DAY</p>
                <h2 id="weekDay"></h2>
            </div>

            <div style="background:white;padding:20px;flex:1;min-width:130px;">
                <p>MONTH</p>
                <h2 id="monthName"></h2>
            </div>

            <div style="background:white;padding:20px;flex:1;min-width:130px;">
                <p>YEAR</p>
                <h2 id="year"></h2>
            </div>

        </div>
    </div>
`;

function updateTime() {
    const now = new Date();

    const day = days[now.getDay()];
    const month = months[now.getMonth()];

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

    document.getElementById("day").textContent = day;

    document.getElementById("fullDate").textContent =
        now.getDate() + " " + month + " " + now.getFullYear();

    document.getElementById("weekDay").textContent = day;

    document.getElementById("monthName").textContent = month;

    document.getElementById("year").textContent =
        now.getFullYear();
}

updateTime();

setInterval(updateTime, 1000);

console.log("Time Explorer started!");
console.log("Days:", days);
console.log("Months:", months);