import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const RadioGroupContext = createContext({});
export const useRadioGroup = () => useContext(RadioGroupContext);

export default function RadioGroup({ children, name, onChange }) {
  const [states, setStates] = useState(
    Children.map(children, ({props}) => ({
      id: props.id,
      name: props.name,
      value: props.value,
      selected: false,
    }))
  );

  const updateGroupStates = (updatedRadio) => {
    const newStates = states.map((s) =>
      s.id === updatedRadio.id ? updatedRadio : { ...s, selected: false }
    );
    setStates(newStates);
  };

  useEffect(() => {
    onChange?.(states.find((state) => state.selected)?.value);
  }, [states]);

  return (
    <RadioGroupContext.Provider value={{ updateGroupStates }}>
      {children}
    </RadioGroupContext.Provider>
  );
}
