import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage } = props.news
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default News;