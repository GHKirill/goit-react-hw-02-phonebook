import css from './Filter.module.css';
export default function Filter({ handleFilter }) {
  return (
    <div className={css.formFilter}>
      <p className={css.filterLabel}>Find Contact by Name</p>
      <input type="text" name="filter" onChange={handleFilter} />
    </div>
  );
}
