'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import WalletDetails from '../../components/WalletDetails';
import { useWallet } from '../../contexts/WalletContext';

const ProfilePage = () => {
  const { wallet } = useWallet();

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Your Collection
              </span>
            </h1>
            {!wallet ? (
              <p className="text-xl text-gray-300">
                Connect your wallet to view your Arktifacts
              </p>
            ) : (
              <p className="text-xl text-gray-300">
                View and manage your Arktifact collection
              </p>
            )}
          </motion.div>

          <WalletDetails />
        </motion.div>
      </div>
    </main>
  );
};

export default ProfilePage; 