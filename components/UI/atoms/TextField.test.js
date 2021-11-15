import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';


describe('TextField component', () => {
  const fieldRef = null;
  test('renders without error', () => {
    render(
        <TextField 
            fieldRef={fieldRef}
        />
    );
  });
});

