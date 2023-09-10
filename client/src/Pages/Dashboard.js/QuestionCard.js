import React from 'react';

const QuestionCard = ({question}) => {
   
    const{email,message,d}=question
    return (
        <div class="flex justify-center ">
  <div class="block rounded-lg shadow-lg w-full bg-white max-w-sm text-center">
    <div class="py-3 px-6 border-b border-gray-300">
     Email: {email}
    </div>
    <div class="p-6">
      <p class="text-gray-700 text-xl mb-4">
        {message}
      </p>
     <a href={`mailto:${email}`}>
     <button type="button" class="btn btn-accent inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Send Reply</button>
     </a>
    </div>
    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
     Date: {d.split("T")[0]}
    </div>
  </div>
</div>
    );
};

export default QuestionCard;