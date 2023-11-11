// ProfileForm.jsx
import { MdLocationPin } from "react-icons/md";
import CameraIcon from '../assets/icons/photo_camera.svg';
import { Navigate } from 'react-router-dom'


const ProfileForm = ({ 
    item, 
    handleInputChange, 
    handleImageUpload, 
    handleFormSubmit, 
    style, 
    imageUploaded, 
    uploadedImageUrl 
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
                alt="User" 
                className="w-40 h-40 rounded-full object-cover object-center" 
              />
              <div className='text-center flex  flex-col justify-center mt-4 text-sm items-center'>
                
                  <p className='flex items-center'>{item.businessName}</p>
                  <p className='flex items-center'> <MdLocationPin /><span>{item.storeAddress}</span> </p>
             
              </div>
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
                className="w-16 image-preview"
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
        <form className={style} > 
            <div>
                <label className="label text-base font-light  flex gap-2 mt-3">First name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Michael"
                        onChange={handleInputChange}
                        value={item.firstName || '' }
                        autoComplete='current-firstName'
                        className="input w-[80px] h-[30px]"
                    />
            </div>

            <div>
                <label className="label text-base font-light  flex gap-2 mt-3">Last name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Michael"
                        onChange={handleInputChange}
                        value={item.lastName || '' }
                        autoComplete='current-lastName'
                        className="input w-[80px] h-[30px]"
                    />
            </div>

            <div>
                <label className="label text-base font-light  flex gap-2 mt-3">Business name</label>
                    <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        placeholder="Michael"
                        onChange={handleInputChange}
                        value={item.businessName || '' }
                        autoComplete='current-businessName'
                        className="input w-[80px] h-[30px]"
                    />
            </div>

            <div>
                <label className="label text-base font-light  flex gap-2 mt-3">Store Address</label>
                    <input
                        id="storeAddress"
                        name="storeAddress"
                        type="text"
                        placeholder="Michael"
                        onChange={handleInputChange}
                        value={item.storeAddress || '' }
                        autoComplete='current-storeAddress'
                        className="input w-[80px] h-[30px]"
                    />
            </div>

            <div>
                <label className="label text-base font-light  flex gap-2 mt-3">Business Email</label>
                    <input
                        id="businessEmail"
                        name="businessEmail"
                        type="text"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={item.businessEmail || '' }
                        autoComplete='current-businessEmail'
                        className="input w-[80px] h-[30px]"
                    />
            </div>

            <div>
                <label className="label text-base font-light  flex gap-2 mt-3">Business Phone No</label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        placeholder="Mobile"
                        onChange={handleInputChange}
                        value={item.phoneNumber || ''}
                        autoComplete='current-phoneNumber'
                        className="input w-[80px] h-[30px]"
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
  );
};

export default ProfileForm;
