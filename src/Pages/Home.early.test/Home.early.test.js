import React from 'react'
import Home from '../Home';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";

describe('Home() Home method', () => {
  // Happy path tests
  describe('Happy Paths', () => {
    it('should render the Home component without crashing', () => {
      // Test to ensure the component renders without errors
      const { container } = render(<Home />);
      expect(container).toBeInTheDocument();
    });

    it('should apply the correct background image', () => {
      // Test to ensure the background image is applied correctly
      const { getByRole } = render(<Home />);
      const homeHeroDiv = getByRole('banner'); // Assuming the div is a banner role
      expect(homeHeroDiv).toHaveStyle(`background-image: url(${bgImage})`);
    });
  });

  // Edge case tests
  describe('Edge Cases', () => {
    it('should handle missing background image gracefully', () => {
      // Test to ensure the component handles missing background image
      jest.mock("../../Assets/Hero.jpg", () => null); // Mocking the image import to return null
      const { container } = render(<Home />);
      expect(container.firstChild).toHaveStyle('background-image: url()');
    });
  });
});