const station = {
    id: "",
    geolocation: {
        lat: "",
        long: ""
    },
    name: "",
    vehicle: [], //vehicle ID
    active:  "", //true or false
    connectedWith: [] //station ID
};

const vehicle = {
    id: "",
    type: "",
    active: "" //true or false
};

const vehicleTypes = [
    {id: "", name: "bus"},
    {id: "", name: "minibus"},
    {id: "", name: "train"},
    {id: "", name: "car"},
    {id: "", name: "airplane"},
    {id: "", name: "ship"}
];

const area = {
    id: "",
    geolocation: { //location center and area radius and area unit
        lat: "",
        long: "",
        radius: "",
        unit: ""
    },
    name: "",
    parentArea: "",
    childAreas: []
}
