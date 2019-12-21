export const fieldController = {
    isReadonly,
    isEditable,
    getColorForVariance
}

function isReadonly(props){
    return ! isEditable(props);
}

function isEditable(props){
    return "editable" in props;
}

function getColorForVariance(props){
    return props.colorForVariance ? props.colorForVariance() : "black"
}