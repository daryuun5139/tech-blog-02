import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// UTC -> "2022_04" のフォーマットに変換
export const formatDate1 = (date: dayjs.Dayjs | string) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYYMM");
  return formattedDate;
};

// UTC -> "2022/04/01" のフォーマットに変換
export const formatDate2 = (date: dayjs.Dayjs | string) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
  return formattedDate;
};
