import React, { Fragment , Component } from 'react'
import { Card, Button , CardContent, CardActions , Typography } from '@material-ui/core';
import firebase from '../Components/firebase'

class CommandsBreakfast extends Component {

    constructor(props){
        super(props);
        this.state = {
            NewOrder: []
        }
         this.submit = this.submit.bind(this);
  }
    
    submit(Command, totalSuma){
        const Parameters = {
          Command: Command,
          totalSuma: totalSuma,

        }
        this.setState({
            NewOrder:[...this.state.NewOrder, Parameters]
        }, ()=> console.log(this.state.NewOrder)
        )
    }
    
    
    ComponentDidMount(){
        const db = firebase.firestore();
    
        const addCommand = (Command, totalSuma, Table, Waiter) => {
          console.log('estoy')
          //Agregar coworking
          db.collection("Order").add({
              Command: Command,
              totalSuma: totalSuma,
              Table: Table,
              Waiter: Waiter
            })
            .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });
      }
      addCommand();
    }


    
render(){
  
    
    let Command = this.props.orden.map((props, index)=>{
     return (   

<Fragment>
<Card>
    <CardContent item xs={12} sm={6} key={index} >
        <Typography variant="h5" component="h2" >{props.item}</Typography>
        <Typography color="textSecondary">${props.price}.00</Typography>
          <CardActions> 
          <Button onClick={()=>this.props.removeItem(index)} variant="contained" color="secondary">Eliminar</Button>
          </CardActions>
    </CardContent>

</Card>
</Fragment>
    )
})

const totalSuma = this.props.orden.reduce((product, price) => {
    return product + price.price;  
}, 0);

return (
    <div>
      
      <input name="Customer" id="Customer" class="form-control" placeholder="Nombre del cliente" required="" type="text"></input>
      <input name="Table" id="Table" class="form-control" placeholder="Mesa" required="" type="text"></input>
     
{Command}
 <p>total: $ {totalSuma}.00</p>
 <Button variant="contained" color="default" type="submit" onClick={()=>{this.submit(Command,totalSuma);}}> Enviar </Button>
    </div>
)

};
};

  


export default CommandsBreakfast;