import React from 'react';

const Card = () => {
  return (
    <div className="w-[400px] bg-white p-3 rounded-2x1 shadow dark:bg-slate-900">
      <div className="h-[250px] mb-5">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16378193/media/e9ad5ebe9dd6822be9ee622c7465d9e5.png?compress=1&resize=1200x900&vertical=top"
          alt="Card Image"
          className="object-cover w-full h-full rounded-x1"
        />
      </div>
      <div className="card-content">
        <h2 className="text-2xl font-bold text-black dark:text-white">Card Title</h2>
        <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <a className="cursor-pointer text-blue-500 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 
        bg-blue-500 dark:bg-blue-500 text-white dark:text-white px-4 py-2 rounded-xl inline-block mt-3 w-full text-center transition-all duration-300">Explore</a>
      </div>
    </div>
  );
};

export default Card;
