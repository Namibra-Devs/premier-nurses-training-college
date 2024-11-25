const FinalSubmit = ({ onSubmit }) => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Submit Application</h2>
      <p>Please review your application before submission.</p>
      <button onClick={onSubmit} className="bg-green-500 text-white py-2 px-4 mt-4 rounded">
        Submit Application
      </button>
    </div>
  );
  
  export default FinalSubmit;
  