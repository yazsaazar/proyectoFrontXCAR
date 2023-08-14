import { TranslationWidth } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NbCalendarCell, NbCalendarDayPickerComponent, NbCalendarMonthModelService, NbDateService } from '@nebular/theme';
import { CalendarKitMonthCellComponent } from '../../extra-components/calendar-kit/month-cell/month-cell.component';
@Component({
  selector: 'ngx-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  entryComponents: [CalendarKitMonthCellComponent],
})
export class CalendarioComponent extends NbCalendarDayPickerComponent<Date, Date> {
 
  month = new Date();
  monthCellComponent = CalendarKitMonthCellComponent;
}
