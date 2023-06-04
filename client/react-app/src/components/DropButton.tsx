import { Dropdown, Form } from 'react-bootstrap';

interface Props {
  options: string[];
  selectedOptions: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
}

function DropButton({ options, selectedOptions, onSelectionChange }: Props) {
  const handleOptionClick = (option: string) => {
    let newSelectedOptions: string[];

    if (selectedOptions.includes(option)) {
      newSelectedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }

    // Perform form validation checks
    if (newSelectedOptions.length <= 1) {
      onSelectionChange(newSelectedOptions);
    } else {
      // Display an error message or handle the validation failure
      alert('You can select up to 3 options only.');
    }
  };

  return (
    <Dropdown id="dropdown-button-drop-end" className="w-100" drop="end">
      <Dropdown.Toggle variant="primary" id="dropdown-checkbox-button" className="w-50">
        {selectedOptions.length === 0 ? 'Select Options' : `${selectedOptions.length} option(s) selected`}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Form>
          {options.map((option) => (
            <Form.Check
              key={option}
              type="checkbox"
              label={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionClick(option)}
            />
          ))}
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropButton;
