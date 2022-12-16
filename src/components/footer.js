import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import twitter from "../assets/images/twitter.gif";
import geo from "../assets/images/geo.gif";
import telegram from "../assets/images/telegram.gif";

export default function Footer() {
    return (
        <div id="rubic-widget-root"></div>
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                    <div className="socials">
                    <span><a target="_blank" rel="noreferrer" href="https://twitter.com/NeotechFinance"><img src={twitter} alt="" /></a></span>
                    <span><a target="_blank" rel="noreferrer" href="https://neotech.finance/"><img src={geo} alt="" /></a></span>
                    <span><a target="_blank" rel="noreferrer" href="https://t.me/neotechfinance"><img src={telegram} alt="" /></a></span>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
<script defer type="text/javascript">
    // describe widget configuration and saving to a global variable for future use
    var configuration = {
        from: 'USDT',
        to: 'TRX',
        fromChain: 'ETH',
        toChain: 'TRON',
        amount: 1,
        iframe: 'flex',
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

    // prevent accidental changes to the object, for example, when re-creating a widget for another theme
    Object.freeze(configuration);

    // create widget
    rubicWidget.init(configuration);
</script>
    )
}
