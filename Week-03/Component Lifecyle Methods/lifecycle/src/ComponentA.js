import React from 'react'
//import ComponentB from './ComponentB'

class ComponentA extends React.Component{
          constructor(){
                     super();
                     this.state = {
                              name:'ComponentA',
                              data:[ ]
                     };
                 console.log("ComponentA :-constructor");    
          }
          static getDerivedStateFromProps(props,state){
            console.log("ComponentA:- stategetDerivedStateFromProps");
            return null;
          }
          //https://jsonplaceholder.typicode.com/users
          componentDidMount(){
                    fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(data => this.setState({data:data}))
          }
          render(){
                    console.log("ComponentA:- render");
                    return(
                              <>
                                           <h1>{this.state.name}</h1>
                                         
                                            <ul>
                                                  {
                                                     this.state.data.map((d)=>{
                                                            return(
                                                                      
                                                                      <li>{d.id}<br/>{d.name}<br/>{d.username}<br/>{d.email}<br/>{d.city}</li>

                                                            )
                                                     })     
                                                  }
                                                  
                                            </ul>
                              </>
                    
                               
                    )
                    
          }
          
}
export default ComponentA;