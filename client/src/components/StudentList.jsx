
// client/src/components/StudentList.js
import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="row">
      {students.map(student => (
        <div key={student._id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">{student.name}</h5>
                <h5 className="card-title">{student.fatherName}</h5>
              <p className="card-text text-muted small">
                Added: {new Date(student.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;