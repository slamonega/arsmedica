'use client';

import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { UseChatHelpers } from '@ai-sdk/react';

interface SuggestedActionsProps {
  chatId: string;
  append: UseChatHelpers['append'];
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const medicalSpecialties = [
    { value: 'cardiology', label: 'Cardiology', action: 'Find a cardiologist near me' },
    { value: 'dermatology', label: 'Dermatology', action: 'Find a dermatologist near me' },
    { value: 'neurology', label: 'Neurology', action: 'Find a neurologist near me' },
    { value: 'pediatrics', label: 'Pediatrics', action: 'Find a pediatrician near me' },
    { value: 'orthopedics', label: 'Orthopedics', action: 'Find an orthopedic specialist near me' },
    { value: 'endocrinology', label: 'Endocrinology', action: 'Find an endocrinologist near me' },
  ];

  const handleSelect = async (value: string) => {
    setSelectedSpecialty(value);
    const selectedAction = medicalSpecialties.find(specialty => specialty.value === value)?.action;
    if (selectedAction) {
      window.history.replaceState({}, '', `/chat/${chatId}`);
      append({
        role: 'user',
        content: selectedAction,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.05 }}
      data-testid="suggested-actions"
      className="w-full max-w-md"
    >
      <select
        value={selectedSpecialty}
        onChange={(e) => handleSelect(e.target.value)}
        className="w-full border rounded-xl px-4 py-3.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>Select a medical specialty</option>
        {medicalSpecialties.map((specialty) => (
          <option key={specialty.value} value={specialty.value}>
            {specialty.label}
          </option>
        ))}
      </select>
    </motion.div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
