import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter, value }) => {
  return (
    <label>
      Find contacts by name
      <input type='text' onChange={onChangeFilter} value={value} />
    </label>
)};


export default Filter;

Filter.protoType = {
  onChange:PropTypes.node,
  value: PropTypes.string.isRequired,
}
