import { TestScopeFilter } from './TestScopeFilter';
import { TestTypeFilter } from './TestTypeFilter';

export interface TestSearchFiltersProps {
  searchProductType: {
    results: Array<TestTypeFilter>;
  };
  searchProductScope: {
    results: Array<TestScopeFilter>;
  };
  onCheckBoxSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
