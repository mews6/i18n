import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber} from 'react-intl';

const Job = (props) => {

  function millionCheck() {
    console.log(navigator.language)
    if (navigator.language !== 'es-ES') {
      return (
        <FormattedMessage
        id="PositionSalary"
        values={{value:props.offer.salary}}
        />
      )
    }
    if (props.offer.salary === 1) {
      return (
        <FormattedMessage
        id="1MSalary"
        values={{value:props.offer.salary}}
      />
      );
    } else {
      return (
        <FormattedMessage
        id="DiffSalary"
        values={{value:props.offer.salary}}
      />        
      )
    }
  }

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      
      <td><FormattedMessage
      id="GenericString"
      values={{value:props.offer.name}}
      />
      </td>
      
      <td><FormattedMessage
      id="GenericString"
      values={{value:props.offer.company}}
      /></td>
      
      <td>
      {millionCheck()}
      </td>
      
      <td><FormattedMessage
      id="GenericString"
      values={{value:props.offer.city}}
      />
      </td>
      
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      
      <td>
        <FormattedNumber
        value={props.offer.views}
        />
      </td>
      
    </tr>
  );
};

export default Job;
