const EducationList = ({ educations, onEdit, onDelete }) => (
    <ul className="space-y-2">
      {educations.map((edu, index) => (
        <li key={index} className="flex justify-between items-center">
          <div>
            <p>{edu.schoolName}</p>
            <p>{edu.from} - {edu.to}</p>
          </div>
          <div className="space-x-2">
            <button onClick={() => onEdit(index)} className="text-blue-500">Edit</button>
            <button onClick={() => onDelete(index)} className="text-red-500">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
  
  export default EducationList;
  