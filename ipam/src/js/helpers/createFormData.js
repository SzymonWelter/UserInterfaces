export const createFormData = (form, model) =>{
    const formData = new FormData();
    model.map(m => {
      if (m.type !== "submit") {
        formData.append(m.name, form[m.name].value || form[m.name].checked);
      }
    });
    return formData;
}