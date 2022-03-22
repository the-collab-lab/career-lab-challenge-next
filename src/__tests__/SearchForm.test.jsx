import { render, screen } from '@testing-library/react';
import { SearchForm } from '../components/SearchForm';

test('Renders an input with the expected label', () => {
	render(<SearchForm />);
	const searchForm = screen.getByLabelText('Search for some art');
	expect(searchForm).toBeInTheDocument();
});
