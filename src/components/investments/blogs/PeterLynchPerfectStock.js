import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

const PeterLynchPerfectStock = () => {
  const characteristics = [
    {
      title: 'It Sounds Boring—or Even Better, Ridiculous',
      description: 'Companies with dull or quirky names often fly under the radar, making them attractive investment opportunities.',
      source: 'Cabot Wealth'
    },
    {
      title: 'It Does Something Dull',
      description: 'Businesses engaged in mundane activities, like manufacturing bottle caps, tend to face less competition and can be more profitable.',
      source: 'Cabot Wealth'
    },
    {
      title: 'It Does Something Disagreeable',
      description: 'Industries such as waste management or tobacco may be unappealing to some, but they can offer substantial returns due to their consistent demand.',
      source: 'Cabot Wealth'
    },
    {
      title: 'It\'s a Spin-Off',
      description: 'When a company divests part of its business into a separate entity, the new spin-off can be undervalued and poised for growth.',
      source: 'Cabot Wealth'
    },
    {
      title: 'Institutions Don’t Own It and Analysts Don’t Follow It',
      description: 'Stocks that are not widely covered by analysts or owned by institutional investors can present opportunities before they gain mainstream attention.',
      source: 'Cabot Wealth'
    },
    {
      title: 'Rumors Abound: It’s Involved with Toxic Waste and/or the Mafia',
      description: 'Negative rumors can deter investors, but they may also lead to undervalued stocks with strong fundamentals.',
      source: 'Cabot Wealth'
    },
    {
      title: 'There’s Something Depressing About It',
      description: 'Industries like funerals or waste disposal may be seen as morbid, but they often provide steady returns due to consistent demand.',
      source: 'Cabot Wealth'
    },
    {
      title: 'It’s a No-Growth Industry',
      description: 'Mature industries with little growth can be profitable if a company can increase market share or improve efficiency.',
      source: 'Cabot Wealth'
    },
    {
      title: 'It’s Got a Niche',
      description: 'Companies that dominate a specific niche market can have a competitive edge and less competition.',
      source: 'Cabot Wealth'
    },
    {
      title: 'People Have to Keep Buying It',
      description: 'Products with recurring demand, like razor blades or prescription drugs, ensure consistent revenue streams.',
      source: 'Cabot Wealth'
    },
    {
      title: 'It’s a User of Technology',
      description: 'Companies that effectively utilize technology can improve efficiency and profitability, even if they don\'t develop the technology themselves.',
      source: 'Cabot Wealth'
    },
    {
      title: 'Insiders Are Buying',
      description: 'When company executives purchase shares, it signals confidence in the company\'s future prospects.',
      source: 'Cabot Wealth'
    },
    {
      title: 'The Company Is Buying Back Shares',
      description: 'Share repurchases can indicate that a company believes its stock is undervalued and is a way to return value to shareholders.',
      source: 'Cabot Wealth'
    }
  ];

  return (
    <>
      <style>
        {`
          .blog-header {
            background-color: #f8f9fa;
            padding: 2rem 0;
            margin-bottom: 2rem;
          }
          .characteristic-card {
            margin-bottom: 1.5rem;
          }
          .characteristic-title {
            font-size: 1.25rem;
            font-weight: 500;
          }
          .characteristic-description {
            font-size: 1rem;
            line-height: 1.6;
          }
        `}
      </style>
      <div className="blog-header">
        <Container>
          <h1 className="text-center">Peter Lynch’s 13 Characteristics of the Perfect Stock</h1>
        </Container>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {characteristics.map((char, index) => (
              <Card key={index} className="shadow-sm characteristic-card">
                <Card.Body>
                  <h5 className="characteristic-title">{char.title}</h5>
                  <p className="characteristic-description">{char.description}</p>
                  <footer className="blockquote-footer">
                    {char.source}
                  </footer>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        <Alert variant="success" className="mt-5">
          <Alert.Heading>✅ Key Takeaway</Alert.Heading>
          <p>
            Peter Lynch's criteria emphasize investing in companies that are often overlooked by the broader market but possess strong fundamentals, consistent demand, and potential for growth. By focusing on these characteristics, investors can identify opportunities that may lead to substantial returns over time.
          </p>
        </Alert>
      </Container>
    </>
  );
};

export default PeterLynchPerfectStock;