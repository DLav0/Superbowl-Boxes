import { Button, Modal, ModalHeader, ModalBody, Card, CardText, CardBody, CardTitle } from 'reactstrap'


const PersonCard = (props) => {

    const person = props.person

    return (
        <>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>
                    {person.name} ({person.shortName})
                    <ModalBody>
                        <Card>
                            <CardBody>
                            <dl className="row">
                                <dt className="col-3">AFC:</dt>
                                <dd className="col-9">{person.afc}</dd>
                                <dt className="col-3">NFC:</dt>
                                <dd className="col-9">{person.nfc}</dd>
                                <dt className="col-3">Email:</dt>
                                <dd className="col-9">{person.email}</dd>
                            </dl>
                        </CardBody>
                        </Card>
                    </ModalBody>
                </ModalHeader>
            </Modal>
        </>
    )
}

export default PersonCard