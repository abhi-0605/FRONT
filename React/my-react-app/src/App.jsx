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



// import React from 'react'
// import UserGreeting from './Component/UserGreeting'

// function App() {
//   return (
//     <>
//       <UserGreeting isLoggedIn={true} username="Abhi"  />
//       <UserGreeting isLoggedIn={false} username="ram"  />
//       <UserGreeting   />
//     </>
//   )
// }

// export default App



// import React from 'react'
// import List from './Component/List'

// function App() {
//   const fruits = [{ id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "coconut", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 }]

//   const vegitable = [{ id: 6, name: "potatoes", calories: 110 },
//     { id: 7, name: "celery", calories: 15 },
//     { id: 8, name: "carrots", calories: 25 },
//     { id: 9, name: "corn", calories: 63 },
//     { id: 10, name: "broccoli", calories: 50 }]
//   // return (
//   //   <>
//   //     <List/>
//   //   </>
//   // )

//   return(
//         <>
//         {/* <List items={fruits} category='Fruits'/>
//         <List items={vegitable} category='Vegitables'/> */}

//         {fruits.length>0 && <List items={fruits} category='Fruits'/>}
//         {vegitable.length>0 && <List items={vegitable} category='Vegitable'/>}
//         </>
//     )
// }

// export default App




// import React from 'react'
// import Button2 from './Component/Button2'
// import ProfilePicture from './Component/ProfilePicture'

// function App() {
//   return (
//     <>
//     {/* <Button2/> */}
//     <ProfilePicture/>
//     </>
//   )
// }

// export default App



import React from 'react'
import MyComponent from './Component/MyComponent'
import Counter from './Component/Counter'

function App() {
  return (
    <>
      {/* <MyComponent/> */}
      <Counter/>
    </>
  )
}

export default App
