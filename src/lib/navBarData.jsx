import PropTypes from 'prop-types';

const NavBarData = ({data}) => {
    return (
        <div>
            <div className='flex -mt-24 mb-28  ml-32'>
                <ul className='sub-nav-list'>
                    {data.items.map((item) => (
                        <li key={item.title} className='sub-nav-list-item'>
                            <a href={item.route}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

NavBarData.propTypes = {
    data: PropTypes.array,
};
export default NavBarData;
