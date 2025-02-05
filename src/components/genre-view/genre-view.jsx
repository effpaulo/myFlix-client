import React, { useState } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './genre-view.scss';

export class GenreView extends React.Component{
  

    render() {

        const{ genre, onBackClick} = this.props;

    return (
        <Row>
            <Col>
                <div>
              
                    <span className="label"><h1>{genre.Name}</h1></span>
                    <hr></hr>
                 
                    <span className="value">{genre.Description} </span>
                </div>
                <div className="btn-box">
                    <Button
                    style={{
                        marginLeft: '0px',
                        marginBottom: '0px',
                        marginTop: '30px',
                    }}
                    className="btn-primary"
                    variant="primary"
                    onClick={() => {
                        onBackClick();
                    }}
                    >
                    Back
                    </Button>
                </div>
            </Col>
        </Row>
    )
}
}

GenreView.propTypes = {
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
      }).isRequired
  };