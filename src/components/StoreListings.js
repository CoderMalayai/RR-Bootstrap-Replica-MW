import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "30px", marginTop: "20px", textAlign: "center", fontWeight: "normal"}}>Browse stores in Houston</h2>
            <Container>
                <Row style={{display: "flex", justifyContent: "space-evenly"}}>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "55px" }} src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "55px" }} src="https://logos-world.net/wp-content/uploads/2022/11/Sprouts-Farmers-Market-Emblem.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "55px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/375px-Kroger_logo_%281961-2019%29.svg.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>

                
            </Container>
        </div>
    )
}