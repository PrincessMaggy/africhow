const navHeaderData = ({ data, targetId }) => {
    
    const selectedItem = data.find((item) => item.id === targetId);

    return (
        <div>
            <h2 className='text-xl text-black font-bold'>
                {selectedItem.header}
            </h2> 
        </div>
    );
};

export default navHeaderData;
