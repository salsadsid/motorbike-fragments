import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import QuestionCard from './QuestionCard';

const Questions = () => {
    const navigate=useNavigate()
    const {
        data: questions,
        isLoading,
        refetch,
      } = useQuery("questions", () =>
        fetch(
          `https://motorbike-fragments.onrender.com/question`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },{retry:5}
        ).then((res) => {
          
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
            console.log(res.status);
          }
          return res.json();
        })
      );
      if (isLoading || !questions.result.length) {
        return <Loading></Loading>;
      }
      console.log(questions)
    return (
        <div>
            <h2 style={{ fontFamily: "'Gugi', monospace" }}
              className="text-xl text-center text-secondary my-3 border-b">Questions</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 my-10'>
                {
                    questions?.result?.map((question)=><QuestionCard
                    question={question}
                    ></QuestionCard>)
                }
            </div>
        </div>
    );
};

export default Questions;