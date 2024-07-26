interface Student{
    stName: string;
    student_id: number
}

interface Teacher{
    name: string;
    teacher_id: number
}

type intersected_type = Student & Teacher

let obj1: intersected_type = {
    stName: "Ahmed",
    student_id: 123,
    name: "Fahad",
    teacher_id: 987
};

console.log(obj1.stName); // Ahmed

console.log(obj1.teacher_id); // 987

