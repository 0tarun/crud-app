import Users from "../model/userModel.js";

export const create = async(req,res) =>{
    try{
        const userData = new Users(req.body);
        
        if(!userData)
        {
            return res.status(404).json({msg : "Users is not found!"});
        }

        const saveData = await userData.save();
        res.status(200).json(saveData);



    } catch (error){
        res.status(500).json({error: error});
        
    }

}