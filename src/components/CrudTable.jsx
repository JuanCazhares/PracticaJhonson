const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div style={{ display: "inline-grid" }}>
      <h3>Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            &nbsp;&nbsp;&nbsp;
            <th>Apellido</th>
            &nbsp;&nbsp;&nbsp;
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                &nbsp;&nbsp;&nbsp;
                <td>{item.lastName}</td>
                &nbsp;&nbsp;&nbsp;
                <td>
                  <button onClick={() => setDataToEdit(item)}>Editar</button>
                  <button onClick={() => deleteData(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={"3"}>No existen elementos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
