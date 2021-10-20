import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, url } = props.news
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                        <a href={url}>Read More</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default News;