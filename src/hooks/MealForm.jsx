// MealForm.jsx
import SelectInput from '../utils/selectInput';
import CameraIcon from '../assets/icons/photo_camera.svg';
import { Navigate } from 'react-router-dom'

const MealForm = ({
  mode,
  handleImageUpload,
  imageUploaded,
  uploadedImageUrl,
  item,
  itemData,
  handleFormSubmit,
  handleInputChange,
  style,
  categoryOptions,
  currencyOptions,
  statusOptions,
}) => {

  const handleCancel = () => {
    return <Navigate to="/previous-route" />;
};

  return (
    <div>
    <div className="upload_image mx-8 pb-8 py-12 mb-2 cursor-pointer">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      style={{ display: 'none' }}
      id="imageUploadInput"
    />
    {item.imageUrl ? (
      <div className='flex flex-col justify-center items-center'>
      <img 
        src={item.imageUrl} 
        alt={item.name}
        className="w-full h-48  object-cover object-center" 
      />
      </div>
      
    ) : (
    <label
      htmlFor="imageUploadInput"
      className="flex flex-col justify-center items-center cursor-pointer"
    >
      <img
        src={imageUploaded ? uploadedImageUrl : CameraIcon}
        alt=""
        srcSet=""
        id="imagePreview"
        name="image"
        value={item.image}
        className="w-164 sm:w-96 image-preview p-6 sm:mx-20"
      />
      <p className="text-xs md:text-base pt-3">
        {imageUploaded ? 'Image Successfully Uploaded' : 'Upload Image'}
      </p>
    </label>
    )}

    {/* Additional button to trigger image upload */}
    <button
      onClick={() => document.getElementById('imageUploadInput').click()}
      className="text-[#148361e5] mt-3"
    >
      Change Image
    </button>
  </div>
    <form className={style}>
            <div>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={item.name || '' }
                onChange={handleInputChange}
                autoComplete="current-name"
                className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-3 text-gray-900 bg-white leading-tight"
            />
            </div>

            <div>
            <SelectInput
                id="category"
                name="category"
                value={item.category || '' }
                onChange={handleInputChange}
                options={categoryOptions}
                placeholder="Category"
                autoComplete="current-category"
            />
            </div>

            <div className="flex w-full gap-1 justify-around">
            <SelectInput
                className="border w-full px-12"
                id="currency"
                name="currency"
                value={item.currency || '' }
                onChange={handleInputChange}
                options={currencyOptions}
                placeholder="Currency"
                autoComplete="current-currency"
            />
            <input
                className="border h-11 w-full mt-2"
                id="cost"
                type="text"
                name="cost"
                value={item.cost || '' }
                onChange={handleInputChange}
                placeholder="100"
                autoComplete="current-cost"
            />
            </div>

            <div className="flex w-full gap-1 justify-between">
            <SelectInput
                className="border"
                id="status"
                name="status"
                value={item.status || '' }
                onChange={handleInputChange}
                options={statusOptions}
                placeholder="Status"
                autoComplete="current-status"
            />
            </div>
        </form>
        <div className="flex items-center justify-between mx-16 sm:mx-36 md:mx-48">
                <button
                    className="bg-[#228768] hover:bg-black hover:text-[#33cc9f] text-gray-300 font-bold py-3 rounded focus:outline-none focus:shadow-outline mt-8 mb-20 px-6"
                    onClick={handleFormSubmit}
                >
                    Update
                </button>

                <button
                    className="bg-[#ff6347] hover:bg-black hover:text-[#ff6347] text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline mt-8 mb-20 px-6"
                    onClick={handleCancel} 
                >
                    Cancel
                </button>
            </div> 

    </div>
  )
}

export default MealForm;
