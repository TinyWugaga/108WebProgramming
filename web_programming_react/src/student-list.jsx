import React from 'react';
 
export default class StudentList extends React.Component{
     
    render() {
        const students = this.props.students

        return (
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {  students.map((student,i) =>
                            <tr key={i} >
                                <td>{student.student_id}</td>
                                <td>{student.student_name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}