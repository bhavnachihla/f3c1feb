alarmDiv

.querySelector(".delete-alarm")

.addEventListener("click", () => {

    alarmDiv.remove();

    cnt--;

    clearTimeout(interVal);

    const idx = almTimesArray.indexOf(selectedDate.toString());

    if (idx !== -1) {

        almTimesArray.splice(idx, 1);

    }

});

interVal = setTimeout(() => {

alert("Time to wake up!");

alarmDiv.remove();

cnt--;

const alarmIndex = almTimesArray.indexOf(selectedDate.toString());

if (alarmIndex !== -1) {

    almTimesArray.splice(alarmIndex, 1);

}

}, timeUntilAlarm);

contan.appendChild(alarmDiv);

cnt++;

almTimesArray.push(selectedDate.toString());

 else {

alert("You can only set a maximum of 3 alarms.");

}

function showAlarmFunction() {

let alarms = contan.querySelectorAll(".alarm");

alarms.forEach((alarm) => {

let deleteButton = alarm.querySelector(".delete-alarm");

deleteButton.addEventListener("click", () => {

alarmDiv.remove();

cnt--;

clearTimeout(interVal);

const alarmIndex = almTimesArray.indexOf(selectedDate.toString());

if (alarmIndex !== -1) {

    almTimesArray.splice(alarmIndex, 1);

}

});

});
}
showAlarmFunction();
setInterval(timeChangeFunction, 1000);

btn.addEventListener("click", alarmSetFunction);
timeChangeFunction();