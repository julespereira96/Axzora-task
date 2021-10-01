import "./Scrollbar.scss";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "../Modal/Modal";
import React, { useState } from "react";

export default function Scrollbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div class="row scrollbard d-flex align-items-center justify-content-center mt-5 mb-5">
        <div class="col-md modal-container mb-5 ">
          <Button
            className="ButtonModal"
            onClick={() => setIsOpen(true)}
            variant="outline-secondary"
          >
            Go
          </Button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        </div>
        <div class="col-md vertical-scrollable">
          <div class="row text-center">
            <div class="col-sm-8" className="announcement">
              Sit amet mauris commodo quis. Et pharetra pharetra massa massa
              ultricies mi quis. Sem nulla pharetra diam sit amet. Purus non
              enim praesent elementum. Cras pulvinar mattis nunc sed. Eleifend
              quam adipiscing vitae proin. Ultricies mi eget mauris pharetra et
              ultrices neque ornare. Nisl nunc mi ipsum faucibus vitae aliquet
              nec ullamcorper sit. Varius duis at consectetur lorem donec massa
              sapien faucibus. Est velit egestas dui id ornare. Magna etiam
              tempor orci eu lobortis elementum nibh. Ut lectus arcu bibendum at
              varius vel pharetra vel.
            </div>
            <div class="col-sm-8" className="announcement">
              Ac odio tempor orci dapibus. Adipiscing diam donec adipiscing
              tristique risus nec feugiat. Vitae sapien pellentesque habitant
              morbi tristique senectus et. Dui sapien eget mi proin sed. Porta
              non pulvinar neque laoreet suspendisse interdum. Eget nullam non
              nisi est. Fames ac turpis egestas integer. Ac feugiat sed lectus
              vestibulum mattis ullamcorper velit sed ullamcorper. Facilisis
              mauris sit amet massa. Rutrum quisque non tellus orci ac auctor
              augue mauris. Nibh venenatis cras sed felis eget velit. Eget nulla
              facilisi etiam dignissim diam. Donec enim diam vulputate ut
              pharetra sit amet aliquam id. Lacus sed turpis tincidunt id
              aliquet. Ante metus dictum at tempor. Sit amet consectetur
              adipiscing elit duis tristique sollicitudin nibh. Lectus mauris
              ultrices eros in cursus. Enim sit amet venenatis urna cursus.
              Laoreet id donec ultrices tincidunt arcu. Nullam ac tortor vitae
              purus faucibus ornare.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
