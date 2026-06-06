import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onFinished, 600); // Allow exit animations to complete
    }, 1600);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Ambient background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />

          {/* Logo Animation */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-slate-900 to-accent p-[1px] shadow-2xl relative group"
            >
              <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Glow reflections */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="font-display font-black text-2xl tracking-tighter text-white"
                >
                  <span className="text-primary">{`{`}</span>
                  <span>MSA</span>
                  <span className="text-accent">{`}`}</span>
                </motion.span>
              </div>

              {/* Orbiting particles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-4px] rounded-2xl border border-dashed border-primary/40 pointer-events-none"
              />
            </motion.div>

            {/* Glowing Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h2 className="font-display font-semibold tracking-widest text-xs uppercase text-slate-400">
                Initializing Systems
              </h2>
              {/* Progress bar */}
              <div className="w-40 h-[2px] bg-slate-800 rounded-full mt-3 overflow-hidden mx-auto">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
