const HelloWithProps = (props) => {

  return (
    <div>
      <p>Props are objects and here we define what attributes we call from the object for example here a name: {props.name}</p>
      <p>We can create as many props and attributes as we want, for example here we can use props.age: {props.age}</p>
    </div>
  )

}

const Hello = () => {

  return (
    <div>
      <p>Using a function to produce content</p>
    </div>
  )
}


const App = () => {

  const ikä = 77

  return (  
  <div>
    <p>Hello world</p>
    <br/>
    <Hello/>
    <br/>
    <HelloWithProps name="Sussu Subekainen"/>
    <br/>
    <HelloWithProps name="Pekka Pappa" age={ikä}/>
  </div>
  )

}




export default App