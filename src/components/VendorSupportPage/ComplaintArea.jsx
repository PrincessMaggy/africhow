import { useState } from 'react';

const ComplaintArea = () => {
    const [text, setText] = useState('');
    const maxCharacters = 150;

    const handleTextChange = (event) => {
        const inputText = event.target.value;
        if (inputText.length <= maxCharacters) {
            setText(inputText);
        }
    };

    return (
        <div className="flex flex-col">
            <label>
                Complaint/Feedback
                <span className="text-red-700 text-xl">*</span>
            </label>
            <textarea
                value={text}
                onChange={handleTextChange}
                rows="6"
                cols="26"
                className="text-wrap border border-words my-2"
                required
            />
            <p className="text-end">
                {text.length}/{maxCharacters}
            </p>
        </div>
    );
};

export default ComplaintArea;
