
import React from 'react';
import { Container, Row, Col, Card, Alert, Badge } from 'react-bootstrap';

const PeterLynchCompanies = () => {
  const companyTypes = [
    {
      title: 'Slow Growers',
      description: 'These are large, mature companies that expand only slightly faster than the economy. They typically operate in saturated industries where innovation and growth have plateaued.',
      traits: 'Stable cash flows, generous dividends, limited expansion opportunities.',
      investorFit: 'Best for conservative investors seeking income rather than capital appreciation.',
      variant: 'secondary'
    },
    {
      title: 'Stalwarts',
      description: 'Stalwarts are established, financially strong companies with steady but moderate growth (10–12% annually). They’re not flashy but offer relative safety during downturns.',
      traits: 'Strong brand, predictable earnings, defensive in recessions.',
      investorFit: 'Suitable for investors who want stability with some growth, balancing risk and reward.',
      variant: 'info'
    },
    {
      title: 'Fast Growers',
      description: 'These are the stars of the stock market—small to mid-sized companies with explosive growth potential. They often expand at 20–25% (or higher) annually, driven by new products, services, or markets.',
      traits: 'High earnings growth, reinvestment over dividends, high volatility.',
      investorFit: 'Ideal for aggressive investors who can handle risk and volatility in exchange for potentially massive returns.',
      variant: 'success'
    },
    {
      title: 'Cyclicals',
      description: 'Cyclical companies’ performance depends heavily on the economic cycle. They boom during expansions but struggle during recessions. Industries like automobiles, airlines, and construction fall here.',
      traits: 'Earnings fluctuate with the economy, timing is crucial.',
      investorFit: 'Requires patience and timing skills; great for investors who can buy low in downturns and sell high in recoveries.',
      variant: 'warning'
    },
    {
      title: 'Turnarounds',
      description: 'Also called “recoveries,” these are troubled companies facing difficulties such as high debt, falling profits, or poor management. If they succeed in restructuring, investors may reap outsized gains.',
      traits: 'High risk, high reward, dependent on execution.',
      investorFit: 'For contrarian investors who can tolerate uncertainty and research turnaround strategies deeply.',
      variant: 'danger'
    },
    {
      title: 'Asset Plays',
      description: 'These are companies whose true value lies hidden in assets not fully recognized by the market—such as real estate, natural resources, patents, or subsidiaries.',
      traits: 'Often undervalued, requires research to uncover hidden assets.',
      investorFit: 'Suits patient investors who look beyond earnings and spot hidden value.',
      variant: 'primary'
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
          .card-title-badge {
            font-size: 1.5rem;
          }
          .card-body-custom {
            min-height: 220px;
          }
        `}
      </style>
      <div className="blog-header">
        <Container>
          <h1 className="text-center">From Slow Growers to Fast Growers: Understanding Peter Lynch’s Six Company Types</h1>
        </Container>
      </div>
      <Container>
        <p className="lead text-center mb-5">
          Legendary investor Peter Lynch, in his classic book <em>One Up on Wall Street</em>, introduced a simple yet powerful framework to categorize companies into six types. This framework helps investors understand the nature of a business and set realistic expectations about returns, risks, and growth potential. Let’s explore each type in detail.
        </p>

        <Row>
          {companyTypes.map((type, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Header>
                  <Badge bg={type.variant} className="card-title-badge">{type.title}</Badge>
                </Card.Header>
                <Card.Body className="d-flex flex-column card-body-custom">
                  <Card.Text>{type.description}</Card.Text>
                  <footer className="blockquote-footer mt-auto">
                    <strong>Traits:</strong> {type.traits}
                  </footer>
                  <footer className="blockquote-footer">
                    <strong>Investor Fit:</strong> {type.investorFit}
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Alert variant="success" className="mt-5">
          <Alert.Heading>✅ Key Takeaway</Alert.Heading>
          <p>
            Successful investing is not about chasing every stock. It’s about knowing the type of company you own, setting realistic expectations, and aligning it with your personal investment style.
          </p>
        </Alert>
      </Container>
    </>
  );
};

export default PeterLynchCompanies;
