// @flow
import type { TimetableArrangement } from 'types/timetables';

// A sample timetable used to preview themes on the settings page
const previewArrangement: TimetableArrangement = {
  Tuesday: [
    [
      {
        ClassNo: '2',
        LessonType: 'Tutorial',
        WeekText: 'Every Week',
        DayText: 'Friday',
        StartTime: '1000',
        EndTime: '1100',
        Venue: 'COM1-B113',
        ModuleCode: 'CS3235',
        ModuleTitle: 'Computer Security',
        colorIndex: 0,
      },
      {
        ClassNo: '2',
        LessonType: 'Tutorial',
        WeekText: 'Every Week',
        DayText: 'Tuesday',
        StartTime: '1100',
        EndTime: '1200',
        Venue: 'COM1-0208',
        ModuleCode: 'CS2108',
        ModuleTitle: 'Introduction to Computer Networks',
        colorIndex: 7,
      },
      {
        ClassNo: '1',
        LessonType: 'Lecture',
        WeekText: 'Every Week',
        DayText: 'Tuesday',
        StartTime: '1400',
        EndTime: '1600',
        Venue: 'LT15',
        ModuleCode: 'CS3235',
        ModuleTitle: 'Computer Security',
        colorIndex: 0,
      },
    ],
  ],
  Wednesday: [
    [
      {
        ClassNo: 'A19',
        LessonType: 'Tutorial',
        WeekText: 'Odd Week',
        DayText: 'Wednesday',
        StartTime: '1000',
        EndTime: '1200',
        Venue: 'AS1-0207',
        ModuleCode: 'GER1000',
        ModuleTitle: 'Quantitative Reasoning',
        colorIndex: 2,
      },
      {
        ClassNo: '1',
        LessonType: 'Lecture',
        WeekText: 'Every Week',
        DayText: 'Wednesday',
        StartTime: '1200',
        EndTime: '1400',
        Venue: 'i3-Aud',
        ModuleCode: 'CS2100',
        ModuleTitle: 'Computer Organisation',
        colorIndex: 4,
      },
    ],
  ],
  Monday: [
    [
      {
        ClassNo: 'J1',
        LessonType: 'Sectional Teaching',
        WeekText: 'Every Week',
        DayText: 'Monday',
        StartTime: '1000',
        EndTime: '1300',
        Venue: 'BIZ2-0509',
        ModuleCode: 'ACC1006',
        ModuleTitle: 'Accounting Information Systems',
        colorIndex: 6,
      },
      {
        ClassNo: '1',
        LessonType: 'Lecture',
        WeekText: 'Every Week',
        DayText: 'Monday',
        StartTime: '1400',
        EndTime: '1600',
        Venue: 'i3-Aud',
        ModuleCode: 'CS2108',
        ModuleTitle: 'Introduction to Computer Networks',
        colorIndex: 7,
      },
    ],
  ],
  Thursday: [[]],
  Friday: [[]],
};

export default previewArrangement;
