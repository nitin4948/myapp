import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  test('renders without error', () => {
    render(
        <Button 
            value={'Continue button'}
            clickEvent={()=>{}}
        />
    );
  });

  it('verify button text render', () => {
    const handler = jest.fn();
    const { container } = render(<Button 
        value={'Continue button'}
        clickEvent={()=>{}}
    />);
    expect(container.firstChild).toHaveTextContent('Continue button')
   });  
});

