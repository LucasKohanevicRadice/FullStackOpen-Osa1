import React from 'react'
import Course from './components/course'



  // const Course = ({courses}) => {

  //   const everything = (
      
  //     <div>
  //       {courses.map((course) =>
  //       <div key = {course.id}>
  //         <h1>{course.name}</h1>

  //         {course.parts.map((part) =>
  //         <div key ={part.id}>
  //           <p>{part.name} {part.exercises}</p>
  //         </div>
  //         )}
  //       </div>
  //       )}
  //     </div>

  //   ) 
  //     return (
  //       <div>
  //         {everything}
  //       </div>
  //     )

  // }






const App = () => {


  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      // exerciseAmounts = 0,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <Course courses = {courses}/>
  )
}

export default App


  // const course = {
  //   name: 'Half Stack application development',
  //   id: 1,
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //       id: 1
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //       id: 2
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //       id: 3
  //     },
  //   ]
  // }


  // const Course = () => {

  //   const TotalExercises = () => {

  //     const total = course.parts.reduce( (sum, part) => sum + part.exercises, 0)

  //     return (
  //       <div>{total}</div>
  //     )
  //     // let sum = 0

  //     // for (let i = 0; i < course.parts.length; i++) {

  //     //   sum += course.parts[i].exercises;

  //     // }

  //     // return (
  //     //   <div><p>{sum}</p></div>
  //     // )
  //   }

  //   const Header = ({course}) => {
  
  //     return (
  //       <div>
  //           <h1>{course}</h1>
  //       </div>
  //     )
  //   }

  //   const Parts = () =>{
  
  //     const parts_Exercises = <div>{course.parts.map(part =>

  //       <p key={part.id}>

  //         {/* <b>{part.name} {part.exercises}</b> */}
  //         {part.name} {part.exercises}

  //       </p>
  //        )}
  //        </div>
  
  //     return (
  //       <div>
  //         {parts_Exercises}     
  //       </div>
  //     )
  //   }

  //   return (
  //     <div>
  //       <Header course = {course.name}/>
  //       <Parts/>
  //       <TotalExercises/>
  //     </div>
  //   )
  
  // }
  
  // return(
  //   <div>
  //   <Course/>
  //   </div>
  // )
  
// }


// export default App









































// const Part = (props) =>{
//   return (
//     <div>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </div>
//   )
// }

// const Header = (props) => {

//   return (
//     <div>
//       <h1>
//         {props.course}
//       </h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
    
//     <div>
//       <Part part = {props.part_1} exercises = {props.exercises_1}/>
//       <Part part = {props.part_2} exercises = {props.exercises_2}/>
//       <Part part = {props.part_3} exercises = {props.exercises_3}/> 
//     </div>

//   )

// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises {props.amount}
//       </p>
//     </div>
//   )

// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course = {course}/>

//       <Content part_1 = {part1} exercises_1 = {exercises1} 
//                 part_2 = {part2} exercises_2 = {exercises2}
//                  part_3 = {part3} exercises_3 = {exercises3}/>

//       <Total amount = {exercises1+exercises2+exercises3} />
//     </div>
//   )
// }

// export default App

                                                // Part 1.2 wörkkii




// import React from 'react'


// const Header = (props) => {

//   return (
//     <div>
//       <h1>
//         {props.course}
//       </h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </div>

//   )

// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises {props.amount}
//       </p>
//     </div>
//   )

// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course = {course}/>
//       <Content part = {part1} exercises = {exercises1}/>
//       <Content part = {part2} exercises = {exercises2}/>
//       <Content part = {part3} exercises = {exercises3}/>
//       <Total amount = {exercises1+exercises2+exercises3} />
//     </div>
//   )
// }

// export default App

                                                  // Part 1.1 works

                                                  // ctrl + * = kommentointi
