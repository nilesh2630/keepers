const {Router}=require("express");
const {gettodo,savetodo,deletetodo}=require("../controller/todocontroller")
const router=Router();
router.get("/",gettodo);
router.post("/save",savetodo);
router.post("/delete",deletetodo);
// router.post("/update",updatetodo);

module.exports=router;
