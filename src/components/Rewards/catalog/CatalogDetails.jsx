import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import catalogs from "../../../lib/catalog";
import { useParams } from "react-router-dom";
import back_arrow from '../../../assets/images/arrow_back.svg'
import '../rewards.css'

const CatalogDetailsPage = () => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const history = useNavigate(); // Create a history object

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setIsButtonDisabled(!isCheckboxChecked);
  };

  const buttonClass = isButtonDisabled ?'py-3 my-8  font-medium text-base checked_class': 'terms_button py-3 my-8  font-medium text-base' ;
  const handleGoBack = () => {
    history(-1); // Navigate back to the previous page
  };
    const { itemId } = useParams(); //get the item ID from the Url

    // Find the item based on the item ID
    const item = catalogs.find((catalogItem) => catalogItem.id == itemId);

    if (!item) {
        return <div>Reward not found</div>;
    }

    return (
        <>
            {/* <Nav /> */}
            <div className="item-details ">
                <div className="header flex py-3 px-4 border-b border-#D9D9D9 cursor-pointer"
                    onClick={handleGoBack} // Handle back arrow button click
                >
                    <img src={back_arrow} alt="back" />
                    <span className="text-base font-normal">Go Back</span>
                </div>
                <div className="body px-4 pt-10">

                    <p className="text-left font-bold text-xl">{item.title}</p>
                    <div className="py-4 rounded-md flex justify-center flex-col card mt-4">
                        <img src={item.img} alt={item.name} />
                        <p className="text-xs font-medium">{item.rate}</p>
                    </div>
                    <p className="text-left font-bold text-sm my-4">{item.summary}</p>
                    <p className="text-sm font-normal text-left mb-8">{item.description}</p>
                    <p className="text-left text-base font-semibold">Terms and Conditions</p>
                    <p className="text-left text-sm my-2">I hereby agree to the use of my points or ratings to receiving the {item.name} medal</p>
                    <div className="text-left">
                    <input type="checkbox" name="" id="" 
                    className="mt-2"
                    onChange={handleCheckboxChange}
                    /> 
                    <span className="ml-2">Agree and continue</span>
                    <input 
                    type="button" 
                    value={`Reedeem ${item.name} Medal`} 
                    // className="terms_button py-3 my-8  font-medium text-base checked_class" 
                    disabled={isButtonDisabled}
                    className={buttonClass}
                    />
                    </div>
                    
                </div>
            </div>
        </>

    )
};

export default CatalogDetailsPage;
