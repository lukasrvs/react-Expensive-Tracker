import { useState } from 'react';
import * as Component from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
type Props = {
    onAdd: (item: Item) => void;
}
export const InputArea = ({ onAdd }: Props) =>{
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField,setValueField] = useState(0);
    let categoryKeys: string[] = Object.keys(categories);
    const handleAddEvent = () => {
        let errors: string[] = [];
        if(isNaN(new Date(dateField).getTime())){
            errors.push('Invalid date.');
        }
        if(!categoryKeys.includes(categoryField)){
            errors.push("Invalid category.");
        }
        if(titleField === ''){
            errors.push('Empty title.');
        }
        if(valueField<=0){
            errors.push('Invalid value.');
        }
        if(errors.length>0){
            alert(errors.join('\n'));
        } else {
            onAdd({
                date: new Date(dateField),
                category: categoryField,
                title: titleField,
                value: valueField,
            });
            clearFields();
        }
    }
    const clearFields = () =>{
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }
    return (
        <Component.Container>
            <Component.InputLabel>
                <Component.InputTitle>Date</Component.InputTitle>
                <Component.Input type="date" value={dateField} onChange={e=>setDateField(e.target.value)} />
            </Component.InputLabel>
            <Component.InputLabel>
                <Component.InputTitle>Category</Component.InputTitle>
                <Component.Select value={categoryField} onChange={e=>setCategoryField(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((key, index)=>(
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}
                    </>
                </Component.Select>
            </Component.InputLabel>
            <Component.InputLabel>
                <Component.InputTitle>Title</Component.InputTitle>
                <Component.Input type="text" value={titleField} onChange={e=>setTitleField(e.target.value)} />
            </Component.InputLabel>
            <Component.InputLabel>
                <Component.InputTitle>Value</Component.InputTitle>
                <Component.Input type="number" value={valueField} onChange={e=>setValueField(parseFloat(e.target.value))} />
            </Component.InputLabel>
            <Component.InputLabel>
                <Component.InputTitle>&nbsp;</Component.InputTitle>
                <Component.Button onClick={handleAddEvent}>New</Component.Button>
            </Component.InputLabel>
        </Component.Container>
    );
}