'use client'
import { motion, AnimatePresence } from 'motion/react';
import { FaAward } from 'react-icons/fa';
import React, { useEffect } from 'react';

type CertificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    image?: string;
  } | null;
};

export default function ModelCertification({
  isOpen,
  onClose,
  certificate,
}: CertificationModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black flex items-center justify-center z-[999] top-0 left-0 right-0 bottom-0"
          onClick={onClose}
        >

          {/* Full Screen Image */}
          {certificate.image ? (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              src={certificate.image}
              alt={`${certificate.title} Certificate`}
              className="relative cursor-pointer w-[85vw] h-[85vh] object-contain top-8"
              style={{
                zIndex: '999998 !important',
              }}
              onClick={onClose}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
          ) : null}

          {/* Fallback when image fails to load */}
          <div
            className="flex items-center justify-center bg-black cursor-pointer"
            style={{
              display: 'none',
              zIndex: '999998 !important',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            onClick={onClose}
          >
            <div className="text-center">
              <FaAward className="text-8xl text-orange-500 mb-6 mx-auto" />
              <p className="text-white text-2xl font-medium">
                {certificate.title}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
