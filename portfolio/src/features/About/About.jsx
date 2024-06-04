import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const About = () => {
    return (
        <>
            <div className="about" id='about'>
                <h1 className="p-4">ABOUT ME</h1>
                <Container style={{lineHeight:"2em"}}>
                    <Row style={{ width:"90vw"}}>
                        <Col >
                            <div className="skills pt-3 mt-5 m-3">
                                <h2>Skills</h2>
                                <Container>
                                    <Row>
                                        <Badge style={{margin:'5px', width:"10vw"}} pill bg="secondary"><Col xs>CSS</Col></Badge>
                                        <Badge style={{margin:'5px', width:"10vw"}}  pill bg="secondary"><Col xs>Python</Col></Badge>
                                        <Badge style={{margin:'5px', width:"10vw"}}  pill bg="secondary"><Col xs>JavaScript</Col></Badge>
                                        <Badge style={{margin:'5px', width:"10vw"}}  pill bg="secondary"><Col xs>TypeScript</Col></Badge>
                                        <Badge style={{margin:'5px', width:"10vw"}}  pill bg="secondary"><Col xs>React</Col></Badge>
                                        <Badge style={{margin:'5px', width:"10vw"}}  pill bg="secondary"><Col xs>Redux</Col></Badge>

                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col style={{height:"10vh", width:"40vw"}}>
                            <div className="get-to-know-me p-4">
                                <h2>Get to know me</h2>
                                <p>
                                    My professional interest lies in the fields of behavioral economics, marketing, and management. I am interested in deepening my knowledge in those areas in order to enhance my professional career.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;

