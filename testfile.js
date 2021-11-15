deatils test

import { render, screen } from '@testing-library/react';
import { Details } from './index';

describe('Details page', () => {
  test('renders without error', () => {
    render(<Details />);
  });

  it('veify class container class name', () => {
    const handler = jest.fn();
    const { container } = render(<Details />);
    expect(container.firstChild).toHaveClass('detail-page');
   });  
});


Home test


import { render, screen } from '@testing-library/react';
import { Home } from './index';

describe('Home page', () => {
  test('renders without error', () => {
    render(<Home />);
  });

  it('veify text render', () => {
    const handler = jest.fn();
    const { container } = render(<Home />);
    expect(container.firstChild).toHaveTextContent('Apply Filter')
   });  
});


Deatils test

import { render, screen } from '@testing-library/react';
import { DetailsPage } from './DetailsPage';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

describe('DetailsPage', () => {
  test('renders without error', () => {
    const obj = {
        author: "Ofelia Hilpert",
        description: "Duchess said after a minute or two, looking for eggs, as it is.' 'I quite agree with you,' said the King exclaimed, turning to the other, and making faces at him as he spoke. 'A cat may look at all.",
        genre: "Cupiditate",
        image: "http://placeimg.com/480/640/any",
        isbn: "9786546755833",
        published: "1981-03-14",
        publisher: "Et Et",
        title: "And with that she."
    };
    render(
      <Router>
        <DetailsPage {...obj}/>
      </Router>  
    );
  });
  
});


Home test


import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('Home page', () => {
  test('renders without error', () => {
    const searchField = null;
    render(
        <HomePage
            fieldRef={searchField}
            applyFilterClick={()=>{}}
            applyFilterValue={'Apply Filter'}
            clearFilterClick={()=>{}}
            clearFilterValue={'Remove Filter'}
            paginationResult={{}}
            selectedPagination={1}
            recorPerPage={10}
            setSelectedPagination={()=>{}}
        />
    );
  });
  
});


orgasim   deatils header test

import { render, screen } from '@testing-library/react';
import { DetailsPageHeader } from './DetailsPageHeader';
import {
  BrowserRouter as Router,
} from "react-router-dom";

describe('DetailsPageHeader component', () => {
  test('renders without error', () => {
    render(
      <Router>
        <DetailsPageHeader 
            title={'test'}
        />
      </Router>  
    );
  });

  it('verify text prop is available', () => {
    const handler = jest.fn();
    const { container } = render(
      <Router>
        <DetailsPageHeader 
            title={'test'}
        />        
      </Router>);
    expect(container.firstChild).toHaveTextContent('test')
   });   
 
});

deatils page main test




