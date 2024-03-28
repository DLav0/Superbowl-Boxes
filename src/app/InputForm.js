import { Button, Label, Col, FormGroup } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { validateInputForm } from './logical/validateInputForm'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from "react";
//import { useDidMountEffect } from './logical/useDidMountEffect'

const InputForm = (props) => {

    const updateState = props.updateState
    
    const [bodySkip, toggleSkip] = useState(false)
    const [bodyEntry, toggleEntry] = useState({name: 'NameGame'})
    

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        updateState(values)
        
        // toggleSkip(true)
        // toggleEntry(values)
        // togglePost(!runPost)
        // console.log(runPost)
        
        // resetForm()

    }

 



    // maybe resets to this every time the state chages.  So it's always this fed into post. 
    // I think it's sampleObj is redefined in the function block, but the state changes with runPost switch and the let
    // on the outside is redefined before the asynch function occurs.  Needs to not mount initially.  useDidMount wont let it 
    // cycle through twice without calling the post.  Would useRef do anything?  I think it redefines a variable without doing a state 
    // refresh

    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
    
        useEffect(() => {
            if (didMount.current) {
                func();
                
            }   else {
                didMount.current = true;
            }
        }, deps);
    }

    // Wrap useEffect in another function?  Still not sure the difference between custom hook and function.

    const [runPost, togglePost] = useState(false)

   

    useEffect(() => {


        console.log('Asynch')
        
        if (bodySkip) {
        fetch('http://localhost:8000/persons', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(
               bodyEntry
            )
        }) 
            .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);        
                error.response = response;         
                throw error;   
            }
        },
        error => { throw error; }      
    )
    .then(response => response.json())
    .then(response => {
        console.log(response)
        console.log('stringthing')
        })
    .catch(error => {
        console.log('post comment', error.message);
        alert('Your comment could not be posted\nError: ' + error.message); 
    });
    }   

        return () => {
            console.log('UnmountAsynch')
            toggleSkip(false)
        }
     }, [runPost] ); 

     // Just leave the useEffect here uncommented.  As long as the handleSubmit does not call it, it won't have any effect.  

     // the fetch promise needs two parts to consume.  I guess it's two callback functions in .then()
     // Get the useEffect block to run only when runPost is changed.  
     // I guess the server always sends something back.  Indicates success or error
     // is fetch considered an API?  Built into JS?  Returns only json data?
     // The fetch is being called on every relaod, and when the form is submitted.  Everything gets run through twice.  
     // If body is null, delete the post made by post method.  This would reverse every itteration before the input form is submitted.
     // If body is null, create a condition to skip the post.  If it iterates through when mounting, it will not post anything.  Only posts
     // When the body is input from the form.  


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
                    <Col md={{size: 6, offset: 2}}>
                        <Button type='submit' color='primary'>
                            Add Person
                        </Button>
                    </Col>
                    <Col md={{size: 2, offset: 2}}>
                        <Link to={'/boxes'}>
                            <Button>
                                View Boxes --&gt;&gt;
                            </Button>
                        </Link>
                    </Col>
                </FormGroup>                             
            </Form>
        </Formik>
    )

}

export default InputForm