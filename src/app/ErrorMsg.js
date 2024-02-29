const ErrorMsg = (props) => {
    const isError = props.isError

    if (isError)
    return (
        <div class="alert alert-danger" role="alert">
            {isError}
        </div>
    )
}

export default ErrorMsg