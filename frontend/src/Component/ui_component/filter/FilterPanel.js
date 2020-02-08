import React from 'react';
import { FilterContainer } from './FilterPanel.styles';
import { Button } from 'react-bootstrap';

export default function FilterPanel() {
  return (
    <FilterContainer>
      <h4>Filter by:</h4>
      <strong>Budget Per Night:</strong>
      <input
        type="range"
        className="custom-range"
        min="0"
        max="5"
        id="customRange2"
      />
      <label>€250</label>
      <label>€750</label>
      <hr />

      <strong>Frequently use:</strong>
      <div>
        <Button variant="primary" size="sm">
          Hotels
        </Button>
        <Button variant="Light" size="sm">
          Apartments
        </Button>
        <Button variant="Light" size="sm">
          Hostels
        </Button>
        <Button variant="Light" size="sm">
          Double bed
        </Button>
        <Button variant="Light" size="sm">
          24-hour reseption
        </Button>
        <Button variant="primary" size="sm">
          Breakfast included
        </Button>
      </div>
      <hr />

      <strong>Review Score:</strong>
      <input
        type="range"
        className="custom-range"
        min="0"
        max="5"
        id="customRange2"
      />
      <hr />

      <strong>Star rating:</strong>
      <input
        type="range"
        className="custom-range"
        min="0"
        max="5"
        id="customRange2"
      />

      <Button variant="outline-primary" size="sm">
        See more options
      </Button>
    </FilterContainer>
  );
}
