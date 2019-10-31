import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { StyledDatePicker } from './style'

const DatePicker = ({updateDate, onCancelClick}) => {
  const [date, setDate] = useState(new Date())

  const onChange = (date) => {
    console.log('date', date)
    setDate(date)
  }

  const onButtonClick = () => {
    updateDate(date)
  }

  return(
    <>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <StyledDatePicker.ButtonWrapper>
        <StyledDatePicker.CancelButton onClick={onCancelClick}>
          CANCEL, DON'T CHANGE
        </StyledDatePicker.CancelButton>
        <StyledDatePicker.ConfirmButton onClick={onButtonClick}>CHANGE DATE</StyledDatePicker.ConfirmButton>
      </StyledDatePicker.ButtonWrapper>
    </>
  )
}



export default DatePicker