export const createData = (form, model) =>{
    const data = {};
    model.map(m => {
      if (m.type !== "submit") {
        data[m.name] =  form[m.name].value || form[m.name].checked.toString();
      }
    });
    return data;
}