import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ snacks, drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
           Click on a snack to see more details.
          </CardText>
          <ListGroup>
            {snacks.map(snack => (
              <Link to={`/snacks/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Drink Menu
          </CardTitle>
          <CardText>
           Click on a drinkk to see more details.
          </CardText>
          <ListGroup>
            {drinks.map(drink => (
              <Link to={`/drinks/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>

    
    
  );
}

export default Menu;
