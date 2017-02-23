var localStorage.calstate=1;
showCalendar(calendarstate);


function setCalendarState(x) {
	localStorage.calstate=(x);
}

function showCalendar()
{
  if (localStorage.calstate==1) {
    document.getElementById('imageID').src='BeforeFood.png';
  }
  else if (localStorage.calstate==2) {

  document.getElementById('imageID').src='AfterFood.png';
}
}