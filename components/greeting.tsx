import { motion } from 'framer-motion';

export const Greeting = () => {
  return (
    <div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20 px-8 size-full flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold"
      >
        Ars Medica
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-zinc-500"
      >
     AI Support for Clinical Judgment
      </motion.div>
            <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-zinc-500"
      >
 Ars Medica, through its advanced clinical intelligence, offers:

-Development of diagnostic hypotheses grounded in current evidence.

-Recommendation of pertinent complementary investigations.

-Proposal of therapeutic strategies aligned with clinical practice guidelines.

-Comprehensive assessment of risks, benefits, and management alternatives.

-Suggestion of referrals to subspecialties when clinically indicated.

-Critical synthesis of relevant scientific literature.

-Proactive detection of pharmacological interactions and safety alerts.
      </motion.div>
    </div>
  );
};
