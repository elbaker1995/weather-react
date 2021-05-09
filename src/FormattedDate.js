export default function FormattedDate(props) {
  console.log(props.date);

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = props.date.getDate();
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "NOV",
    "DEC",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();

  return `${hours}:${minutes} ${day}${month}${year}`;
}
