import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import femme from "./femme.jpg";
import './ProduitWomen.css';

export default function(){
    return(

<div className="OneLine">
    <div className='produitmen'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={femme} />
        <Card.Body>
          <Card.Title style={{ fontweigth:"bold", textAlign:"center"}}> Coat</Card.Title>
          <Card.Text style={{textAlign :"center"}}>
            Coat for all sizes available in all our stores
          </Card.Text>
          <div className="button">
          <Button variant="primary" style={{ backgroundcolor: 'blue' }}>Buy</Button>
          </div>
        </Card.Body>
      </Card>
    </div>


    <div className='produitmen'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={femme} />
        <Card.Body>
          <Card.Title style={{ fontweigth:"bold", textAlign:"center"}}> Coat</Card.Title>
          <Card.Text style={{textAlign :"center"}}>
            Coat for all sizes available in all our stores
          </Card.Text>
          <div className="button">
          <Button variant="primary" style={{ backgroundcolor: 'blue' }}>Buy</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className='produitmen'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={femme} />
        <Card.Body>
          <Card.Title style={{ fontweigth:"bold", textAlign:"center"}}> Coat</Card.Title>
          <Card.Text style={{textAlign :"center"}}>
            Coat for all sizes available in all our stores
          </Card.Text>
          <div className="button">
          <Button variant="primary" style={{ backgroundcolor: 'blue' }}>Buy</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

</div>


    )
}