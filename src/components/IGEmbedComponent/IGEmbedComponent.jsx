import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

import { Col } from 'react-bootstrap'

const IGEmbedComponent = ({ url }) => {
    return (
        <Col xs={12} md={6}>
            <div style={{ display: 'flex' }}>
                <InstagramEmbed url={url} width='100%' />
            </div>
        </Col>
    )
}

export default IGEmbedComponent;