import {useNavigate} from 'react-router-dom';

export default function OnboardingButton({text, onNav}) {
    const navigate = useNavigate();

    function HandleClick() {
        navigate(onNav);
    }
    return (
        <button
            className='
    bg-[#33CC9F] text-[#000F08] mx-auto text-[16px] w-[358px] rounded-[8px] py-[16px] px-[32px]'
            onClick={HandleClick}
        >
            {text}
        </button>
    );
}
