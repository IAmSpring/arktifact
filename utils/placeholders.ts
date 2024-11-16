export const placeholderImages = {
  episodes: {
    ep1: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 1: Origins of Honor"
      }
    },
    ep2: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 2: Bonds of Kinship"
      }
    },
    ep3: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 3: Age of Innovation"
      }
    },
    ep4: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 4: Guardians of Knowledge"
      }
    },
    ep5: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 5: Industrial Resilience"
      }
    },
    ep6: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 6: New Frontiers"
      }
    },
    ep7: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 7: The Era of Unity"
      }
    },
    ep8: {
      src: "/images/episodes/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "400px",
        text: "Episode 8: The Final Legacy"
      }
    }
  },
  nfts: {
    honorSymbol: {
      src: "/images/nfts/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "300px",
        text: "The Honor Symbol"
      }
    },
    tanekPortrait: {
      src: "/images/nfts/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "300px",
        text: "Tanek's Portrait"
      }
    },
    ancientDrum: {
      src: "/images/nfts/placeholder.jpg",
      fallback: {
        width: "100%",
        height: "300px",
        text: "The Ancient Drum"
      }
    }
  }
}; 

export function getPlaceholderImage(id: string) {
  return `https://via.placeholder.com/800x800.png?text=NFT+${id}`;
}

// Update the allNFTs data to use placeholders if images don't exist
allNFTs.forEach(nft => {
  if (!nft.image.startsWith('http')) {
    nft.image = getPlaceholderImage(nft.id);
  }
}); 