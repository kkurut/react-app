import { useState } from "react";

const AgeInput = () => {
    const [age, setAge] = useState(0);

    const onChangeInput = (evt) => {
        setAge(evt.target.value += 1)
    }

    return (
        <div>
            <input type="text" value={age} onChange={onChangeInput} maxLength={10} />
            <p>{age}</p>
        </div>
    )
}

export default AgeInput