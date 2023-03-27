const User = require("../models/userModel");

//Need to set up userControllers

/*
New user registration
router.post("/", registerUser);
1.Will take name,email and password from req.body
2.Must check if user exist
3.Then bcrypt //hash password
4.Then create the user
*/

 /*
 Login user
 router.post("/login", loginUser);
 1.Take user and password from req.body
 2.WE check if the user exist in db.We get all user info:
 const user = await User.findOne({ email })
 3.Then : if (user && (await bcrypt.compare(password, user.password)))
 4.Then we must send all user data(blogs) which I want to show him
 
 */
