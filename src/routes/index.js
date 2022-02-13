const { Router } = require("express");
const usersRouters = require("./userRoutes");
const permissionsRouters = require("./permissionsRoutes");
const productsRouters = require("./productsRouters");
const router = Router();

router.use("/", usersRouters);
router.use("/", permissionsRouters);
router.use("/", productsRouters);
//prueba
/* router.get("/contacts", async (req, res, next) => {
    try {
        const querySnapshot = await db.collection("users").get();
        const users = querySnapshot.docs.map(doc => ({
            id: doc.id,
           ...doc.data()
        }));
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

router.post("/new-contact", async (req, res, next) => {
    const { name, lastname, email, phone } = req.body;
    const newContact = {
        name,
        lastname,
        email,
        phone

        };
    try {
    
        await db.collection("users").add(newContact);
        res.send("Contacto agregado");
    } catch (error) {
        next(error);
    }
});

router.get("/edit-contact/:id", async (req, res, next) => {
    
    try {
        const { id } = req.params;
        const doc = await db.collection("contactos").doc(id).get();
        if (!doc.exists) {
            res.status(404).send("No existe el contacto");
        } else {
            res.status(200).json(doc.data());
        }
    } catch (error) {
        next(error);
    }
}) 

router.get("/delete-contact/:id", async (req, res, next) => {

    try {
        const { id } = req.params;
        await db.collection("contactos").doc(id).delete();
        res.send("Contacto eliminado");
    } catch (error) {
        next(error);
    }

})

router.post("/update-contact", async (req, res, next) => {

    try {
        const { id } = req.body;
        const { name, lastname, email, phone } = req.body;
        const newContact = {
            name,
            lastname,
            email,
            phone
        };
        await db.collection("users").doc(id).update(newContact);
        res.send("Contacto actualizado");
    } catch (error) {
        next(error);
    }

})


 router.get ("/users-search", async (req, res, next) => {
try {
    
    const { name } = req.query;
    const querySnapshot = await db.collection("users").where("name", "==", name).get();
    const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
       ...doc.data()
    }));
    res.status(200).json(users);
    
} catch (error) {
    next(error);
    
}
    
}) 

router.get ("/users-search", async (req, res, next) => {

    try {

        const { search , searchType } = req.body;

        const querySnapshot = await db.collection("users").where(searchType, "==", search ).get();
        const users = querySnapshot.docs.map(doc => ({
            id: doc.id,
              ...doc.data()
        }));
        res.status(200).json(users);

        
    } catch (error) {
        next(error);
        
    }

}) */

module.exports = router;
