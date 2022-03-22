import { render, screen } from '@testing-library/react';
import { SearchForm } from '../components/SearchForm';

test('Renders `SearchForm` with the role `search`', () => {
	render(<SearchForm />);
	const searchForm = screen.getByRole('search');
	expect(searchForm).toBeInTheDocument();
});
