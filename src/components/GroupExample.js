import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import otelimage from './images/otelImg.png';
import locationIcon from './images/locationIcon.svg';

function GroupExample() {
    return (
        <CardGroup className='OtelCard'>
            <Card >
                <Card.Body className='ImageCard'>
                    <Card.Img className='otelImg' variant="center" src={otelimage} />
                </Card.Body>

                {/*
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        
         <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>*/}
            </Card>

            <Card>

                <Card.Body>

                    <div
                        className='OtelLokasyon'> <img className='LocationIcon' src={locationIcon} alt="info" />Kemer, Antalya
                    </div>
                    <Card.Title className='OtelAd'>Concorde Luxury Resort Casino Convention & SPA</Card.Title>
                    <Card.Text>
                        hotel information
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>

                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        price info
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardGroup>
    );
}

export default GroupExample;