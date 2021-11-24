import * as Component from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}
export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currenDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currenDate.setMonth(currenDate.getMonth()-1);
        onMonthChange(`${currenDate.getFullYear()}-${currenDate.getMonth()+1}`);
    }
    const handleNextMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currenDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currenDate.setMonth(currenDate.getMonth()+1);
        onMonthChange(`${currenDate.getFullYear()}-${currenDate.getMonth()+1}`);
    }
    return (
        <Component.Container>
            <Component.MonthArea>
                <Component.MonthArrow onClick={handlePrevMonth}>⬅️</Component.MonthArrow>
                <Component.MonthTitle>{formatCurrentMonth(currentMonth)}</Component.MonthTitle>
                <Component.MonthArrow onClick={handleNextMonth}>➡️</Component.MonthArrow>
            </Component.MonthArea>
            <Component.ResumeArea>
                < ResumeItem title="Revenues" value={income} />
                < ResumeItem title="Expenditure" value={expense} />
                < ResumeItem title="Balance" value={income - expense} color={(income-expense) < 0 ? 'red' : 'green'}/>
            </Component.ResumeArea>
        </Component.Container>
    );
}