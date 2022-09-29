export interface Schedule {
  id: number;
  title: string;
  content: string;
}

export interface AddSchedule extends Omit<Schedule, 'id'> {}

export interface EditSchedule extends Schedule {}
