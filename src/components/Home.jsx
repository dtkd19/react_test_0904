import React from 'react';
import Student from './Student';
import { friends, student, students } from '../data/data';
import Student2 from './Student2';
import Friend from './Friend';
import Test4 from './Test4';
const Home = () => {

    // home.jsx 에서 데이터를 => Student로 전달
    // props : properties의 약어
    // 부모(상위) 컴포넌트에서 자식(하위) 컴포넌트로 파라미터를 전달


    return (
        <div className='home'>
            {/* <div>Home.jcx Area</div> */}
            <Test4  name="react" color ="red"/>
            <Test4  color ="red"/>
            <hr />
            <Student />
            <hr />
            <Student2 std={student} />
            <hr />
            {/* students 배열중 객체 1개를(s) 뽑아 Student2 std ={s} */}

            {
                 students.map(s => (
                    <Student2 std={s} />
                ))
            }

            <hr />
            <h1>Friends List</h1>
            {/* friend 컴포넌트를 생성하여 데이터를 표현 */}
            {
                friends.map(f => (
                    <Friend frd ={f} />
                ))
            }

        </div>
    );
};

export default Home;