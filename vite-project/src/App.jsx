import React, { use } from 'react';

const App = () => {

  const{
    register,
    handleSubmit,
    formState: { errors },
  }=useForm()

  return (
    <div>
      <form>
        <div>
        <label>First Name</label>
        <input {...register('firstname')} />
        </div>
      </form>
    </div>
  );
};

export default App;
