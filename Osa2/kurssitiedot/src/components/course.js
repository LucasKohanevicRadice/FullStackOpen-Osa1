import React from 'react'


const Course = ({courses}) => {

    const everything = (
      
      <div>
        {courses.map((course) =>
        <div key = {course.id}>
          <h1>{course.name}</h1>

          {course.parts.map((part) =>
          <div key ={part.id}>
            <p>{part.name} {part.exercises}</p>
          </div>
          )}
        </div>
        )}
      </div>

    ) 
      return (
        <div>
          {everything}
        </div>
      )

  }

  export default Course

