import {Card, CardText, CardBody, CardTitle } from 'reactstrap'


const PersonCardNM = (props) => {

    const person = props.person

    const openEdit = () => {
        props.toggleE()
    }

    return (
        <div className="dispCard">
        <Card className='bg-dark'>
            <CardBody>
            <dl className="row">
                <dt className="col-3">Name</dt>
                <dd className="col-9">{person.name}</dd>
                <dt className="col-3">AFC:</dt>
                <dd className="col-9">{person.afc}</dd>
                <dt className="col-3">NFC:</dt>
                <dd className="col-9">{person.nfc}</dd>
                <dt className="col-3">Email:</dt>
                <dd className="col-9">{person.email}</dd>
            </dl>
        </CardBody>
        </Card>
        </div>
    )
}

export default PersonCardNM