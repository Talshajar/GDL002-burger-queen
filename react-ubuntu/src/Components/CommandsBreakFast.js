import React, { Fragment } from 'react'
import { Card, Button , CardContent, CardActions , Typography } from '@material-ui/core';


const CommandsBreakfast = (props) => {
    

return (
    
<Fragment>
<Card>
    {props.orden.map((props, index) =>
    <CardContent key={index}>
        <Typography variant="h5" component="h2" >{props.item}</Typography>
        <Typography color="textSecondary"> {props.price}</Typography>
          <CardActions> 
          <button >eliminar</button>
          </CardActions>
    </CardContent>
)}  

<Button>Submit</Button>
</Card>
</Fragment>
    )};


export default CommandsBreakfast;