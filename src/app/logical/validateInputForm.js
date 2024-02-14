export const validateInputForm = (values) => {
    const errors ={}

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length < 2) {
        errors.name = 'Must be at least 2 characters'
    } 

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain an @'
    }

    if (values.shortName.length > 10) {
        errors.shortName = 'The shortname must be less than 10 characters'
    }

    return errors
}