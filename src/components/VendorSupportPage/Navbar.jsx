import BackArrow from '../assets/icons/arrow_back.png';

export default function Navbar() {
    return (
        <div className="font-body text-words">
            <div className="my-8">
                <div className="flex gap-2 mx-4">
                    <img src={BackArrow}></img>
                    <h1 className=" font-medium text-lg">Help desk</h1>
                </div>
                
                <hr className="h-0.5"></hr>
            </div>
        </div>
    );
}

