

import { directorType } from "@/type/componentsType"

export default function about() {


  const studentList: directorType[] = [
    { id: 1, name: 'John Doe', gender: 'Male', maths: 90, physics: 85, english: 95 },
    { id: 2, name: 'Jane Doe', gender: 'Female', maths: 92, physics: 88, english: 94 },
    { id: 3, name: 'Bob Smith', gender: 'Female', maths: 78, physics: 82, english: 70 },
    { id: 4, name: 'Alice Johnson', gender: 'Male', maths: 92, physics: 88, english: 95 },
    { id: 5, name: 'Charlie Brown', gender: 'Female', maths: 85, physics: 79, english: 88 },
    { id: 6, name: 'Eva Williams', gender: 'Female', maths: 70, physics: 75, english: 68 },
    { id: 7, name: 'Frank Martin', gender: 'Male', maths: 82, physics: 85, english: 90 },
    { id: 8, name: 'Grace Davis', gender: 'Female', maths: 95, physics: 93, english: 98 },
    { id: 9, name: 'Henry Miller', gender: 'Male', maths: 88, physics: 82, english: 75 },
    { id: 10, name: 'Ivy White', gender: 'Female', maths: 78, physics: 80, english: 85 },
  ]


  const listOfDirectors = ["Ayesha", "Fatima", "Saman", "Rimsha"]



  return (
    <div>
      <h1>List of Students </h1>
      {studentList.map((student, index) => {
        return (
          <div className="bg-gray-200 p-4 m-2 rounded-md">
            <h2 className="text-xl font-bold">{student.name}</h2>

            <p>Gender: {student.gender}</p>
            <p>Math: {student.maths}</p>
            <p>Physics: {student.physics}</p>
            <p>English: {student.english}</p>
          </div>

        )

      })}


      {/* How to save data in singular form */}
      <div>
        <h1>List of director</h1>
        <h2>1 - {listOfDirectors[0]}</h2>
        <h2>2 - {listOfDirectors[1]}</h2>
        <h2>3 - {listOfDirectors[2]}</h2>
      </div>

      <div>
        {/* How to save all list data */}
        {listOfDirectors.map((item, index) => {
          return (
            <h2>{index + 1} - {item}</h2>
          )
        })}
     </div>

    </div>
  )
}