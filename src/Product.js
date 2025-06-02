import React, { useState, useEffect } from "react";
import './Product.css';
import { useParams,useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const productDatabase = {
  1: {
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
  2: {
    name: 'Airpods Max',
    price: '$559.00',
    images: {
      Pink: { image: "pinkairpods.png", hex: "#f4b5c2" },
      Green: { image: "greenairpods.png", hex: "#a2c3a4" },
      Black: { image: "blackairpods.png", hex: "#444" },
      Blue: { image: "blueairpods.png", hex: "#c7d5f3" },
      Silver: { image: "greyairpods.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Apple',
    model: 'AirPods Max',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
  3: {
    name: 'Base BT Earphones',
    price: '$289.00',
    images: {
      Pink: { image: "basebt.png", hex: "#f4b5c2" },
      Green: { image: "basebt.png", hex: "#a2c3a4" },
      Black: { image: "basebt.png", hex: "#444" },
      Blue: { image: "basebt.png", hex: "#c7d5f3" },
      Silver: { image: "basebt.png", hex: "#d0d0d0" }
    },
    description: 'Table with air puffer, staired veneer/black.',
    rating: 5,
    reviews: 121,
    brand: 'Basebt',
    model: 'Base T Earphpones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
  4: {
    name: 'Vivefox Headphones',
    price: '$39.00',
    images: {
      Pink: { image: "Vivefox.png", hex: "#f4b5c2" },
      Green: { image: "Vivefox.png", hex: "#a2c3a4" },
      Black: { image: "Vivefox.png", hex: "#444" },
      Blue: { image: "Vivefox.png", hex: "#c7d5f3" },
      Silver: { image: "Vivefox.png", hex: "#d0d0d0" }
    },
    description: 'Wired Stereo Headsets With Mic.',
    rating: 4,
    reviews: 121,
    brand: 'Vivefox',
    model: 'Vivefox Headphones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
  5: {
    name: 'JBL TUNE 600BTNC',
    price: '$59.00',
    images: {
      Pink: { image: "JBL.png", hex: "#f4b5c2" },
      Green: { image: "JBL.png", hex: "#a2c3a4" },
      Black: { image: "JBL.png", hex: "#444" },
      Blue: { image: "JBL.png", hex: "#c7d5f3" },
      Silver: { image: "JBL.png", hex: "#d0d0d0" }
    },
    description: 'Premium Bone Conduction Open Ear Bluetooth.',
    rating: 5,
    reviews: 121,
    brand: 'JBL',
    model: 'JBL TUNE 600BTNC',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
  6: {
    name: 'TAGRY Bluetooth',
    price: '$109.00',
    images: {
      Pink: { image: "targy.png", hex: "#f4b5c2" },
      Green: { image: "targy.png", hex: "#a2c3a4" },
      Black: { image: "targy.png", hex: "#444" },
      Blue: { image: "targy.png", hex: "#c7d5f3" },
      Silver: { image: "targy.png", hex: "#d0d0d0" }
    },
    description: 'Wireless headphones with long battery life.',
    rating: 5,
    reviews: 127,
    brand: 'Targy',
    model: 'TAGRY Bluetooth',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
  7: {
    name: 'Monster MNFLEX',
    price: '$89.75',
    images: {
      Pink: { image: "Monster.png", hex: "#f4b5c2" },
      Green: { image: "Monster.png", hex: "#a2c3a4" },
      Black: { image: "Monster.png", hex: "#444" },
      Blue: { image: "Monster.png", hex: "#c7d5f3" },
      Silver: { image: "Monster.png", hex: "#d0d0d0" }
    },
    description: 'Flex Active Noise Cancelling Bluetooth.',
    rating: 4,
    reviews: 127,
    brand: 'Monster',
    model: 'Monster MNFLEX',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
  8: {
    name: 'Mpow CH6',
    price: '$559.00',
    images: {
      Pink: { image: "Mpow.png", hex: "#f4b5c2" },
      Green: { image: "Mpow.png", hex: "#a2c3a4" },
      Black: { image: "Mpow.png", hex: "#444" },
      Blue: { image: "Mpow.png", hex: "#c7d5f3" },
      Silver: { image: "Mpow.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Mpow',
    model: 'Mpow CH6',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   9: {
    name: 'Vivefox Headphones',
    price: '$39.00',
    images: {
      Pink: { image: "Vivefox.png", hex: "#f4b5c2" },
      Green: { image: "Vivefox.png", hex: "#a2c3a4" },
      Black: { image: "Vivefox.png", hex: "#444" },
      Blue: { image: "Vivefox.png", hex: "#c7d5f3" },
      Silver: { image: "Vivefox.png", hex: "#d0d0d0" }
    },
    description: 'Wired Stereo Headsets With Mic.',
    rating: 4,
    reviews: 121,
    brand: 'Vivefox',
    model: 'Vivefox Headphones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   10:{
    name: 'JBL TUNE 600BTNC',
    price: '$59.00',
    images: {
      Pink: { image: "JBL.png", hex: "#f4b5c2" },
      Green: { image: "JBL.png", hex: "#a2c3a4" },
      Black: { image: "JBL.png", hex: "#444" },
      Blue: { image: "JBL.png", hex: "#c7d5f3" },
      Silver: { image: "JBL.png", hex: "#d0d0d0" }
    },
    description: 'Premium Bone Conduction Open Ear Bluetooth.',
    rating: 5,
    reviews: 121,
    brand: 'JBL',
    model: 'JBL TUNE 600BTNC',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   11 :{
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
   12: {
    name: 'Airpods Max',
    price: '$559.00',
    images: {
      Pink: { image: "pinkairpods.png", hex: "#f4b5c2" },
      Green: { image: "greenairpods.png", hex: "#a2c3a4" },
      Black: { image: "blackairpods.png", hex: "#444" },
      Blue: { image: "blueairpods.png", hex: "#c7d5f3" },
      Silver: { image: "greyairpods.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Apple',
    model: 'AirPods Max',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   13: {
    name: 'Vivefox Headphones',
    price: '$39.00',
    images: {
      Pink: { image: "Vivefox.png", hex: "#f4b5c2" },
      Green: { image: "Vivefox.png", hex: "#a2c3a4" },
      Black: { image: "Vivefox.png", hex: "#444" },
      Blue: { image: "Vivefox.png", hex: "#c7d5f3" },
      Silver: { image: "Vivefox.png", hex: "#d0d0d0" }
    },
    description: 'Wired Stereo Headsets With Mic.',
    rating: 4,
    reviews: 121,
    brand: 'Vivefox',
    model: 'Vivefox Headphones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   14:{
    name: 'JBL TUNE 600BTNC',
    price: '$59.00',
    images: {
      Pink: { image: "JBL.png", hex: "#f4b5c2" },
      Green: { image: "JBL.png", hex: "#a2c3a4" },
      Black: { image: "JBL.png", hex: "#444" },
      Blue: { image: "JBL.png", hex: "#c7d5f3" },
      Silver: { image: "JBL.png", hex: "#d0d0d0" }
    },
    description: 'Premium Bone Conduction Open Ear Bluetooth.',
    rating: 5,
    reviews: 121,
    brand: 'JBL',
    model: 'JBL TUNE 600BTNC',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
  15:{
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
   16: {
    name: 'Airpods Max',
    price: '$559.00',
    images: {
      Pink: { image: "pinkairpods.png", hex: "#f4b5c2" },
      Green: { image: "greenairpods.png", hex: "#a2c3a4" },
      Black: { image: "blackairpods.png", hex: "#444" },
      Blue: { image: "blueairpods.png", hex: "#c7d5f3" },
      Silver: { image: "greyairpods.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Apple',
    model: 'AirPods Max',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   
   17: {
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
   18: {
    name: 'Airpods Max',
    price: '$559.00',
    images: {
      Pink: { image: "pinkairpods.png", hex: "#f4b5c2" },
      Green: { image: "greenairpods.png", hex: "#a2c3a4" },
      Black: { image: "blackairpods.png", hex: "#444" },
      Blue: { image: "blueairpods.png", hex: "#c7d5f3" },
      Silver: { image: "greyairpods.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Apple',
    model: 'AirPods Max',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   19: {
    name: 'Base BT Earphones',
    price: '$289.00',
    images: {
      Pink: { image: "basebt.png", hex: "#f4b5c2" },
      Green: { image: "basebt.png", hex: "#a2c3a4" },
      Black: { image: "basebt.png", hex: "#444" },
      Blue: { image: "basebt.png", hex: "#c7d5f3" },
      Silver: { image: "basebt.png", hex: "#d0d0d0" }
    },
    description: 'Table with air puffer, staired veneer/black.',
    rating: 5,
    reviews: 121,
    brand: 'Basebt',
    model: 'Base T Earphpones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   20: {
    name: 'Vivefox Headphones',
    price: '$39.00',
    images: {
      Pink: { image: "Vivefox.png", hex: "#f4b5c2" },
      Green: { image: "Vivefox.png", hex: "#a2c3a4" },
      Black: { image: "Vivefox.png", hex: "#444" },
      Blue: { image: "Vivefox.png", hex: "#c7d5f3" },
      Silver: { image: "Vivefox.png", hex: "#d0d0d0" }
    },
    description: 'Wired Stereo Headsets With Mic.',
    rating: 4,
    reviews: 121,
    brand: 'Vivefox',
    model: 'Vivefox Headphones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   21:{
    name: 'JBL TUNE 600BTNC',
    price: '$59.00',
    images: {
      Pink: { image: "JBL.png", hex: "#f4b5c2" },
      Green: { image: "JBL.png", hex: "#a2c3a4" },
      Black: { image: "JBL.png", hex: "#444" },
      Blue: { image: "JBL.png", hex: "#c7d5f3" },
      Silver: { image: "JBL.png", hex: "#d0d0d0" }
    },
    description: 'Premium Bone Conduction Open Ear Bluetooth.',
    rating: 5,
    reviews: 121,
    brand: 'JBL',
    model: 'JBL TUNE 600BTNC',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   22: {
    name: 'TAGRY Bluetooth',
    price: '$109.00',
    images: {
      Pink: { image: "targy.png", hex: "#f4b5c2" },
      Green: { image: "targy.png", hex: "#a2c3a4" },
      Black: { image: "targy.png", hex: "#444" },
      Blue: { image: "targy.png", hex: "#c7d5f3" },
      Silver: { image: "targy.png", hex: "#d0d0d0" }
    },
    description: 'Wireless headphones with long battery life.',
    rating: 5,
    reviews: 127,
    brand: 'Targy',
    model: 'TAGRY Bluetooth',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   23:  {
    name: 'Monster MNFLEX',
    price: '$89.75',
    images: {
      Pink: { image: "Monster.png", hex: "#f4b5c2" },
      Green: { image: "Monster.png", hex: "#a2c3a4" },
      Black: { image: "Monster.png", hex: "#444" },
      Blue: { image: "Monster.png", hex: "#c7d5f3" },
      Silver: { image: "Monster.png", hex: "#d0d0d0" }
    },
    description: 'Flex Active Noise Cancelling Bluetooth.',
    rating: 4,
    reviews: 127,
    brand: 'Monster',
    model: 'Monster MNFLEX',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   24: {
    name: 'Mpow CH6',
    price: '$559.00',
    images: {
      Pink: { image: "Mpow.png", hex: "#f4b5c2" },
      Green: { image: "Mpow.png", hex: "#a2c3a4" },
      Black: { image: "Mpow.png", hex: "#444" },
      Blue: { image: "Mpow.png", hex: "#c7d5f3" },
      Silver: { image: "Mpow.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Mpow',
    model: 'Mpow CH6',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   25:  {
    name: 'Vivefox Headphones',
    price: '$39.00',
    images: {
      Pink: { image: "Vivefox.png", hex: "#f4b5c2" },
      Green: { image: "Vivefox.png", hex: "#a2c3a4" },
      Black: { image: "Vivefox.png", hex: "#444" },
      Blue: { image: "Vivefox.png", hex: "#c7d5f3" },
      Silver: { image: "Vivefox.png", hex: "#d0d0d0" }
    },
    description: 'Wired Stereo Headsets With Mic.',
    rating: 4,
    reviews: 121,
    brand: 'Vivefox',
    model: 'Vivefox Headphones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   26: {
    name: 'JBL TUNE 600BTNC',
    price: '$59.00',
    images: {
      Pink: { image: "JBL.png", hex: "#f4b5c2" },
      Green: { image: "JBL.png", hex: "#a2c3a4" },
      Black: { image: "JBL.png", hex: "#444" },
      Blue: { image: "JBL.png", hex: "#c7d5f3" },
      Silver: { image: "JBL.png", hex: "#d0d0d0" }
    },
    description: 'Premium Bone Conduction Open Ear Bluetooth.',
    rating: 5,
    reviews: 121,
    brand: 'JBL',
    model: 'JBL TUNE 600BTNC',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   27: {
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
   28: {
    name: 'Airpods Max',
    price: '$559.00',
    images: {
      Pink: { image: "pinkairpods.png", hex: "#f4b5c2" },
      Green: { image: "greenairpods.png", hex: "#a2c3a4" },
      Black: { image: "blackairpods.png", hex: "#444" },
      Blue: { image: "blueairpods.png", hex: "#c7d5f3" },
      Silver: { image: "greyairpods.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Apple',
    model: 'AirPods Max',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   29:{
    name: 'JBL TUNE 600BTNC',
    price: '$59.00',
    images: {
      Pink: { image: "JBL.png", hex: "#f4b5c2" },
      Green: { image: "JBL.png", hex: "#a2c3a4" },
      Black: { image: "JBL.png", hex: "#444" },
      Blue: { image: "JBL.png", hex: "#c7d5f3" },
      Silver: { image: "JBL.png", hex: "#d0d0d0" }
    },
    description: 'Premium Bone Conduction Open Ear Bluetooth.',
    rating: 5,
    reviews: 121,
    brand: 'JBL',
    model: 'JBL TUNE 600BTNC',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   30: {
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
   31: {
    name: 'Airpods Max',
    price: '$559.00',
    images: {
      Pink: { image: "pinkairpods.png", hex: "#f4b5c2" },
      Green: { image: "greenairpods.png", hex: "#a2c3a4" },
      Black: { image: "blackairpods.png", hex: "#444" },
      Blue: { image: "blueairpods.png", hex: "#c7d5f3" },
      Silver: { image: "greyairpods.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Apple',
    model: 'AirPods Max',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   32:{
    name: 'Vivefox Headphones',
    price: '$39.00',
    images: {
      Pink: { image: "Vivefox.png", hex: "#f4b5c2" },
      Green: { image: "Vivefox.png", hex: "#a2c3a4" },
      Black: { image: "Vivefox.png", hex: "#444" },
      Blue: { image: "Vivefox.png", hex: "#c7d5f3" },
      Silver: { image: "Vivefox.png", hex: "#d0d0d0" }
    },
    description: 'Wired Stereo Headsets With Mic.',
    rating: 4,
    reviews: 121,
    brand: 'Vivefox',
    model: 'Vivefox Headphones',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   33:{
    name: 'JBL TUNE 600BTNC',
    price: '$59.00',
    images: {
      Pink: { image: "JBL.png", hex: "#f4b5c2" },
      Green: { image: "JBL.png", hex: "#a2c3a4" },
      Black: { image: "JBL.png", hex: "#444" },
      Blue: { image: "JBL.png", hex: "#c7d5f3" },
      Silver: { image: "JBL.png", hex: "#d0d0d0" }
    },
    description: 'Premium Bone Conduction Open Ear Bluetooth.',
    rating: 5,
    reviews: 121,
    brand: 'JBL',
    model: 'JBL TUNE 600BTNC',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   34: {
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
   35: {
    name: 'Airpods Max',
    price: '$559.00',
    images: {
      Pink: { image: "pinkairpods.png", hex: "#f4b5c2" },
      Green: { image: "greenairpods.png", hex: "#a2c3a4" },
      Black: { image: "blackairpods.png", hex: "#444" },
      Blue: { image: "blueairpods.png", hex: "#c7d5f3" },
      Silver: { image: "greyairpods.png", hex: "#d0d0d0" }
    },
    description: 'A perfect balance of high-fidelity audio.',
    rating: 5,
    reviews: 127,
    brand: 'Apple',
    model: 'AirPods Max',
    weight: '384.8 grams',
    dimensions: '6.64 x 3.28 x 7.37 inches',
    material: 'Aluminum, Stainless Steel',
    batteryLife: 'Up to 20 hours',
    noiseCancellation: 'Active',
    bluetooth: 'Version 5.0',
    microphones: 8,
    warranty: '1 Year',
    waterResistance: 'Sweat resistant'
  },
   36:  {
    name: 'Wireless Earbuds, IPXB',
    price: '$89.00',
    images: {
      Pink: { image: "ipx8.png", hex: "#f4b5c2" },
      Green: { image: "ipx8.png", hex: "#a2c3a4" },
      Black: { image: "ipx8.png", hex: "#444" },
      Blue: { image: "ipx8.png", hex: "#c7d5f3" },
      Silver: { image: "ipx8.png", hex: "#d0d0d0" }
    },
    description: 'Organic Cotton, fairtrade certified.',
    rating: 4,
    reviews: 121,
    brand: 'Generic',
    model: 'IPXB',
    weight: '50 grams',
    dimensions: '2 x 2 x 1 inches',
    material: 'Plastic',
    batteryLife: 'Up to 8 hours',
    noiseCancellation: 'Passive',
    bluetooth: 'Version 5.0',
    microphones: 2,
    warranty: '6 months',
    waterResistance: 'IPX8'
  },
     
  



};
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data based on ID
    const foundProduct = productDatabase[id];
    if (foundProduct) {
      setProduct(foundProduct);
      // Set the first color as default
      const firstColor = Object.keys(foundProduct.images)[0];
      setSelectedColor({
        name: firstColor,
        hex: foundProduct.images[firstColor].hex,
        image: foundProduct.images[firstColor].image
      });
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const colors = Object.entries(product.images).map(([name, data]) => ({
    name,
    hex: data.hex,
    image: data.image
  }));

  const specifications = [
    [
      { name: "Brand", value: product.brand },
      { name: "Model", value: product.model },
      { name: "Color", value: selectedColor?.name || '' },
      { name: "Weight", value: product.weight },
      { name: "Dimensions", value: product.dimensions },
      { name: "Material", value: product.material },
      { name: "Battery Life", value: product.batteryLife },
    ],
    [
      { name: "Noise Cancellation", value: product.noiseCancellation },
      { name: "Bluetooth", value: product.bluetooth },
      { name: "Microphones", value: product.microphones },
      { name: "Warranty", value: product.warranty },
      { name: "Water Resistance", value: product.waterResistance },
    ]
  ];
  const handleQuantityChange = (type) => {
    setQuantity(prev => type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };


  const renderRating = () => {
    return Array(5).fill().map((_, i) => (
      <StarIcon key={i} style={{ color: '#ffb400', fontSize: '1.2rem' }} />
    ));
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  

  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-grid">
          <div className="product-image-section">
            {selectedColor && (
              <img
                // src={selectedColor.image} // Updated path
                src={`/${selectedColor.image}`}
                alt={`${product.name} in ${selectedColor.name}`}
                className="product-image"
                // onError={(e) => {
                //   e.target.src = '/images/placeholder.png'; // Fallback image
                // }}
              />
            )}
            <div className="color-selector">
              <p className="color-label">Color: {selectedColor?.name}</p>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-swatch ${
                      selectedColor?.name === color.name ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleColorSelect(color)}
                  />
                ))}
              </div>
            </div>
          </div>

          
          <div className="product-details-section">
           <h1 className="product-title">{product.name} - {selectedColor.name}</h1>
           <p className="product-price">{product.price}</p>
           <p className="product-rating">
           {renderRating()} ({product.reviews} reviews)
           </p>
            
            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="quantity-selector">
              <label htmlFor="quantity" className="quantity-label">Quantity</label>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange("decrement")}
                  aria-label="Decrease quantity"
                >
                  <RemoveIcon style={{ fontSize: '1rem' }} />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange("increment")}
                  aria-label="Increase quantity"
                >
                  <AddIcon style={{ fontSize: '1rem' }} />
                </button>
              </div>
            </div>

            <p className="stock-info">
              {quantity > 5 
                ? "In Stock" 
                : `Only ${12 - quantity} left! Don't miss it.`}
            </p>

            <div className="action-buttons">
              <button 
              onClick={() => navigate("/buy", { state: { quantity, color: selectedColor.name } })}
              className="buy-now-button"
              >
              Buy Now
              </button>
              <button 
                onClick={handleAddToCart}
                className={`add-to-cart-button ${isAddingToCart ? "adding" : ""}`}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? "Added!" : "Add to Cart"}
              </button>
            </div>

            <div className="delivery-info">
              <div className="delivery-item">
                <LocalShippingIcon style={{ fontSize: '1.2rem', color: '#555' }} />
                <span>Free Delivery: Enter postal code for availability</span>
              </div>
              <div className="delivery-item">
                <AssignmentReturnIcon style={{ fontSize: '1.2rem', color: '#555' }} />
                <span>Free 30-day returns</span>
              </div>
            </div>

            
            <div className="specs-table-container">
              <h3 className="specs-table-title">Product Specifications</h3>
              <div className="specs-table">
                {specifications.map((column, colIndex) => (
                  <div key={colIndex} className="specs-column">
                    {column.map((spec, index) => (
                      <div key={index} className="spec-row">
                        <div className="spec-name">{spec.name}</div>
                        <div className="spec-value">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;