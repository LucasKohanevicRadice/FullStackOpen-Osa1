import React from 'react'


const Course =({course}) => {

  const courseName = <h1>{course.name}</h1>
  const courseParts = course.parts.map(part => <p>{part.name} {part.exercises}</p> )
  const totalExercises = <p><strong>Number of total exercises {course.parts.reduce((totalSum, part) => totalSum + part.exercises, 0)}</strong></p>

  return (

    <div>
      {courseName}
      {courseParts}
      {totalExercises}
    </div>

  )

}

// const Course = ({courses}) => {

//     const constis = courses.map(course => course.parts.map(part => "<li>" + part.name + " " + part.exercises + "</li>"))
//     console.log(constis)


//     const everything = (
  
//       <div>
//         {courses.map((course) =>
//         <div key = {course.id}>
//           <h1>{course.name}</h1>


//           {course.parts.map((part) =>
//           <div key ={part.id}>
//             <p>{part.name} {part.exercises}</p>
//           </div>
//           )}


//           <p><strong>Number of total exercises {course.parts.reduce((totalSum, part) => totalSum + part.exercises, 0)}</strong></p>

//         </div>
//         )}
//       </div>

//     ) 
//       return (
//         <div>
//           {everything}
//         </div>
//       )

//   }

  export default Course

