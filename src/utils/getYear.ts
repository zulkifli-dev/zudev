import { differenceInYears } from "date-fns";

export default function getYear({ startDate, endDate }: { startDate: Date, endDate: Date }) {
    return differenceInYears(endDate, startDate)
}
