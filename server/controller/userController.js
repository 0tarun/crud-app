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

export const findAll_user = async(req,res)=>{
    try{
        const userData = await Users.find();
        if(!userData){
            return res.status(404).json({msq: "User not find !"});
        }
        res.status(200).json(userData);

    }catch(error){
        res.status(500).json({error: error});
    }
}

export const findByEmail = async(req,res)=>{
    try{
        const email = req.params.email;
        const userEmail = await Users.findOne({email: email});
        if(!userEmail){
            return res.status(404).json({msg: "User not found!"});
        }       
        res.status(200).json(userEmail);
    }
    catch(error){
        res.status(500).json({error: error});
    }
}

export const findBy_id = async(req,res)=>{
    try{
        const id = req.params.id;
        const userId = await Users.findById(id);
        if(!userId){
            return res.status(404).json({msg: "User not found!"});
        }
        res.status(200).json(userId);
    }catch(error){
        res.status(500).json({error: error});
    }
}

export const Delete = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteUser = await Users.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).json({msg: "user not found!"});
        }
        res.status(200).json(deleteUser);

    }catch(error){
        res.status(500).json({error: error});
    }
}

export const Update = async(req,res)=>{
    try{
        const id = req.params.id;
        const updateUser = await Users.findByIdAndUpdate(id, req.body, {new: true});
        if(!updateUser){
            return res.status(404).json({msg : "User not found!"});
        }
        res.status(200).json(updateUser);

    }catch(error)
    {
    res.status(500).json({error : error});
    }
}