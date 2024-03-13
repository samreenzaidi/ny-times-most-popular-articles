import React from 'react';
import Articles from '../components/Articles';
import {screen, render} from '@testing-library/react';

describe('Articles', () => {
    it('should render the view if articles array is not empty', () => {
        render(<Articles loading={false} articles={[{}]}/>)
        expect(screen.getByAltText(/news-img/)).not.toBeNull();
    });
    it('should render the view if articles array is empty', () => {
        render(<Articles loading={true} articles={[]}/>)
        expect(screen.getByText("Please wait...")).not.toBeNull();
    });
});
