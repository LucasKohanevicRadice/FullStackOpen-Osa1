
const AddPersonForm = ({addPerson, newName, handlePersonChange, newNumber, handleNumberChange}) => {

    return (
        <form onSubmit = {addPerson}>
        Name:<input value={newName}
        onChange = {handlePersonChange}/> 
        <br></br>
        Number:<input value={newNumber}
        onChange = {handleNumberChange}/>
        <br></br>
        <button type = "submit">save</button>
        </form>
    )

}

export default AddPersonForm 