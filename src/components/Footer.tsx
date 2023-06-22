import { FilterValue } from "../types";
import { Filters } from "./Filters";

type Props = {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
  onClearCompleted: () => void;
};

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
      </span>
      <Filters filterSelected={filterSelected} onFilterChange={() => {}} />
    </footer>
  );
};
