import { Text } from "@chakra-ui/react";
//icons
import buildingIcon from "../public/statics/icons/trowel-bricks-solid.svg";
import waterIcon from "../public/statics/icons/water-solid.svg";
import roadIcon from "../public/statics/icons/road-solid.svg";
import truckIcon from "../public/statics/icons/truck-droplet-solid.svg";
import equipmentIcon from "../public/statics/icons/hammer-solid.svg";

const filler={
    title:"",
    content:"",
    id:'',
    icon:{src:"", alt:""}
  }

const servicesList = [
  {
    title: "Bulding",
    id: "building",
    icon: {
      src: buildingIcon,
      alt: "building and construction",
    },

    content: "We construct buildings for Private Institutions and Investors, Government and Residential houses across the board."
  
  },
  {
    title:
      "Water",
    id: "water",
    icon: { src: waterIcon, alt: "Water solutions" },
    content: "We do construction, installations and repairs of Water Supply Systems, Water Tanks and Sewerage Systems."
  },
  {
    title: "Roads",
    id: "roads",
    icon: { src: roadIcon, alt: "roads construction" },
    content: "We build roads inclusive of Murram and Weather Roads and Foot Paths",
  },
  filler,
  
  {
    title: "Supply of Construction Materials",
    id: "supply_of_construction_materials",
    icon: { src: truckIcon, alt: "supply of construction materials" },
    content: "With our well established supply systems, we supply an assortment of building materials."
  },
  {
    title: "Hire of Equipment & Machines",
    id: "hire_of_equipment_and_machines",
    icon: {
      src: equipmentIcon,
      alt: "hire of equipment and machinery",
    },
    content: "We source and hire-out any type of machinery and equipment as per the nature and the requirements of the job and the needs of the client."
  },

 
];

export default servicesList;
