import React from "react";

const ReviewForm = () => {
  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea"
      >
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={reviewText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

export default ReviewForm;
