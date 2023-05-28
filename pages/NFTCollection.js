import { useState, useEffect } from "react";
import { getCollection, getNFT } from "../api"; // Example API functions to fetch collection and NFT data

const NFTCollection = () => {
  const [collection, setCollection] = useState(null); // State to store the collection data
  const [nfts, setNFTs] = useState([]); // State to store the NFTs in the collection

  useEffect(() => {
    // Fetch the collection data from the API
    const fetchCollection = async () => {
      const collectionData = await getCollection(); // Example API call to fetch collection data
      setCollection(collectionData);
    };

    fetchCollection();
  }, []);

  useEffect(() => {
    // Fetch the NFTs in the collection from the API
    const fetchNFTs = async () => {
      if (collection) {
        const nftIds = collection.nftIds; // Assuming the collection data includes an array of NFT IDs
        const nftPromises = nftIds.map((id) => getNFT(id)); // Example API call to fetch individual NFT data
        const nftData = await Promise.all(nftPromises);
        setNFTs(nftData);
      }
    };

    fetchNFTs();
  }, [collection]);

  return (
    <div>
      <h1>{collection ? collection.name : "Loading..."}</h1>
      <p>{collection ? collection.description : "Loading..."}</p>

      {nfts.length > 0 ? (
        <div>
          <h2>NFTs in the Collection:</h2>
          {nfts.map((nft) => (
            <div key={nft.id}>
              <h3>{nft.name}</h3>
              <img src={nft.image} alt={nft.name} />
              <p>{nft.description}</p>
              {/* Additional NFT information */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading NFTs...</p>
      )}
    </div>
  );
};

export default NFTCollection;
