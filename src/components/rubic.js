import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function Rubic() {
    var configuration = {
        from: 'USDT',
        to: 'TRX',
        fromChain: 'ETH',
        toChain: 'TRON',
        amount: 1,
        iframe: 'vertical',
        hideSelectionFrom: false,
        hideSelectionTo: true,
        tokenSearch: true,
        rubicLink: true,
        theme: 'dark',
        background: '#660f53',
        injectTokens: {
            'eth': [
                '0x3330BFb7332cA23cd071631837dC289B09C33333'
            ]
        },
        slippagePercent: {
            instantTrades: 2,
            crossChain: 5
        }
    }

    Object.freeze(configuration);

    rubicWidget.init(configuration);
    return (
        
        <div className='rubic'>
            <Container>
                
                <Row>
                    <Col lg={6} sm={12} md={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FYbtxt0KhIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                        <div id="rubic-widget-root"></div>
                        
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
