import { render, screen } from '@testing-library/react';
import { SearchForm } from '../src/components';

test('Renders an input with the expected label', () => {
	render(<SearchForm />);
	const searchInput = screen.getByLabelText('Search for some art');
	expect(searchInput).toBeInTheDocument();
});
