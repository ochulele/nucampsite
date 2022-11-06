import {Col, Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { SelectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = SelectAllCampsites();

    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;