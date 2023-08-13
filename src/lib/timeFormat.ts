import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// UTC -> "2022_04" のフォーマットに変換
export const formatDate = (date: dayjs.Dayjs | string) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYYMM");
  return formattedDate;
};
