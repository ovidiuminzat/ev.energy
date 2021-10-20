import PropTypes from 'prop-types';
import {Backdrop, CircularProgress} from '@mui/material';

/**
 * Loader component to be displayed while data fetching is in progress
 *
 * @param {Boolean} open
 * @return {JSX.Element}
 */
function Loader({open}) {
  return (
    <Backdrop open={open}>
      <CircularProgress/>
    </Backdrop>
  )
}

Loader.propTypes = {
  open: PropTypes.bool,
};

Loader.defaultProps = {
  open: false,
}

export default Loader;
