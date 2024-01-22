import './FormRequest.css';

const FormRequest = ({ formData, setFormData, setOpenModal }) => {
  const handleChange = (event) => {
    if (event.target.name === 'recordNumber') {
      if (!isNaN(event.target.value)) {
        setFormData((prevState) => ({
          ...prevState,
          recordNumber: event.target.value,
        }));
      }
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [event.target.name]: event.target.value,
        };
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  return (
    <div className='form-requiest'>
      <h1 className='form-requiest_title'>استمارة طلب اجازة اعتيادية</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-requiest_form_container'>
          <div className='form-requiest_input'>
            <label htmlFor='name'>الاسم</label>
            <input
              type='text'
              id='name'
              name='name'
              autoComplete='off'
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='form-requiest_input'>
            <label htmlFor='request_date'>التاريخ</label>
            <input
              type='date'
              id='request_date'
              name='requestDate'
              required
              value={formData.requestDate}
              onChange={handleChange}
            />
          </div>

          <div className='form-requiest_input'>
            <label htmlFor='record_number'>رقم الحاسبة</label>
            <input
              type='text'
              id='record_number'
              name='recordNumber'
              autoComplete='off'
              value={formData.recordNumber}
              onChange={handleChange}
            />
          </div>

          <div className='form-requiest_input'>
            <label htmlFor='department'>القسم والشعبة</label>
            <input
              type='text'
              id='department'
              name='department'
              required
              autoComplete='off'
              value={formData.department}
              onChange={handleChange}
              disabled
            />
          </div>

          <div className='form-requiest_input'>
            <label htmlFor='job_title'>العنوان الوظيفي</label>
            <input
              type='text'
              id='job_title'
              name='jobTitle'
              autoComplete='off'
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>

          <div className='form-requiest_input'>
            <label htmlFor='leave_type'>نوع الاجازة</label>
            <input
              type='text'
              id='leave_type'
              name='leaveType'
              required
              value={formData.leaveType}
              onChange={handleChange}
              disabled
            />
          </div>

          <div className='form-requiest_input'>
            <label htmlFor='starting_date'>اعتباراً من</label>
            <input
              type='date'
              id='starting_date'
              name='startingDate'
              autoComplete='off'
              required
              value={formData.requestDate}
              onChange={handleChange}
            />
          </div>

          <div className='form-requiest_input'>
            <label htmlFor='duration'>المدة</label>
            <select
              name='duration'
              id='duration'
              value={formData.duration.toString()} // Convert to string
              onChange={handleChange}
            >
              {Array.from({ length: 30 }, (_, i) => (
                <option key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* INPUTS END */}
        </div>
        <button type='submit' className='form-requiest_btn'>
          تأييد
        </button>
      </form>
    </div>
  );
};

export default FormRequest;
