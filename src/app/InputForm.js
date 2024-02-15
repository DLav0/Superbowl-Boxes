import { Button, Label, Col, FormGroup } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { validateInputForm } from './logical/validateInputForm'

const InputForm = (props) => {

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        console.log('In the form of a question?')
        props.updateState(values)

    }


    return (
        <Formik
            initialValues={{
                name: '',
                shortName: '',
                email: ''
            }}
            onSubmit={handleSubmit}
            validate={validateInputForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='name' md='2'>
                        Full Name
                    </Label>
                    <Col md='8'>
                        <Field
                            name='name'
                            placeholder='Full Name'
                            className='form-control'
                        />
                        <ErrorMessage name='name'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='shortName' md='2'>
                        Short Name
                    </Label>
                    <Col md='8'>
                        <Field
                            name='shortName'
                            placeholder='Short Name'
                            className='form-control'
                        />
                        <ErrorMessage name='shortName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='8'>
                        <Field
                            name='email'
                            placeholder='Email'
                            className='form-control'
                        />  
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>   
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                        <Button type='submit' color='primary'>
                            Add Person
                        </Button>
                    </Col>
                </FormGroup>                             
            </Form>
        </Formik>
    )

}

export default InputForm