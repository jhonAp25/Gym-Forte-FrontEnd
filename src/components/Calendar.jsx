import React, { useContext, useEffect, useState } from 'react'
import { Calendar, Views ,momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import toast from 'react-hot-toast'
import { ClaseContext } from '../context/ClaseContext'
import events from '../util/events'







const Selectable =({openModal, newDisciplina, hidden, setDateTime,newEvento, setNewEvento })=> {




  const localizer = momentLocalizer(moment)
  let today = moment();

  let minHour = today.set("hour", 8).set("minutes", 0).toDate();
  let maxHour = today.set("hour", 22).set("minutes", 0).toDate();


  const handleSelect = (e) => {

    
      const followingDayReservations = newEvento.filter(
      x =>
        x.start.getDate() === e.start.getDate() &&
        x.start.getMonth() === e.start.getMonth() &&
        x.start.getFullYear() === e.start.getFullYear()
    );

    if(!newDisciplina){
      toast.error('Seleccione la Disciplina'); 
    }else if (e.end < new Date()) {
      toast.error('No se puede crear antes de la fecha actual'); 
     
      return;
    }else if ( followingDayReservations.filter(  x =>
         (e.start < x.start && e.end > x.start) ||
          (x.start <= e.start && x.end > e.start) ||
          (x.start < e.end && x.end >= e.end) ||
          (x.start === e.start && x.end === e.end)
      ).length > 0 ) {
      toast.error('No de puede'); 
      return;
      }else if(hidden){
        alert('cancelado')
        return
      }else{

      
      openModal()
        
        
      setNewEvento([...newEvento,{
        title : newDisciplina?.split('-')[0],
        start: e.start,
        end: e.end}])
      }
      setDateTime({ fechaIni: e.start,fechaFin: e.end,})




  }


  
  
    return (
      
      
        <Calendar
          selectable
          min={minHour}
          max={maxHour}
          views={['week', 'day', 'agenda']}
          localizer={localizer}
          events={newEvento}
          defaultView={Views.WEEK}
          scrollToTime={new Date(2021, 1, 1, 6)}
          defaultDate={new Date}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={handleSelect}
          
        />

        
     
    )
  
}

export default Selectable