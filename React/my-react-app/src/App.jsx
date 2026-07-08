// import React from 'react'
// import Header from './Component/Header.jsx'
// import Footer from './Component/Footer.jsx'
// import Food from './Component/Food.jsx'

// import Card from './Component/Card.jsx'

// import Button from './Component/Buttton/Button.jsx'



// function App() {
//   return (
//     <>
//       {/* <Header />
//       <Food/>
//       <Footer/> */}
//       {/* <Card/> */}
//       <Button/>

//     </>
//   )
// }

// export default App



// import React from 'react'
// import Student from './Component/Student'


// function App() {
//   return (
//     <>
//       <Student name='ram' age={34} isStudent={true}/>
//       <Student name='shyam' age={46} isStudent={false}/>
//       <Student name='rohan' age={12} isStudent={true}/>
//       <Student name='karan' age={27} isStudent={true}/>
//       <Student age={35}/>
//     </>
//   )
// }

// export default App



import React from 'react'
import UserGreeting from './Component/UserGreeting'

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Abhi"  />
      <UserGreeting isLoggedIn={false} username="ram"  />
      <UserGreeting   />
    </>
  )
}

export default App
