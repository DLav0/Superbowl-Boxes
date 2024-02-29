import { Button, Modal, ModalHeader, ModalBody, Card, CardText, CardBody, CardTitle, Label, Col, FormGroup } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik'
import { validateInputForm } from './logical/validateInputForm'

const PersonEdit = (props) => {

    const person = props.person
    const ID = props.ID

    const handleSubmit = (values) => {
        console.log('form submitted')
        props.updatePerson(values, ID)
    }

    const initialVals = {
        name: person.name,
        shortName: person.shortName,
        email: person.email
    }


    return (      
        <>
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>
                {person.name} ({person.shortName}) -{person.email}
                <ModalBody>
                    <Formik
                        initialValues={initialVals}
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
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>                             
                        </Form>
                    </Formik>
                </ModalBody>
            </ModalHeader>
        </Modal>
    </>

    )
}

export default PersonEdit

// Get the modal set up and add code from the input form.  Edit button on the first opens the edit modal.
// data is passed from the input form to a function that will alter the state of an object with the correct ID
// probably need to call this in the App component bc that's where the state is defined for persons array.  
// Ideally, show the current full name, short name, email with the input feilds shown below.  Update button 
// submits the form.  Could also just modify the existing modal to have an input feild.  Think I'd rather do it
// the other way w/ a separate modal.  