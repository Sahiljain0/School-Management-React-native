// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import StudentAttendence from './StudentAttendence';

// function StudentAttendenceList() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

 

//   useEffect(() => {
//     // Simulate fetching student data from an API
//     // setTimeout(() => {
//     //   const initialStudents = [
//     //     { id: 1, name: 'John Doe', attendance: false },
//     //     { id: 2, name: 'Jany', attendance: false },
//     //     { id: 3, name: 'sahil', attendance: false },
//     //     { id: 4, name: 'shilpa', attendance: false },
//     //     { id: 5, name: 'vishal', attendance: false },
//     //     { id: 6, name: 'khusi', attendance: false },
//     //     { id: 7, name: 'mba saman', attendance: false },
//     //     { id: 8, name: 'gilli', attendance: false },
//     //     { id: 9, name: 'manni', attendance: false },
//     //     // Add more students as needed
//     //   ];

//     const getStudents = async ()=>{
//       try{
//         console.log("start");
//         const res = await fetch('http://192.168.129.69:5000/api/v1/Students');
//         // const res = await fetch('https://fakestoreapi.com/products/1');
//         const data = await res.json();
//         console.log(data[0].students)
//         setStudents(data[0].students);
//         setLoading(false);
//       }catch(err){
//         console.log("error aa gaya");
//         console.log(err);
//       }
//     }

//       getStudents();
//       // setStudents(initialStudents);
//       setLoading(false);
//     // }, 1000);
//   }, []);

//   const markAttendance = (studentId) => {
//     setStudents((prevStudents) =>
//       prevStudents.map((student) =>
//         student.id === studentId ? { ...student, attendance: !student.attendance } : student
//       )
//     );
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <StudentAttendence students={students} markAttendance={markAttendance} />
//       )}
//     </View>
//   );
// }

// export default StudentAttendenceList;


import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import StudentList from './StudentAttendence';

function StudentAttendenceList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStudents = async ()=>{
    try{
      console.log("start");
      const res = await fetch('http://192.168.129.69:5000/api/v1/Students');
      // const res = await fetch('https://fakestoreapi.com/products/1');
      const data = await res.json();
      console.log(data)
      setStudents(data);
      setLoading(false);
    }catch(err){
      console.log("error aa gaya");
      console.log(err);
    }
  }

  useEffect(() => {
    getStudents();  
  }, []);

  const markAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.student_id === studentId ? { ...student, attendance: !student.attendance } : student
      )
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <StudentList students={students} markAttendance={markAttendance} />
        // <Text> hii</Text>
      )}
    </View>
  );
}

export default StudentAttendenceList;
