import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
        <p className="font-weight-bold">
              We have stupid snacks ... and we have {snacks.length} snacks.
            </p>
            <p className="font-weight-bold">
              We have stupid drinks ... and we have {drinks.length} drinks.
            </p>
          <CardTitle>
            <span className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </span>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
