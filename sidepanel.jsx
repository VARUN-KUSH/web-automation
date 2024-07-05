import { useState } from "react"
import './side.css';

// function IndexSidePanel() {
//     const [rows, setRows] = useState([]);
//     const [numRows, setNumRows] = useState(0);

//     const handleAddRow = () => {
//         setRows([...rows, { name: '', phone: '', email: '', comments: '' }]);
//     };

//     const handleAddMultipleRows = () => {
//         const newRows = Array.from({ length: numRows }, () => ({ name: '', phone: '', email: '', comments: '' }));
//         setRows([...rows, ...newRows]);
//         setNumRows(0);
//     };

//     const handleChange = (index, field, value) => {
//         const newRows = [...rows];
//         newRows[index][field] = value;
//         setRows(newRows);
//     };

//     return (
//         <div className="excel-component">
//             <div className="controls">
//                 <button onClick={handleAddRow}>Add Row</button>
//                 <input 
//                     type="number" 
//                     value={numRows} 
//                     onChange={(e) => setNumRows(e.target.value)} 
//                     placeholder="Number of rows" 
//                 />
//                 <button onClick={handleAddMultipleRows}>Add Multiple Rows</button>
//             </div>
//             <table className="excel-table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Comments</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows.map((row, index) => (
//                         <tr key={index}>
//                             <td><input type="text" value={row.name} onChange={(e) => handleChange(index, 'name', e.target.value)} /></td>
//                             <td><input type="text" value={row.phone} onChange={(e) => handleChange(index, 'phone', e.target.value)} /></td>
//                             <td><input type="text" value={row.email} onChange={(e) => handleChange(index, 'email', e.target.value)} /></td>
//                             <td><input type="text" value={row.comments} onChange={(e) => handleChange(index, 'comments', e.target.value)} /></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default IndexSidePanel


import React, { useState } from 'react';
// import './ExcelComponent.css';
import { Storage } from "@plasmohq/storage"
// import ErrorBoundary from './ErrorBoundary';


const ExcelComponent = () => {
const storage = new Storage()

 
    
    const [rows, setRows] = useState([]);
    const [numRows, setNumRows] = useState(0);
    const [editIndex, setEditIndex] = useState(null);
    

    const handleAddRow = () => {
        setRows([...rows, { name: '', phone: '', email: '', comments: '', isEditing: false }]);
    };

    const handleAddMultipleRows = () => {
        const newRows = Array.from({ length: numRows }, () => ({ name: '', phone: '', email: '', comments: '', isEditing: false }));
        setRows([...rows, ...newRows]);
        setNumRows(0);
    };

    const handleChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        const newRows = [...rows];
        newRows[index].isEditing = true;
        setRows(newRows);
    };

    const handleSave = (index) => {
        setEditIndex(null);
        const newRows = [...rows];
        newRows[index].isEditing = false;
        setRows(newRows);
    };

    const handleRemove = (index) => {
        const newRows = rows.filter((row, i) => i !== index);
        setRows(newRows);
    };

    const handleSaveToLocalStorage = async() => {
        console.log(rows)
        await storage.set("usersdata", rows)
        alert('Data saved to local storage!');
    };

    return (
        
        <div className="excel-component">
            <div className="controls">
                <button onClick={handleAddRow}>Add Row</button>
                <input 
                    type="number" 
                    value={numRows} 
                    onChange={(e) => setNumRows(e.target.value)} 
                    placeholder="Number of rows" 
                />
                <button onClick={handleAddMultipleRows}>Add Multiple Rows</button>
                <button onClick={handleSaveToLocalStorage}>Save to Local Storage</button>
               
            </div>
            <table className="excel-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <input 
                                    type="text" 
                                    value={row.name} 
                                    onChange={(e) => handleChange(index, 'name', e.target.value)} 
                                    disabled={!row.isEditing}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    value={row.phone} 
                                    onChange={(e) => handleChange(index, 'phone', e.target.value)} 
                                    disabled={!row.isEditing}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    value={row.email} 
                                    onChange={(e) => handleChange(index, 'email', e.target.value)} 
                                    disabled={!row.isEditing}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    value={row.comments} 
                                    onChange={(e) => handleChange(index, 'comments', e.target.value)} 
                                    disabled={!row.isEditing}
                                />
                            </td>
                            <td>
                                {row.isEditing ? (
                                    <button onClick={() => handleSave(index)}>Save</button>
                                ) : (
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                )}
                                <button onClick={() => handleRemove(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExcelComponent;
