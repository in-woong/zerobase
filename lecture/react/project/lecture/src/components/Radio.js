import { useEffect, useState } from 'react';
import { useRadioGroup } from './RadioGroup';

export default function Radio({ id, name, value, label }) {
  const { updateGroupStates } = useRadioGroup();

  const [state, setState] = useState({
    id,
    name,
    value,
    selected: false,
  });

  useEffect(() => {
    updateGroupStates(state);
  }, [state.selected]);

  const handleChange = () => {
    setState({ ...state, selected: true });
  };

  return (
    <label htmlFor={id}>
      {label}
      <input type='radio' name={name} value={value} onChange={handleChange} />
    </label>
  );
}
