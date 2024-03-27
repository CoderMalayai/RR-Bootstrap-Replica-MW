import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1575px", minHeight: "255px", marginBottom: "50px", backgroundColor: "#DEEED6"}} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "250px" }}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for <br /> delivery  or pickup today
                        </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want form local stores, brought right to your door.
                        </Card.Text>
                        <Form>
                            <Form.Group>
                                <Form.Control size="lg" type="text" placeholder="       Enter your address                                         ->" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div>
                <img style={{ height: "255px", marginTop: "40px", width:"20%" , position: "absolute", backgroundSize: "contain"}} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card image" />
            </div>
        </div>
    )
}