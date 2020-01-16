const combining = /[\u0300-\u036F]/g;

const fields = [
    'supervisor_firstname',
    'supervisor_lastname',
    'orgUnit',
    'orgUnitFull'
];

export function filterResolver(value, pattern){
    pattern = pattern.trim();
    for(let f of fields){
        if(valueIncludes(value[f], pattern)){
            return true;
        }
    }
    if(valueIncludes(`${value['supervisor_firstname']} ${value['supervisor_lastname']}`, pattern)){
        return true;
    }

    return false;
}

function valueIncludes(value, pattern){
    value = normalize(value).toLowerCase();
    pattern = normalize(pattern).toLowerCase();
    return value.includes(pattern);
}

function normalize(value) {
    return value.normalize('NFKD').replace(combining, '');
}
