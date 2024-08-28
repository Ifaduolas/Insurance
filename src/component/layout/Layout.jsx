import React, { useState } from "react"
import styled from "styled-components"
import Header from "../header/Header"
import Result from "../result/Result"
import Resume from "../resume/Resume"
import Form from "../form/Form"
import Spinner from "../spinner/Spinner"


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

const Layout = () => {
    const [resume, setResume] = useState({
        quotation:0,
        data: {
            brand: '',
            year:  '',
            plan: ''
        }
    });

    const [loading, setLoading] = useState(false);

    const { quotation, data} = resume;

    return (
        <Container>
            <Header
                title="Insurance Quote"/>
            <FormContainer>
                <Form
                    setResume={setResume}
                    setLoading={setLoading}/>
                <Spinner
                        loading={loading}/>
                <Resume
                    data={data}/>
                <Result
                    quotation={quotation}/>                
            </FormContainer>    
        </Container>
    )
}

export default Layout;