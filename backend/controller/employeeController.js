import EmployeeModel from '../model/employeeModel.js';

// Get all Employees
export const getEmployee = async (request, response) => {
    try{
        console.log(request)
        const Employees = await EmployeeModel.find();
        console.log(Employees)
        response.status(200).json(Employees);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the Employee in database
export const addEmployee = async (request, response) => {
    try{
    const Employees = request.body;
    // console.log(Employees)
    // const newEmployee = new Employees(Employees);
    
      let result = await EmployeeModel.create(Employees);
      console.log(result)
        response.status(201).json(result);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a Employee by id
export const getEmployeeById = async (request, response) => {
    try{
        const Employee = await EmployeeModel.findById(request.params.id);
        response.status(200).json(Employee);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited Employee in the database
export const editEmployee = async (request, response) => {
    try{
        const id=request.params.id;
    let Employees = request.body;
    // const editEmployee = new Employees(Employees);
    // console.log(Employees);
    let findEmployeeId = await EmployeeModel.findOne({id });
    console.log(findEmployeeId)
    
    let savedata = await EmployeeModel.findOneAndUpdate({ _id: id }, { $set: Employees }, { new: true })
     console.log(savedata)
        response.status(201).json(savedata);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of Employee from the database
export const deleteEmployee = async (request, response) => {
    try{
        const id=request.params.id;
        console.log(id)
       let result= await Employee.deleteOne({_id:id});
       console.log(result)
        response.status(201).json("Employee deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}