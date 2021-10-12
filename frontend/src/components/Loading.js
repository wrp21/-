import React from "react";
import { FormContainer, LoadingMsg} from "../Styled/Styled";


const Loading = ({history}) => {

    return (
        
        <FormContainer className="Loading">
            <label>
                분석을 요청하고 있으니 잠시만 기다려주세요.
            </label>
        </FormContainer>
        
    );
} 

export default Loading;