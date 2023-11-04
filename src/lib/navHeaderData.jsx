const navHeaderData = ({data, targetId}) => {
    const selectedItem = data.find((item) => item.id === targetId);

    return (

        <h2 className="text-xl text-black font-bold ml-2"> 
            {selectedItem?.header}
        </h2>
        
    );
};

export default navHeaderData;
