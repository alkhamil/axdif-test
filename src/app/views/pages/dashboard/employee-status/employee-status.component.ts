import { Component, OnInit } from '@angular/core';

interface LeaveRecap {
  leaveCode: string,
  requestOn: string,
  leaveType: string,
  startDate: string,
  endDate: string,
  duration: string,
  dayType: string,
  leaveCategory: string,
  status: string,
  reason: string,
}

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.scss'],
})
export class EmployeeStatusComponent implements OnInit {
  stateOptions: any[] = [
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Yearly', value: 'Yearly' },
  ];

  value: string = 'Monthly';
  date: Date = new Date();

  chartAttendanceSummaryData: any;
  chartAttendanceSummaryOptions: any;

  chartAttendanceCompleteData: any;
  chartAttendanceCompleteOptions: any;

  chartTaskProgressData: any;
  chartTaskProgressOptions: any;

  chartTaskCompleteData: any;
  chartTaskCompleteOptions: any;

  leaveRecaps: LeaveRecap[] = [];

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartAttendanceSummaryData = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.generateRandomNumber(12, 30),
          borderRadius: 4,
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: this.generateRandomNumber(12, 30),
          borderRadius: 4,
        },
      ],
    };

    this.chartAttendanceSummaryOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    this.chartAttendanceCompleteData = {
      labels: ['Complete', 'Not Complete'],
      datasets: [
        {
          data: [500, 500],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };

    this.chartAttendanceCompleteOptions = {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            useBorderRadius: true,
            borderRadius: 2,
            color: textColor,
          },
        },
      },
    };

    this.chartTaskProgressData = {
      labels: ['Complete', 'Overdue', 'Unscheduled'],
      datasets: [
        {
          data: [500, 250, 250],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--surface-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--surface-400'),
          ],
        },
      ],
    };

    this.chartTaskProgressOptions = {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            useBorderRadius: true,
            borderRadius: 2,
            color: textColor,
          },
        },
      },
    };

    this.chartTaskCompleteData = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'First Dataset',
          data: this.generateRandomNumber(12, 30),
          fill: true,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
          backgroundColor: '#0796E526',
        },
        {
          label: 'Second Dataset',
          data: this.generateRandomNumber(12, 30),
          fill: true,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          tension: 0.4,
          backgroundColor: '#FF980026',
        },
      ],
    };

    this.chartTaskCompleteOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    const dataTemp = {
      leaveCode: 'LV-CV10435-01-23-001',
      requestOn: 'Mon, 02 Jan 2023',
      leaveType: 'Annual Leave',
      startDate: 'Tue, 03 Jan 2023',
      endDate: 'Tue, 03 Jan 2023',
      duration: '1 Day(s)',
      dayType: 'Full Day',
      leaveCategory: 'Emergency Leave',
      status: 'Approve',
      reason: 'Family Event'
    }
    
    for (let i = 0; i < 10; i++) {
      this.leaveRecaps.push(dataTemp)
    }
    
  }

  generateRandomNumber(length: number, max: number) {
    return [...Array(length)].map((e) => ~~(Math.random() * max));
  }
}
