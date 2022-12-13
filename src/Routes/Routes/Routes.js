const { createBrowserRouter } = require("react-router-dom");
const { default: SignUp } = require("../../Pages/SignUp/SignUp");




const Routes = createBrowserRouter([
   {
      path: '/signup', 
      element: <SignUp></SignUp>
   }
])



export default Routes ; 