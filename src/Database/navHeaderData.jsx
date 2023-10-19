
const navHeaderData = ({ data, targetId}) => {

    const selectedItem= data.find((item) => item.id === targetId);

  return (
    <div>
        <h2 className='text-base text-white font-bold'>{selectedItem.header}</h2>
    </div>
  )
}

export default navHeaderData
