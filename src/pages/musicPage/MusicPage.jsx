import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import IGEmbedComponent from '../../components/IGEmbedComponent/IGEmbedComponent';

const MusicPage = () => {
    const [urls, setUrls] = useState([
        'https://www.instagram.com/reel/C0pQyRQC8e5/',
        'https://www.instagram.com/reel/CPNsAf9JR5R/',
        
    ])
    return (
        <Container fluid>
            <h1>Music Page</h1>
            <Row>
                {
                    urls.length >= 1 && urls.map((url, key) => {
                        return (
                            <IGEmbedComponent key={key} url={url} />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default MusicPage;