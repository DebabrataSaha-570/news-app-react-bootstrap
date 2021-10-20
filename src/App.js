import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=748359b350c343ea88a72163afcc7fe8')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  console.log('news', news)
  return (
    <div >
      <Container>
        <Row xs={1} md={4} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
