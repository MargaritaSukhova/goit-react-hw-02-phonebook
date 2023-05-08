import { Block } from '../Filter/Filter.styled';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChangeFilter }) => {
  return (<Block>
            <Label htmlFor="filter"> Find contacts by name</Label>
    <Input type="text" id="filter" value={value} onChange={onChangeFilter} />
    </Block>
  )
}

export default Filter;