
const DaysArray= ["Monday", "Tuesday", "Wednesday" , "Thursday" , "Friday" , "Saturday", "Sunday"]
const currentDate = new Date()
const currentDayOfTheWeek = DaysArray[currentDate.getDay()]
const currentUTCTimeMillis = currentDate.getTime();


function updateInfo(){
    const dayOfTheWeek = document.getElementById("day-of-the-week")
    const utcTime = document.getElementById("utc-time")
    dayOfTheWeek.textContent = currentDayOfTheWeek
    utcTime.innerText = currentUTCTimeMillis
}
window.addEventListener("load", updateInfo)