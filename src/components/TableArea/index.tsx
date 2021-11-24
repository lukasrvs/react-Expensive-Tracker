import * as Component from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
type Props = {
    list: Item[];
}
export const TableArea = ({ list }: Props) => {
    return(
        <Component.Table>
            <thead>
                <tr>
                    <Component.TableHeadColumn width={100}>Date</Component.TableHeadColumn>
                    <Component.TableHeadColumn width={130}>Category</Component.TableHeadColumn>
                    <Component.TableHeadColumn>Title</Component.TableHeadColumn>
                    <Component.TableHeadColumn width={150}>Value</Component.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </Component.Table>
    );
}