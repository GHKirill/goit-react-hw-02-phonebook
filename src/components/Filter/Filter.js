import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default class Filter extends Component {
  state = { filter: '' };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  handleFilterChange = event => {
    console.log(event.target.value);
    console.log(this.state);
    setTimeout(() => this.props.onChange({ ...this.state }), 0);
    // this.props.onChange({ ...this.state });
  };

  render() {
    const idFilter = nanoid();
    return (
      <form className={css.formFilter} onChange={this.handleFilterChange}>
        <label htmlFor={idFilter} className={css.filterLabel}>
          Find Contact by Name
        </label>
        {/* <p className={css.filterLabel}>Find Contact by Name</p> */}
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilter}
        />
      </form>
    );
  }
}

// export default function Filter({ handleFilter }) {
//   return (
//     <div className={css.formFilter}>
//       <p className={css.filterLabel}>Find Contact by Name</p>
//       <input type="text" name="filter" onChange={handleFilter} />
//     </div>
//   );
// }
// Filter.propTypes = {
//   handleFilter: PropTypes.func.isRequired,
// };
