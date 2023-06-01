import { Schedule, Subject } from "../../contexts/weeklySchedule.interfaces";
import { DayOfTheWeek, numberToDay } from "../../util/constants";

export const Option = ({ subject }: { subject: Subject }) => {
  const subjectInfo = subject?.schedule.map(
    (element: Schedule) =>
      ` ${numberToDay[element.day as DayOfTheWeek]} (${element.init_time} - ${
        element.end_time
      })`
  );
  return (
    <option key={`${subject.id}-option`} value={`${subject?.name} - T${subject?.class_num}`}>
      {`Dias:${subjectInfo}`}
    </option>
  );
};
