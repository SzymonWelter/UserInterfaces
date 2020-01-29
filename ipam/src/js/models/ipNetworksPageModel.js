export default [
    { name: "network", title: "network", type: "text", class: "" },
    { name: "mask", title: "mask", type: "text", class: "" },
    { name: "description", title: "description", type: "text", class: "" },
    { name: "vlan", title: "vlan", type: "text", class: "" },
    { name: "nameservers", title: "nameservers", type: "text", class: "" },
    { name: "location", title: "location", type: "text", class: "" },
    { name: "routable", title: "routable", type: "text", class: "" },
    { name: "public", title: 'public', type:'checkbox', class: ''},
    { name: 'dynamic', title: 'dynamic', type:'checkbox', class: ''},
    {
        name: "submit",
        type: "submit",
        class: "form-input--submit",
        value: "Add ip network"
    }
];