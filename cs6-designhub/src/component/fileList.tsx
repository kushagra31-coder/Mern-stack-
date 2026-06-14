import { useDesignHubStore } from '../store';

const FileList: React.FC = () => {
  const files = useDesignHubStore(s => s.files);
  const addFile = useDesignHubStore(s => s.addFile);
  const removeFile = useDesignHubStore(s => s.removeFile);
  const addNotification = useDesignHubStore(
    s => s.addNotification
  );

  const handleAddFile = () => {
    const newFile = {
      id: Date.now().toString(),
      name: `Design ${files.length + 1}`,
      content: ''
    };
    addFile(newFile);
    addNotification(`New file "${newFile.name}" created!`);
  };

  return (
    <div>
      <h2>Design Files</h2>
      <button onClick={handleAddFile}>Add File</button>
      {files.length === 0 && <p>No files yet!</p>}
      <ul>
        {files.map(file => (
          <li key={file.id}>
            <span>{file.name}</span>
            <button onClick={() => removeFile(file.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;