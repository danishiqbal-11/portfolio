import React from 'react';
import { Container, Card } from 'react-bootstrap';

const PeterLynchCompanies = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title as="h2" className="text-center mb-4">Six Types of Companies According to Peter Lynch</Card.Title>
            <Card.Text>
              In One Up on Wall Street, legendary investor Peter Lynch classified companies into six broad categories. Understanding these types helps investors make informed decisions based on a company’s growth potential and risk.
            </Card.Text>

            <h3 className="mt-4">Slow Growers</h3>
            <Card.Text>
              Large, mature companies with limited growth. They often pay high dividends but have slow stock price appreciation.
            </Card.Text>
            <Card.Text className="text-muted">
              Example: Utility companies or established consumer staples.
            </Card.Text>

            <h3 className="mt-4">Stalwarts</h3>
            <Card.Text>
              Well-established, financially strong companies with moderate growth. They are safer investments and provide steady returns.
            </Card.Text>
            <Card.Text className="text-muted">
              Example: Large multinational corporations with consistent performance.
            </Card.Text>

            <h3 className="mt-4">Fast Growers</h3>
            <Card.Text>
              Small or mid-sized companies expanding rapidly. These are potential “tenbaggers” if held over the long term.
            </Card.Text>
            <Card.Text className="text-muted">
              Example: Emerging tech or niche consumer companies.
            </Card.Text>

            <h3 className="mt-4">Cyclicals</h3>
            <Card.Text>
              Companies whose performance rises and falls with economic or industry cycles. High returns are possible during boom periods, but they are risky in downturns.
            </Card.Text>
            <Card.Text className="text-muted">
              Example: Airlines, steel, and automotive companies.
            </Card.Text>

            <h3 className="mt-4">Turnarounds</h3>
            <Card.Text>
              Struggling companies that could recover if conditions improve or management acts effectively.
            </Card.Text>
            <Card.Text className="text-muted">
              Example: Companies undergoing restructuring or financial recovery.
            </Card.Text>

            <h3 className="mt-4">Asset Plays</h3>
            <Card.Text>
              Companies undervalued because of hidden or unrecognized assets, such as land, patents, or investments.
            </Card.Text>
            <Card.Text className="text-muted">
              Example: Firms with valuable assets not reflected in stock price.
            </Card.Text>

            <h3 className="mt-4">Conclusion</h3>
            <Card.Text>
              Peter Lynch’s six-company framework provides a roadmap for investors to identify opportunities and set realistic expectations. By understanding which type a company belongs to, one can balance safety, growth, and risk in a portfolio.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default PeterLynchCompanies;