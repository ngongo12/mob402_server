
const students = [
    {id: 1, name: 'Nguyễn Văn A', phone: '00391939', classId: 1, dob: '2000-01-01'},
    {id: 2, name: 'Nguyễn Văn B', phone: '00391939', classId: 1, dob: '2000-01-01'},
    {id: 3, name: 'Nguyễn Văn C', phone: '00391939', classId: 1, dob: '2000-01-01'},
    {id: 4, name: 'Nguyễn Văn D', phone: '00391939', classId: 1, dob: '2000-01-01'}
]

exports.get = function getAllStudents() {
    
    return students;
}