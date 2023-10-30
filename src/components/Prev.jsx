import Arrow from '../assets/icons/prev.png';
import PropTypes from 'prop-types';

export default function Prev({onClick}) {
    return (
        <div>
            <img
                src={Arrow}
                alt='previous icon'
                className='w-[24px] h-[24px]'
                onClick={onClick}
            />
        </div>
    );
}
Prev.propTypes = {
    onClick: PropTypes.func.isRequired,
};
