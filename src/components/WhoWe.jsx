import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const WhoWe = () => {
  return (
    <>
      <section id="Bans" className="whoWe_section py-5 position-relative">
        <div className="whoWe_layer w-100 top-0 start-0 position-absolute h-25"></div>
        <div className="whoWe_layer2 w-100 bottom-0 start-0 position-absolute h-25"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <h3 className="text-center position-relative fs_4xl ff_inter text-white fw_regular">
                <span className="hero_text">WHO</span> WE ARE?
              </h3>
              <p className="text-center position-relative fs_xl fw_medium text-white ff_poppins">
                Tincidunt laoreet integer ut aenean rhoncus. Pulvinar erat vitae
                facilisis facilisi ut massa nec interdum laoreet. Morbi
                tristique dictum facilisis pharetra egestas sit et. Velit nunc
                sapien mauris integer. Ornare habitasse nunc porta tincidunt
                pulvinar ut risus.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhoWe;
