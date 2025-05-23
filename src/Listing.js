import React, { useState } from 'react';
import ListingItem from './ListingItem';
import { Pagination } from '@mui/material';
import './Listing.css';
import PaginationItem from '@mui/material/PaginationItem';


const items = [
    { id: 1, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Organic Cotton, fairtrade certified.', rating: 4, number:"121" },
    { id: 2, name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'A perfect balance of high-fidelity audio.', rating: 5, number:"121" },
    { id: 3, name: 'Base BT Earphones', price: '$289.00', image: "/basebt.png", description: 'Table with air puffer, staired veneer/black.', rating: 3, number:"121" },
    { id: 4, name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 , number:"121"},
    { id: 5, name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5, number:"121" },
    { id: 6, name: 'TAGRY Bluetooth', price: '$109.00', image: "/targy.png", description: 'Wireless headphones with long battery life.', rating: 4,number:"121"  },
    { id: 7, name: 'Monster MNFLEX', price: '$89.75', image: "/Monster.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 4 , number:"121"},
    { id: 8, name: 'Mpow CH6', price: '$289.00', image: "/Mpow.png", description: 'Kids Headphones.', rating: 3,number:"121" },
    { id: 9, name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 , number:"121"},
    { id: 10, name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5, number:"121" },
    { id: 11, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Waterproof wireless earbuds with great sound.', rating: 4, number:"121" },
    { id: 12, name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 5 ,number:"121"},
    { id: 13, name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 , number:"121"},
    { id: 14, name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5, number:"121" },
    { id: 15, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Waterproof wireless earbuds with great sound.', rating: 4, number:"121" },
    { id: 16, name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 5 ,number:"121"},
    { id: 17, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Organic Cotton, fairtrade certified.', rating: 4, number:"121" },
    { id: 18, name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'A perfect balance of high-fidelity audio.', rating: 5, number:"121" },
    { id: 19, name: 'Base BT Earphones', price: '$289.00', image: "/basebt.png", description: 'Table with air puffer, staired veneer/black.', rating: 3, number:"121" },
    { id: 20, name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 , number:"121"},
    { id: 21, name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5, number:"121" },
    { id: 22, name: 'TAGRY Bluetooth', price: '$109.00', image: "/targy.png", description: 'Wireless headphones with long battery life.', rating: 4,number:"121"  },
    { id: 23, name: 'Monster MNFLEX', price: '$89.75', image: "/Monster.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 4 , number:"121"},
    { id: 24, name: 'Mpow CH6', price: '$289.00', image: "/Mpow.png", description: 'Kids Headphones.', rating: 3,number:"121" },
    { id: 25, name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 , number:"121"},
    { id: 26, name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5, number:"121" },
    { id: 27, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Waterproof wireless earbuds with great sound.', rating: 4, number:"121" },
    { id: 28, name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 5 ,number:"121"},
    { id: 29, name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5, number:"121" },
    { id: 30, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Waterproof wireless earbuds with great sound.', rating: 4, number:"121" },
    { id: 31, name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 5 ,number:"121"},
    { id: 32, name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 , number:"121"},
    { id: 33, name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5, number:"121" },
    { id: 34, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Waterproof wireless earbuds with great sound.', rating: 4, number:"121" },
    { id: 35, name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 5 ,number:"121"},
    { id: 36, name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Organic Cotton, fairtrade certified.', rating: 4, number:"121" },
   
];

const Listing = () => {
   
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="listing">
            <div className='listing-header'>
                <h1>Headphones For You!</h1>
            </div>
            <div className="listing-container">
                {currentItems.map((item) => (
                    <ListingItem key={item.id} item={item} />
                ))}
            </div>
            
            {/* Pagination component */}
            <div className="pagination-wrapper">
    <Pagination
        count={Math.ceil(items.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        renderItem={(item) => (
            <PaginationItem
                {...item}
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    fontWeight: 'bold',
                    backgroundColor: item.selected ? '#003d29' : '#f5f5f5',
                    color: item.selected ? '#ffffff' : '#555',
                    border: item.type === 'next' ? '1px solid #003d29' : 'none',
                    '&:hover': {
                        backgroundColor: item.selected ? '#003d29' : '#e0e0e0',
                    },
                }}
            />
        )}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            gap: '10px',
        }}

                />
            </div>
        </div>
    );
};

export default Listing;