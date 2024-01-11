 import React, { useState } from "react";
function TodoItem(props) {
  const { job, hdlDel, hdlEdit } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(job.todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    hdlEdit(job.id, editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(job.todo);
  };

  const handleDelete = () => {
    hdlDel(job.id);
  };

  return (
    <div className="flex items-center justify-between py-4 px-4">
      {isEditing ? (
        <div>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSaveEdit}>
            Save
          </button>
          <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p className="flex-1">{job.todo}</p>
          <div className="flex items-center">
            <a onClick={handleEdit} className="mr-2 text-blue-500 hover:underline">Edit</a>
            <a onClick={handleDelete} className="text-red-500 hover:underline">Delete</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
