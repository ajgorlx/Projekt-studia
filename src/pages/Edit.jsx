import React, {useState} from 'react';
import Text from "../components/Text";
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1)
    };

    

    return (
        <div>
            <div>
                <img src={params.get("url")} width="250px" />
                {Array(count)
                    .fill(0)
                    .map((e) => (
                     <Text />
                    ))}  
          </div>
          <Button onClick={addText}>Add Text</Button>
        </div>
    );
};

export default EditPage;