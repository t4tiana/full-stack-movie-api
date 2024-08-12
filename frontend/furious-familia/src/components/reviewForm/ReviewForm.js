import React from "react";
import Form from "react-bootstrap/Form";

const ReviewForm = () => {
  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea"
      >
        <Form.Control
          ref={reviewText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        />
      </Form.Group>
      <Button
        variant="outline-info"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
