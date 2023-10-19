export default function Navbar() {
    return (
        <div className="font-body text-words">
            <div className="my-8">
                <div className="flex gap-2 mx-4">
                    <img src="./src/assets/menu.png"></img>
                    <h1 className=" font-medium text-lg">Help desk</h1>
                </div>
                
                <hr className="h-0.5"></hr>
                <img src="./src/assets/arrow_back.png" className="mx-5 mt-4 p-1 "></img>
            </div>
        </div>
    );
}

