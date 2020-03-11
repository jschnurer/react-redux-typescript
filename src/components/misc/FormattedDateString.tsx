import React from "react";
import padLeft from "../../utils/padLeft";

interface FormattedDateStringProps {
  date: Date | null
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const FormattedDateString: React.FC<FormattedDateStringProps> = (props) => {
  if (props.date) {
    let str =
      props.date.getDate() + '-' +
      monthNames[props.date.getMonth()] + '-' +
      props.date.getFullYear() + ' ' +
      padLeft(props.date.getHours(), 10, '0') + ':' +
      padLeft(props.date.getMinutes(), 10, '0') + ' ' +
      (props.date.getHours() < 12 ? 'AM' : 'PM');

    return <>{str}</>;
  } else {
    return null;
  }
}


export default FormattedDateString;
