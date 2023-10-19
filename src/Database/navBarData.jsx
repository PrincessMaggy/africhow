
const navBarData = ({ data , targetId}) => {

    const selectedItem = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});

    };

  return (
    <div>
        <div className='flex -mt-24 mb-28  ml-32'>
                <h2 className='text-base text-right'>{selectedItem.header}</h2>
            </div>
            <ul className="sub-nav-list">
              <li key={subItem.title} className="sub-nav-list-item">
                <a href={subItem.route}>{subItem.title}</a>
              </li>
             </ul>
    </div>
)
}

export default navBarData