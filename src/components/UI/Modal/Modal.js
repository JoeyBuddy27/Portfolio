import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const modal = props => {

        return (
            <React.Fragment>
                <Backdrop show={props.show} 
                clicked={props.modalClosed} />
                <Card >
                <CardContent>
                <div
                    className={classes.Modal}
                    style={{
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
                </CardContent>
                </Card>
            </React.Fragment>
          
        )
}

export default React.memo(modal, (prevProps, nextProps) => 
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children );